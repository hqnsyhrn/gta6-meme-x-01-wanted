const { copyFileSync, mkdirSync } = require("node:fs");
const { join } = require("node:path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(__dirname, "POST.json"), join(outDir, "POST.json"));
