"""Insert twitter:title next to og:title in route heads."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1] / "src" / "routes"
pat = re.compile(
    r'(\{ property: "og:title", content: ([^}]+) \},)',
)

changed = 0
for p in ROOT.rglob("*.tsx"):
    text = p.read_text(encoding="utf-8")
    if 'property: "og:title"' not in text:
        continue
    if "twitter:title" in text:
        continue
    new, n = pat.subn(r'\1\n        { name: "twitter:title", content: \2 },', text, count=1)
    if n:
        p.write_text(new, encoding="utf-8")
        changed += 1
        print("patched", p.name)
print("files", changed)
