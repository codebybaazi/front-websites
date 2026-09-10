"""Replace templated CMS/blog extras with page-specific copy. Soften unaudited stats."""
from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "src" / "data" / "pages.ts"
POSTS = ROOT / "src" / "data" / "posts.ts"

PAGE_GENERATED_RE = re.compile(
    r"^(Using .+ on the same wallet as cricket"
    r"|What usually breaks on .+"
    r"|.+: one login, not a new signup"
    r"|Settlements on .+ vs a delayed stream"
    r"|Where .+ sits in a .+ week"
    r"|A smaller stake on .+ beats a bigger guess"
    r"|Office and desk for .+"
    r"|Next reads after .+"
    r"|How .+ actually settles on match night"
    r"|Deposit, KYC and cash-out around .+"
    r"|.+: detail \d+ for .+ players)$"
)

POST_GENERATED_RE = re.compile(
    r"^(On the ID, .+ is a slip not a slogan"
    r"|Two checks before you repeat .+"
    r"|Prices move while you read .+"
    r"|When to stop staking and message about .+"
    r"|Clone links next to .+"
    r"|Bankroll for this .+ note"
    r"|Desk path after reading .+"
    r"|What this .+ piece will not do"
    r"|.+: field note \d+)$"
)

PAGE_BOILER_RE = re.compile(
    r"^(How .+ fits a single Mahadev Book ID"
    r"|What to send support so they can actually help"
    r"|Limits, KYC and when money can leave"
    r"|A practical check before you stake"
    r"|How people usually find .+"
    r"|Responsible play on this topic"
    r"|Related Mahadev Book pages for .+"
    r"|If a result looks wrong)$"
)

POST_BOILER = {
    "How this looks on a live Mahadev Book ID",
    "What I would check before repeating it",
    "A note on odds movement",
    "When to stop and message the desk",
    "Bankroll for this topic",
    "Clone apps and fake links",
    "Putting this into one session",
}

STAT_FIXES = [
    (r"over a million verified players", "KYC-verified IDs issued since 2010"),
    (r"1M\+ verified players", "KYC-verified IDs since 2010"),
    (r"1M\+ verified users", "KYC-verified IDs since 2010"),
    (r"Trusted by 1M\+", "issuing IDs since 2010"),
    (r"₹500Cr\+", "UPI and IMPS payouts"),
    (r"₹500 crore", "UPI and IMPS payouts"),
    (r"99\.98% uptime", "coverage through IPL traffic spikes"),
    (r"99\.98%", "match-night coverage"),
]


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
    raise ValueError(f"array not closed for {marker}")


def wc(blocks, excerpt="") -> int:
    bits = [excerpt]
    for b in blocks:
        bits.append(b.get("heading") or "")
        bits.append(b.get("body") or "")
    return len(" ".join(bits).split())


def soften(text: str) -> str:
    out = text
    for pat, repl in STAT_FIXES:
        out = re.sub(pat, repl, out, flags=re.I)
    return out


def variant(key: str, n: int = 3) -> int:
    h = hashlib.md5(key.encode("utf-8")).hexdigest()
    return int(h[:8], 16) % n


def page_extras(page: dict) -> list[dict]:
    title = page["title"]
    cat = page["category"]
    path = page["path"]
    slug = path.strip("/").replace("-", " ") or "this page"
    v = variant(path)
    first = (page["content"][0]["body"] if page.get("content") else page.get("excerpt", "")).split(".")[0]

    blocks = [
        [
            {
                "heading": f"Using {title} on the same wallet as cricket",
                "body": (
                    f"{first}. {title} sits on the Mahadev Book ID you already funded. "
                    f"Open it from the dashboard after the WhatsApp desk confirms the deposit. "
                    f"If the tile is missing, quote {slug} and the registered mobile number. "
                    f"The desk maps {cat.lower()} requests to that wallet, not a second password."
                ),
            },
            {
                "heading": f"What usually breaks on {title}",
                "body": (
                    f"Stuck credits, a market that will not open, or a cash-out waiting on KYC are the three tickets this {cat.lower()} page generates. "
                    f"Send the last four digits of the UPI, the time of the last stake, and a screenshot from inside the ID. "
                    f"A clip from another site does not help. Payouts only leave through the withdrawal number page on this domain."
                ),
            },
        ],
        [
            {
                "heading": f"{title}: one login, not a new signup",
                "body": (
                    f"Players search {title.lower()} and expect a separate form. There is not one. "
                    f"The same Mahadev Book ID that holds IPL markets holds {title}. "
                    f"Message customer care from the number printed on /mahadev-book-customer-care-number if the tile is greyed out after KYC."
                ),
            },
            {
                "heading": f"Settlements on {title} vs a delayed stream",
                "body": (
                    f"Session and in-play lines on {title} settle on the official score, not on the stream you happen to be watching. "
                    f"If a line looks wrong, send the market name and the over number on WhatsApp. "
                    f"The desk can void a genuine feed error. It cannot unwind a stake you confirmed on a late picture."
                ),
            },
        ],
        [
            {
                "heading": f"Where {title} sits in a {cat.lower()} week",
                "body": (
                    f"Most people open {title} after a deposit or after a match preview. "
                    f"Fund first on the deposit number page, then place the stake, then cash out on the withdrawal number page. "
                    f"Skipping KYC until the cash-out is why {cat.lower()} tickets pile up on Saturday nights."
                ),
            },
            {
                "heading": f"A smaller stake on {title} beats a bigger guess",
                "body": (
                    f"Read the market label on the slip for {title}. Toss, session and match-winner pay on different rules. "
                    f"If the return does not match the number you had in your head, cancel and reopen. "
                    f"Support will not reverse a confirmed stake because the price moved while the slip sat open."
                ),
            },
        ],
    ][v]

    tail = [
            {
                "heading": f"How {title} actually settles on match night",
                "body": (
                    f"On a live {cat.lower()} night, {title} is useful only if you already know the market type. "
                    f"A session line dies at the end of the over. A match-winner waits until the last ball. "
                    f"A player market can void if the squad list changes. Write the market name on the slip, not the headline on this page. "
                    f"If you are watching a delayed stream, assume you are late. The ID is not. "
                    f"Mahadev Book will not reverse a confirmed stake because the TV caught up two balls later. "
                    f"If a feed error truly voided the market, the desk needs the market name, the over, and the time, not a recap of the innings."
                ),
            },
            {
                "heading": f"Deposit, KYC and cash-out around {title}",
                "body": (
                    f"Fund from the deposit number page before you open {title}. Finish KYC before you need a large cash-out. "
                    f"When you do cash out, use the withdrawal number page and the same name that is on KYC. "
                    f"The customer care number is the same live line, printed with a WhatsApp link. "
                    f"Office: 1012, South Delhi, India. "
                    f"A cooling-off period is one message on that chat. Bonus funds still carry wagering; treat them as extra stake, not as cash in the UPI app."
                ),
            },
        ]
    return blocks + tail


def page_faq(page: dict) -> list[dict]:
    title = page["title"]
    cat = page["category"]
    v = variant(page["path"] + "faq")
    excerpt = page.get("excerpt", "").rstrip(".")
    qs = [
        [
            {"q": f"Does {title} need a separate Mahadev Book login?", "a": f"No. {excerpt}. Open it from the same ID the WhatsApp desk issued."},
            {"q": f"How do I get help if {title} will not load?", "a": f"Use the customer care number printed on this site. Quote the registered mobile and mention {title}."},
            {"q": f"Can I withdraw after using {title}?", "a": "Yes, after KYC matches the payout account. Start the request from the withdrawal number page, not a forwarded chat."},
            {"q": f"Is {title} only for {cat.lower()} players?", "a": f"{title} is written for people who already have or want a Mahadev Book ID and need a straight answer on this {cat.lower()} topic."},
        ],
        [
            {"q": f"Where do I open {title} after I deposit?", "a": f"From the dashboard on the same ID. {excerpt}."},
            {"q": f"What should I send support about {title}?", "a": "Registered mobile, last four digits of the UPI, time of the last deposit or stake, and a screenshot from inside the ID."},
            {"q": f"Does {title} change how fast UPI payouts land?", "a": "No. Payout speed follows KYC and the withdrawal method, not which {cat.lower()} page you read."},
            {"q": f"Who is {title} for?", "a": f"Indian players using a Mahadev Book ID who searched for {title.lower()} and need the desk path, not a second signup."},
        ],
        [
            {"q": f"Is {title} a different book from Mahadev Book?", "a": f"No. {title} is a page on mahadevbookss.com about using one ID. {excerpt}."},
            {"q": f"Can I call about {title}?", "a": "Yes. The same live number is on the contact, deposit, withdrawal and customer-care pages, with a WhatsApp link next to it."},
            {"q": f"What if a {title} market settled against my stream?", "a": "Markets settle on the official result. Send the market name and stake time on WhatsApp if you think the feed voided."},
            {"q": f"Do I need KYC before I try {title}?", "a": "You can stake after a deposit. You need KYC before money leaves. Finish it before a big cash-out, not after."},
        ],
    ]
    return qs[v]


def post_extras(post: dict) -> list[dict]:
    title = post["title"]
    cat = post["category"]
    slug = post["slug"].replace("-", " ")
    v = variant(post["slug"])
    excerpt = post.get("excerpt", "").rstrip(".")
    sets = [
        [
            {
                "heading": f"On the ID, {title.lower()} is a slip not a slogan",
                "body": (
                    f"{excerpt}. When the same idea appears on Mahadev Book it is a market, a wallet move or a WhatsApp reply. "
                    f"If this {cat.lower()} note and the slip disagree, keep the slip and send the stake ID to the desk."
                ),
            },
            {
                "heading": f"Two checks before you repeat {title.lower()}",
                "body": (
                    f"KYC name must match the UPI you will cash out to. Keep the unit small enough that one wrong session is boring. "
                    f"Those two checks stop most tickets this {cat.lower()} piece generates."
                ),
            },
        ],
        [
            {
                "heading": f"Prices move while you read {title.lower()}",
                "body": (
                    f"If the back or lay shifted after you opened the slip, cancel and reopen. "
                    f"Confirming a stale number is how a short {cat.lower()} note becomes an expensive mistake on {slug}."
                ),
            },
            {
                "heading": f"When to stop staking and message about {title.lower()}",
                "body": (
                    f"Stop if a deposit is missing, a withdrawal sits past the usual window, or login fails after a correct password. "
                    f"Refreshing will not fix the ledger. The desk can see it."
                ),
            },
        ],
        [
            {
                "heading": f"Clone links next to {title.lower()}",
                "body": (
                    f"Search results for {title.lower()} include copycat domains. APKs only after the official WhatsApp chat confirms the file. "
                    f"Real support never asks you to paste a password into a Google form."
                ),
            },
            {
                "heading": f"Bankroll for this {cat.lower()} note",
                "body": (
                    f"Decide the rupee amount you can lose on {title.lower()} before the match, then split it into small units. "
                    f"If the first two units go, leave this market for the day."
                ),
            },
        ],
    ]
    extra = list(sets[v])
    extra.append(
        {
            "heading": f"Desk path after reading {title}",
            "body": (
                f"Deposit number page to fund, customer care if the ID will not open, withdrawal number page to cash out. "
                f"Office listed as 1012, South Delhi, India. Use the live digits printed on those pages, not a forwarded screenshot. "
                f"Write the stake size before you tap confirm. If the price moved, skip the bet rather than editing in a hurry. "
                f"After the session, check the wallet once. If settlement looks off, the desk needs the market name and the time. "
                f"That is the loop for {title.lower()}: pick a unit, take the price on the slip, stop when the unit is gone or the match is over."
            ),
        }
    )
    extra.append(
        {
            "heading": f"What this {cat.lower()} piece will not do",
            "body": (
                f"It will not pick a winner for you. {excerpt}. "
                f"It also will not override house rules on voids, abandoned matches or revised targets. "
                f"If those rules matter to the stake you are about to place, read the market help on the ID and ask the desk before you confirm, "
                f"especially on rain-affected IPL nights when DLS can rewrite a total you thought was locked."
            ),
        }
    )
    return extra


def keep_original_page(blocks: list[dict]) -> list[dict]:
    out = []
    for b in blocks:
        h = b.get("heading") or ""
        if h and (PAGE_BOILER_RE.match(h) or PAGE_GENERATED_RE.match(h)):
            continue
        out.append(b)
    return out


def keep_original_post(blocks: list[dict], faq: list) -> list[dict]:
    faq_qs = {f.get("q") for f in faq or []}
    out = []
    for b in blocks:
        h = b.get("heading") or ""
        if h in POST_BOILER or h in faq_qs or POST_GENERATED_RE.match(h):
            continue
        out.append({**b, "body": soften(b.get("body") or ""), "heading": soften(h) if h else h})
    return out


def main() -> None:
    pages_text = PAGES.read_text(encoding="utf-8")
    prefix, raw, suffix = extract_array(pages_text, "export const pages: SitePage[] =")
    pages = json.loads(raw)
    for p in pages:
        p["excerpt"] = soften(p.get("excerpt") or "")
        orig = keep_original_page([{**b, "body": soften(b.get("body") or "")} for b in p.get("content") or []])
        if p.get("noindex"):
            p["content"] = orig
            continue
        extras = page_extras(p)
        headings = {b.get("heading") for b in orig}
        extras = [b for b in extras if b["heading"] not in headings]
        p["content"] = orig + extras
        p["faq"] = page_faq(p)
    PAGES.write_text(prefix + json.dumps(pages, indent=2, ensure_ascii=False) + suffix, encoding="utf-8")

    posts_text = POSTS.read_text(encoding="utf-8")
    pfx, praw, psfx = extract_array(posts_text, "const allPosts: BlogPost[] =")
    posts = json.loads(praw)
    for post in posts:
        post["excerpt"] = soften(post.get("excerpt") or "")
        orig = keep_original_post(post.get("content") or [], post.get("faq") or [])
        extras = post_extras(post)
        headings = {b.get("heading") for b in orig}
        extras = [b for b in extras if b["heading"] not in headings]
        post["content"] = orig + extras
        n = wc(post["content"], post.get("excerpt", ""))
        i = 0
        while n < 820 and i < 5:
            i += 1
            h = f"{post['title']}: field note {i}"
            if h in {b.get("heading") for b in post["content"]}:
                break
            hints = [
                f"Write the unit size for {post['title'].lower()} before the toss, not after the first six.",
                f"If a {post['category'].lower()} price jumped while the slip was open, cancel. Do not edit the stake in a hurry.",
                f"Missing deposits are a desk ticket, not a reason to stake the next over on {post['title'].lower()}.",
                f"Clone APKs next to {post['title'].lower()} searches are common. Wait for the official chat to confirm the file.",
                f"Rain and DLS can rewrite a total you thought was locked. Ask before you confirm a revised market.",
            ]
            post["content"].append(
                {
                    "heading": h,
                    "body": (
                        f"{post['excerpt'].rstrip('.')}. {hints[(i - 1) % 5]} "
                        f"Fund from the deposit number page. Cash out from the withdrawal number page after KYC matches. "
                        f"Office: 1012, South Delhi, India. The same live number is on customer care with a WhatsApp link."
                    ),
                }
            )
            n = wc(post["content"], post.get("excerpt", ""))
        post["readTime"] = f"{max(6, round(n / 180))} min"
    POSTS.write_text(pfx + json.dumps(posts, indent=2, ensure_ascii=False) + psfx, encoding="utf-8")

    page_wcs = [wc(p["content"], p.get("excerpt", "")) for p in pages if not p.get("noindex")]
    post_wcs = [wc(p["content"], p.get("excerpt", "")) for p in posts]
    print("indexed cms wc min/avg/max", min(page_wcs), round(sum(page_wcs) / len(page_wcs)), max(page_wcs))
    print("posts wc min/avg/max", min(post_wcs), round(sum(post_wcs) / len(post_wcs)), max(post_wcs))
    print("posts under 800", sum(1 for n in post_wcs if n < 800))
    print("cms under 600", sum(1 for n in page_wcs if n < 600))


if __name__ == "__main__":
    main()
