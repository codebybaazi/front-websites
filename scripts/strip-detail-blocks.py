"""Remove templated 'detail N' CMS blocks. Add unique copy only if indexed pages fall under 600 words."""
from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "src" / "data" / "pages.ts"
DETAIL_RE = re.compile(r": detail \d+ for ", re.I)


def extract_array(text: str, marker: str) -> tuple[str, str, str]:
    idx = text.index(marker)
    start = text.index("= [", idx) + 2
    depth = 0
    for i, ch in enumerate(text[start:], start):
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                return text[:start], text[start : i + 1], text[i + 1 :]
    raise ValueError("array not closed")


def wc(blocks, excerpt="") -> int:
    bits = [excerpt]
    for b in blocks:
        bits.append(b.get("heading") or "")
        bits.append(b.get("body") or "")
    return len(" ".join(bits).split())


def variant(key: str, n: int = 4) -> int:
    return int(hashlib.md5(key.encode("utf-8")).hexdigest()[:8], 16) % n


def unique_blocks(page: dict) -> list[dict]:
    title = page["title"]
    cat = page["category"]
    path = page["path"]
    kept = [b for b in page.get("content") or [] if not DETAIL_RE.search(b.get("heading") or "")]
    bodies = [b.get("body") or "" for b in kept if b.get("body")]
    lead = bodies[0] if bodies else page.get("excerpt", "")
    extra = bodies[1] if len(bodies) > 1 else lead
    v = variant(path)
    sets = [
        [
            {
                "heading": f"After a UPI credit, open {title} from the dashboard",
                "body": (
                    f"{lead} Wait until the wallet figure updates before you tap into {title}. "
                    f"A second deposit sent because the first has not painted yet is a common {cat.lower()} ticket. "
                    f"If the tile stays grey, quote {path} and the registered mobile on customer care. "
                    f"Do not pay a QR from a forwarded status."
                ),
            },
            {
                "heading": f"What {title} will not fix for you",
                "body": (
                    f"{extra} A cooling-off request is one WhatsApp message. "
                    f"Bonus funds still carry wagering. "
                    f"If KYC name and UPI name differ, a cash-out after using {title} will sit until you tell the desk the new UPI."
                ),
            },
        ],
        [
            {
                "heading": f"Reading the slip on {title} before you confirm",
                "body": (
                    f"{lead} Session, toss and match-winner lines settle on different clocks. "
                    f"If the return on the slip does not match the number you had in your head, cancel and reopen. "
                    f"The desk will not reverse a confirmed stake because the price moved while {title} sat open."
                ),
            },
            {
                "heading": f"Who to message if {title} looks wrong after settlement",
                "body": (
                    f"{extra} Send the market name, the over number if it is a session, and the time of the stake. "
                    f"Markets follow the official result, not a delayed stream. "
                    f"Office: 1012, South Delhi, India. Phone and WhatsApp are on the contact and customer-care pages."
                ),
            },
        ],
        [
            {
                "heading": f"{title} on an IPL night versus a quiet weekday",
                "body": (
                    f"{lead} On IPL and cup nights the desk is slower to pick up, so put the registered mobile in the first line. "
                    f"On a quiet Tuesday the same {cat.lower()} request is usually shorter. "
                    f"Either way, {title} still sits on the one Mahadev Book ID, not a second signup."
                ),
            },
            {
                "heading": f"Clone searches that sit next to {title}",
                "body": (
                    f"{extra} Search results for {title.lower()} include copycat domains. "
                    f"APKs only after the official WhatsApp chat confirms the file. "
                    f"Real support never asks you to paste a password into a Google form."
                ),
            },
        ],
        [
            {
                "heading": f"Stopping a session on {title} before it gets expensive",
                "body": (
                    f"{lead} Decide the rupee amount you can lose on {title} before the match starts, then split it. "
                    f"Two losing units is a reason to leave this {cat.lower()} market for the day. "
                    f"Chasing the next over is how a 200 rupee idea becomes a 2,000 rupee ticket."
                ),
            },
            {
                "heading": f"Deposit and cash-out around {title} in one chat",
                "body": (
                    f"{extra} Fund from the deposit number page. Cash out from the withdrawal number page after KYC matches. "
                    f"The same live number is on customer care with a WhatsApp link. "
                    f"support@mahadevbookss.com is for a written record, not a stuck UPI that needs the desk now."
                ),
            },
        ],
    ]
    headings = {b.get("heading") for b in kept}
    return [b for b in sets[v] if b["heading"] not in headings]


def main() -> None:
    text = PAGES.read_text(encoding="utf-8")
    prefix, raw, suffix = extract_array(text, "export const pages: SitePage[] =")
    pages = json.loads(raw)
    removed = 0
    filled = 0
    for p in pages:
        before = len(p.get("content") or [])
        p["content"] = [b for b in (p.get("content") or []) if not DETAIL_RE.search(b.get("heading") or "")]
        removed += before - len(p["content"])
        if p.get("noindex"):
            continue
        n = wc(p["content"], p.get("excerpt", ""))
        if n < 600:
            extra = unique_blocks(p)
            p["content"].extend(extra)
            filled += 1
    PAGES.write_text(prefix + json.dumps(pages, indent=2, ensure_ascii=False) + suffix, encoding="utf-8")
    wcs = [wc(p["content"], p.get("excerpt", "")) for p in pages if not p.get("noindex")]
    left = sum(
        1
        for p in pages
        for b in p.get("content") or []
        if DETAIL_RE.search(b.get("heading") or "")
    )
    print("removed", removed, "filled pages", filled, "detail left", left)
    print("indexed wc min/avg/max", min(wcs), round(sum(wcs) / len(wcs)), max(wcs), "under600", sum(1 for n in wcs if n < 600))


if __name__ == "__main__":
    main()
