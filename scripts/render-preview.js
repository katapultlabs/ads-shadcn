import { chromium } from "playwright";
import { createServer } from "node:http";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const mimeTypes = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function encodeBase64Url(value) {
  return Buffer.from(value, "utf8").toString("base64url");
}

const args = process.argv.slice(2);
const urlIndex = args.indexOf("--url");
const explicitUrl = urlIndex >= 0 ? args[urlIndex + 1] : undefined;
if (urlIndex >= 0) args.splice(urlIndex, 2);

const code = args.join(" ") || "<Button colorPalette=\"brand\">Preview</Button>";
let baseUrl = explicitUrl || process.env.ADS_EXPLORER_URL || "http://127.0.0.1:4173";
const outDir = resolve("artifacts");
const outPath = resolve(outDir, "render-preview.png");
const reportPath = resolve(outDir, "render-preview.json");

await mkdir(outDir, { recursive: true });

async function isReachable(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    return response.ok && html.includes("ADS Light Explorer");
  } catch {
    return false;
  }
}

async function startStaticServer() {
  const distDir = resolve("dist");
  const server = createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url ?? "/", "http://127.0.0.1");
      const pathname = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
      const filePath = resolve(join(distDir, pathname));
      const withinDist = filePath.startsWith(distDir);
      const exists = withinDist ? await stat(filePath).then((item) => item.isFile()).catch(() => false) : false;
      const finalPath = exists ? filePath : join(distDir, "index.html");
      const body = await readFile(finalPath);
      response.writeHead(200, { "Content-Type": mimeTypes[extname(finalPath)] ?? "application/octet-stream" });
      response.end(body);
    } catch (error) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end(String(error));
    }
  });
  await new Promise((resolveServer) => server.listen(0, "127.0.0.1", resolveServer));
  const address = server.address();
  return {
    server,
    url: `http://127.0.0.1:${address.port}`,
  };
}

let staticServer;
if (!(await isReachable(baseUrl))) {
  const fallback = await startStaticServer();
  staticServer = fallback.server;
  baseUrl = fallback.url;
}

const url = `${baseUrl}/?code=${encodeBase64Url(code)}`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
const errors = [];
page.on("pageerror", (error) => errors.push(String(error.message ?? error)));
page.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});
await page.goto(url, { waitUntil: "networkidle" });
const target = page.locator("#ads-render-target");
const renderText = await target.innerText().catch(() => "");
const renderFailed = renderText.includes("Render failed");
await target.screenshot({ path: outPath });
await browser.close();
staticServer?.close();

await writeFile(resolve(outDir, "render-preview-url.txt"), url, "utf8");
await writeFile(
  reportPath,
  `${JSON.stringify({
    timestamp: new Date().toISOString(),
    url,
    screenshot: outPath,
    ok: !renderFailed && errors.length === 0,
    renderFailed,
    errors,
  }, null, 2)}\n`,
  "utf8",
);
console.log(outPath);
