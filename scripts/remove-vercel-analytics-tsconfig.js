const fs = require("fs");
const path = require("path");

const target = path.join(
  __dirname,
  "..",
  "node_modules",
  "@vercel",
  "analytics",
  "tsconfig.json",
);

try {
  fs.unlinkSync(target);
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
