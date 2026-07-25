#!/usr/bin/env node
/**
 * Bake workspace wordmark lockup to high-resolution PNG from vector/HTML source.
 *
 * Uses Playwright + loaded web fonts (Newsreader). Do not use browser UI screenshots.
 *
 * Usage:
 *   node export-workspace-logo.mjs
 *   node export-workspace-logo.mjs --scale 8
 *   node export-workspace-logo.mjs --transparent
 */

import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { chromium } = require(
  path.resolve(__dirname, "../../../e2e/node_modules/playwright"),
);

const WIDTH = 320;
const HEIGHT = 132;

function parseArgs(argv) {
  let scale = 4;
  let transparent = false;
  for (let i = 2; i < argv.length; i += 1) {
    if (argv[i] === "--scale" && argv[i + 1]) {
      scale = Number(argv[++i]);
    } else if (argv[i] === "--transparent") {
      transparent = true;
    }
  }
  if (!Number.isFinite(scale) || scale < 1) {
    throw new Error("Invalid --scale value");
  }
  return { scale, transparent };
}

async function waitForNewsreader(page) {
  await page.waitForFunction(async () => {
    try {
      await document.fonts.load('500 82px "Newsreader"');
      return document.fonts.check('500 82px "Newsreader"');
    } catch {
      return false;
    }
  }, { timeout: 15000 });
}

async function main() {
  const { scale, transparent } = parseArgs(process.argv);
  const htmlPath = path.join(__dirname, "aimez-workspace-logo-source.html");
  const htmlUrl = `file://${htmlPath}`;
  const outDir = path.join(__dirname, "exports");
  await mkdir(outDir, { recursive: true });

  const suffix = transparent ? "-transparent" : "";
  const outBase = `aimez-workspace-logo${suffix}@${scale}x`;
  const outPng = path.join(outDir, `${outBase}.png`);

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({
      viewport: { width: WIDTH, height: HEIGHT },
      deviceScaleFactor: scale,
    });

    if (transparent) {
      await page.addStyleTag({
        content: "html, body { background: transparent !important; }",
      });
    }

    await page.goto(htmlUrl, { waitUntil: "networkidle" });
    await waitForNewsreader(page);

    await page.locator(".lockup").screenshot({
      path: outPng,
      omitBackground: transparent,
    });

    const meta = await page.evaluate(({ width, height, scale: s }) => ({
      cssWidth: width,
      cssHeight: height,
      scale: s,
      pixelWidth: width * s,
      pixelHeight: height * s,
    }), { width: WIDTH, height: HEIGHT, scale });

    const manifest = {
      sourceHtml: "aimez-workspace-logo-source.html",
      sourceSvg: "aimez-workspace-logo-source.svg",
      output: path.basename(outPng),
      ...meta,
      transparent,
      bakedAt: new Date().toISOString(),
    };

    await writeFile(
      path.join(outDir, `${outBase}.json`),
      `${JSON.stringify(manifest, null, 2)}\n`,
    );

    console.log(`Wrote ${outPng} (${meta.pixelWidth}x${meta.pixelHeight}px)`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
