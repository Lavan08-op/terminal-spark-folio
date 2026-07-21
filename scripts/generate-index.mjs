import fs from "fs";
import path from "path";

const clientDir = path.resolve("dist/client");
const assetsDir = path.join(clientDir, "assets");
const files = fs.readdirSync(assetsDir);

const mainCss = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
// Include ALL js files as modules
const jsFiles = files.filter((f) => f.endsWith(".js"));

const scriptTags = jsFiles
  .map((f) => `<script type="module" src="/assets/${f}"></script>`)
  .join("\n    ");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lavanya Saini — Cybersecurity Analyst & Full-Stack Developer</title>
    <meta name="description" content="Portfolio of Lavanya Saini — B.Tech IT @ MAIT Delhi. VAPT, penetration testing, and full-stack engineering with React, FastAPI, and the MERN stack." />
    <meta name="theme-color" content="#050c1a" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" />
    ${mainCss ? `<link rel="stylesheet" href="/assets/${mainCss}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${scriptTags}
  </body>
</html>`;

fs.writeFileSync(path.join(clientDir, "index.html"), html);
console.log("✓ index.html generated");
console.log("JS files included:", jsFiles);
