"""Expand CMS/blog copy, drop leftover stubs, shorten titles, set updated dates."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "src" / "data" / "pages.ts"
POSTS = ROOT / "src" / "data" / "posts.ts"

DELETE_PATHS = {
    "/about-us",
    "/basketball-betting",
    "/champions-trophy-betting",
    "/esports-betting",
    "/ipl-betting",
    "/kabaddi-betting",
    "/policies",
}

NOINDEX_PATHS = {
    "/deposit-issues",
    "/horse-race-betting",
    "/icc-t20-world-cup-betting",
    "/login-issues",
    "/mahadev-betting",
    "/mahadev-book-app",
    "/mahadev-book-bonus",
    "/mahadev-login",
    "/mahadev-prediction",
    "/mahadev-referral-code",
    "/mahadev-reviews",
    "/mahadev-security",
    "/mahadev-sports-betting",
    "/mahadev-telegram-channel",
    "/mahadev-whatsapp-number",
    "/mahadev-whatsapp-support",
    "/mahadevbook",
    "/privacy-policy",
    "/responsible-gaming",
    "/support",
    "/terms-conditions",
    "/what-is-mahadev",
    "/why-choose-mahadev-book",
    "/withdrawal-delay",
    "/wpl-2026-betting-mahadev-book",
}

UPDATED = "2026-09-10"


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


def shorten_title(title: str) -> str:
    if len(title) <= 60:
        return title
    t = title
    replacements = [
        (" — ", ": "),
        (" – ", ": "),
        (" on Mahadev Book", ""),
        (" | Mahadev Book", ""),
        (" (Mahadev Book)", ""),
        ("Mahadev Book ", ""),
        ("The Complete Guide to ", ""),
        ("Complete ", ""),
        ("A Practical ", ""),
        ("A Beginner's ", ""),
        ("Step-by-Step: ", ""),
        (" Explained Simply", ""),
        (" Explained", ""),
        (" for Indian Fans", ""),
        (" for Indian Users", ""),
        (" for Football Fans", ""),
        (" in India", ""),
        (" (2026 Edition)", ""),
        (" (2026)", ""),
        (" 2026", ""),
    ]
    for a, b in replacements:
        if len(t) <= 60:
            break
        t = t.replace(a, b)
    t = t.strip(" :|-")
    if len(t) <= 60:
        return t
    # Keep a complete last word, no ellipsis.
    cut = t[:60].rsplit(" ", 1)[0].rstrip(" :|-")
    return cut if 20 <= len(cut) <= 60 else t[:60].rstrip()


def page_faq(page: dict) -> list[dict]:
    title = page["title"]
    path = page["path"]
    cat = page["category"]
    return [
        {
            "q": f"What is {title} on Mahadev Book?",
            "a": page["excerpt"].rstrip(".") + ".",
        },
        {
            "q": f"How do I use {title} with a Mahadev Book ID?",
            "a": f"Message the official WhatsApp desk for a verified ID, fund the wallet, then open {title} from the dashboard. {cat} pages on this site walk through the same account, not a second login.",
        },
        {
            "q": f"Who is {title} for?",
            "a": f"Players who already have or want a Mahadev Book ID and need a straight answer on {title.lower()}, including what to send support if something sticks.",
        },
        {
            "q": f"Where do I get help if {path.strip('/').replace('-', ' ')} goes wrong?",
            "a": "Use the same WhatsApp line that issued the ID. Quote the registered mobile number. The desk can see deposits, KYC and login state on that account.",
        },
    ]


def expand_page(page: dict) -> dict:
    if page.get("noindex"):
        return page
    title = page["title"]
    excerpt = page["excerpt"]
    cat = page["category"]
    existing = page["content"]
    first = existing[0]["body"] if existing else excerpt
    extra = [
        {
            "heading": f"How {title} fits a single Mahadev Book ID",
            "body": (
                f"{first} That ID is the same login for cricket, football, casino and withdrawals. "
                f"You do not open a separate {title} account. WhatsApp support maps the request to the wallet you already funded."
            ),
        },
        {
            "heading": "What to send support so they can actually help",
            "body": (
                f"If something on {title} stalls, send the registered mobile number, the last four digits of the UPI or bank used, "
                f"and the time of the last deposit or bet. The desk can see the account from that. A screenshot of a third-party site does not help, "
                f"because payouts and IDs only move through the official chat."
            ),
        },
        {
            "heading": "Limits, KYC and when money can leave",
            "body": (
                f"{excerpt.rstrip('.')} Withdrawals wait on KYC that matches the payout account name. "
                f"If you change UPI, say so in the same chat before you request a cash-out, or the request sits until the names match."
            ),
        },
        {
            "heading": "A practical check before you stake",
            "body": (
                f"Read the market name on the slip, not just the headline on {title}. Session, toss and match-winner lines settle on different rules. "
                f"If the slip looks wrong, close it and open the market again. Support can reverse a genuine desk error; they cannot unwind a stake you confirmed."
            ),
        },
        {
            "heading": f"How people usually find {title}",
            "body": (
                f"Most players land here after a WhatsApp reply or a search for {title.lower()}. The useful bit is the same in both cases: "
                f"one verified ID, UPI in and out, and a human on the chat if the wallet does not move. Bookmark this page if you keep asking the same question during IPL nights."
            ),
        },
        {
            "heading": "Responsible play on this topic",
            "body": (
                f"Set a daily cap before you open {title}, and treat bonus funds as extra stake with wagering, not as cash. "
                f"If you need a cooling-off period, one WhatsApp message can apply it. That is faster than arguing with yourself after a losing session."
            ),
        },
        {
            "heading": f"Related Mahadev Book pages for {cat.lower()}",
            "body": (
                f"After {title}, the useful next reads are the deposit methods guide if the wallet is empty, the KYC page if you cannot withdraw, "
                f"and the login-issues page if the ID will not open. Those three cover most of the {cat.lower()} tickets that never needed a long thread."
            ),
        },
        {
            "heading": "If a result looks wrong",
            "body": (
                f"Markets on {title} settle on the official result, not on a stream delay. If you think a session line paid the wrong side, "
                f"send the market name, the over number and the stake time on WhatsApp. Keep the chat to facts. The desk will say whether it is a true void or a loss that already settled."
            ),
        },
    ]
    headings = {b.get("heading") for b in existing}
    extra = [b for b in extra if b["heading"] not in headings]
    # Keep originals first so the page still starts with its own copy.
    merged = list(existing) + extra
    page["content"] = merged
    page["faq"] = page_faq(page)
    return page


def expand_post(post: dict) -> dict:
    post["title"] = shorten_title(post["title"])
    blocks = list(post.get("content") or [])
    faq = post.get("faq") or []
    title = post["title"]
    cat = post["category"]
    excerpt = post["excerpt"]
    first = blocks[0]["body"] if blocks else excerpt
    extras = [
        {
            "heading": "How this looks on a live Mahadev Book ID",
            "body": (
                f"{first} On the ID itself the same idea shows up as a market, a wallet movement or a WhatsApp reply, "
                f"not as a slogan. If the screen and this {cat.lower()} note disagree, trust the slip in front of you and ask the desk with the stake ID."
            ),
        },
        {
            "heading": "What I would check before repeating it",
            "body": (
                f"{excerpt.rstrip('.')} Confirm KYC matches the UPI you will cash out to, keep the unit size small enough that one wrong session is boring, "
                f"and do not reuse a password you used on a clone site. Those three checks catch most of the tickets this topic generates."
            ),
        },
    ]
    if faq:
        extras.append(
            {
                "heading": faq[0]["q"],
                "body": faq[0]["a"]
                + " If that still does not match what you see, send the registered number on WhatsApp rather than retrying the same button.",
            }
        )
    extras.append(
        {
            "heading": "A note on odds movement",
            "body": (
                f"Prices on {title.lower()} can move after you have the slip open. If the back or lay has shifted, the stake you typed may no longer match the return you had in your head. "
                f"Cancel and reopen rather than confirming a number you did not mean. That habit saves more money than any tip in the {cat.lower()} section."
            ),
        }
    )
    extras.append(
        {
            "heading": "When to stop and message the desk",
            "body": (
                f"Stop and message support if a deposit is missing, a withdrawal sits past the usual window, or login fails after a correct password. "
                f"Do not keep staking while those are open. The desk can see the ledger; refreshing the app will not."
            ),
        }
    )
    extras.append(
        {
            "heading": "Bankroll for this topic",
            "body": (
                f"Decide the rupee amount you can lose on {title.lower()} before the match starts, then split it into small units. "
                f"If the first two units go, walk away from this market for the day. Chasing on the next over is how a 200 rupee idea becomes a 2,000 rupee ticket."
            ),
        }
    )
    extras.append(
        {
            "heading": "Clone apps and fake links",
            "body": (
                f"Search results for {title.lower()} include copycat domains. Download APKs only after the official WhatsApp chat confirms the current file. "
                f"If a site asks for SMS permission or a second password, close it. Real support never asks you to paste your login into a Google form."
            ),
        }
    )
    headings = {b.get("heading") for b in blocks}
    extras = [b for b in extras if b["heading"] not in headings]
    post["content"] = blocks + extras
    n = wc(post["content"], excerpt)
    if n < 820:
        post["content"].append(
            {
                "heading": "Putting this into one session",
                "body": (
                    f"Open the Mahadev Book ID, find the market this {cat.lower()} piece is about, and write the stake size down before you tap confirm. "
                    f"{excerpt.rstrip('.')} If the price has moved, skip the bet rather than editing the stake in a hurry. "
                    f"After the session, check the wallet once. If the settlement looks off, the WhatsApp desk needs the market name and the time, not a recap of the match. "
                    f"That is the whole loop for {title.lower()}: decide the unit, take the price you actually see, then stop when the unit is gone or the match is over."
                ),
            }
        )
    n = wc(post["content"], excerpt)
    mins = max(6, round(n / 180))
    post["readTime"] = f"{mins} min"
    post["updated"] = UPDATED
    return post


def main() -> None:
    pages_text = PAGES.read_text(encoding="utf-8")
    prefix, raw, suffix = extract_array(pages_text, "export const pages: SitePage[] =")
    pages = json.loads(raw)
    kept = []
    for p in pages:
        if p["path"] in DELETE_PATHS:
            continue
        if p["path"] in NOINDEX_PATHS:
            p["noindex"] = True
            kept.append(p)
            continue
        kept.append(expand_page(p))
    pages_out = prefix + json.dumps(kept, indent=2, ensure_ascii=False) + suffix
    PAGES.write_text(pages_out, encoding="utf-8")

    posts_text = POSTS.read_text(encoding="utf-8")
    pfx, praw, psfx = extract_array(posts_text, "const allPosts: BlogPost[] =")
    posts = json.loads(praw)
    posts = [expand_post(p) for p in posts]
    POSTS.write_text(pfx + json.dumps(posts, indent=2, ensure_ascii=False) + psfx, encoding="utf-8")

    long_titles = [p["title"] for p in posts if len(p["title"]) > 60]
    page_wcs = [wc(p["content"], p.get("excerpt", "")) for p in kept if not p.get("noindex")]
    post_wcs = [wc(p["content"], p.get("excerpt", "")) for p in posts]
    print("pages kept", len(kept), "deleted", len(pages) - len(kept))
    print("indexed cms wc min/avg/max", min(page_wcs), round(sum(page_wcs) / len(page_wcs)), max(page_wcs))
    print("posts", len(posts), "wc min/avg/max", min(post_wcs), round(sum(post_wcs) / len(post_wcs)), max(post_wcs))
    print("posts under 800", sum(1 for n in post_wcs if n < 800))
    print("titles over 60", len(long_titles))
    for t in long_titles[:15]:
        print(" ", len(t), t)


if __name__ == "__main__":
    main()
