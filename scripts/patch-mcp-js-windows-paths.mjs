/**
 * @lovable.dev/mcp-js 0.28.0 compares Vite's POSIX-style config.root
 * (D:/...) with Node path.resolve output (D:\...) using path.sep.
 * That check always fails on Windows. Normalize both sides to `/`.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const target = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "node_modules",
  "@lovable.dev",
  "mcp-js",
  "dist",
  "stacks",
  "tanstack",
  "vite.js",
);

const needle =
  "function assertContains(parent, child, label) {\n\tif (child !== parent && !child.startsWith(parent + sep)) throw new Error(`@lovable.dev/mcp-js: ${label} must resolve under ${parent}, got ${child}`);\n}";

const replacement = `function assertContains(parent, child, label) {
	const p = normalizePath(parent);
	const c = normalizePath(child);
	if (c !== p && !c.startsWith(p + "/")) throw new Error(\`@lovable.dev/mcp-js: \${label} must resolve under \${parent}, got \${child}\`);
}`;

let src;
try {
  src = readFileSync(target, "utf8");
} catch {
  process.exit(0);
}

if (src.includes("const p = normalizePath(parent)")) {
  process.exit(0);
}

if (!src.includes(needle)) {
  console.warn("patch-mcp-js-windows-paths: vite.js did not match expected assertContains; skipping");
  process.exit(0);
}

writeFileSync(target, src.replace(needle, replacement));
console.log("patch-mcp-js-windows-paths: patched @lovable.dev/mcp-js Windows path check");
