import json
import re

def get_unique_content(slug, title, q_idx, post_idx):
    title = title.replace(" – Elite Fairplay Guide", "").replace("\\u2013", "-").replace(" - Elite Fairplay Guide", "").strip()
    
    # 30 unique question stems
    q_stems = [
        "How do I maximize profits on {t} in 2026?",
        "What are the elite security protocols for {t}?",
        "Can I access {t} features via the Fairplay mobile app?",
        "Is there a dedicated VIP support line for {t}?",
        "What are the withdrawal limits for {t} winnings?",
        "How does Fairplay verify the integrity of {t} events?",
        "Are there exclusive 2026 bonuses for {t} users?",
        "Does {t} support instant UPI and crypto deposits?",
        "What is the average latency for {t} live updates?",
        "How can I join the premium betting circle for {t}?",
        "Is two-factor authentication mandatory for {t}?",
        "What happens if my session for {t} expires during a bet?",
        "How do I track my long-term ROI for {t}?",
        "Are there private rooms for {t} high-rollers?",
        "Does {t} include real-time momentum indicators?",
        "What is the minimum stake for {t} on the Fairplay platform?",
        "Can I automate my {t} strategies via the Fairplay API?",
        "How does the Fairplay algorithm optimize odds for {t}?",
        "Are there any hidden fees for {t} transactions?",
        "Who manages the liquidity pools for {t} markets?",
        "What educational resources are available for {t}?",
        "How often is the market data for {t} refreshed?",
        "Does {t} support partial cash-out options?",
        "What is the legal status of {t} betting in 2026?",
        "Can I invite partners to a {t} syndicate?",
        "What are the seasonal multipliers for {t}?",
        "How do I export my {t} activity for audit?",
        "Is there a demo mode to test {t} systems?",
        "What is the priority settlement time for {t}?",
        "How do I upgrade to Platinum status for {t}?"
    ]
    
    # 30 unique answer stems
    a_stems = [
        "To maximize returns on {t}, elite members utilize our real-time momentum trackers and proprietary odds analysis tools.",
        "Fairplay employs military-grade RSA 4096-bit encryption and multi-factor authentication for all {t} related data.",
        "Yes, the Fairplay mobile experience for {t} is fully optimized for zero-latency execution on both iOS and Android.",
        "Elite members receive a dedicated 24/7 account manager for all {t} queries, ensuring priority resolution.",
        "Winnings from {t} enjoy our highest withdrawal ceilings, with most elite transfers processed within 5-15 minutes.",
        "We partner with global integrity monitors and use blockchain-based audit trails to verify every {t} outcome.",
        "Absolutely. Users interested in {t} can unlock weekly cashback and turnover-based multipliers automatically.",
        "Fairplay supports instant settlement for {t} via major UPI apps, IMPS, and premium cryptocurrencies like USDT.",
        "Our global edge network ensures that {t} data reaches your device in under 150ms for professional-grade speed.",
        "Membership is based on volume; active {t} bettors are automatically invited to our exclusive VIP inner circle.",
        "While not mandatory for all levels, we strongly recommend 2FA for all {t} actions to ensure elite-level security.",
        "Our robust server architecture maintains your {t} bet status even during temporary connectivity drops.",
        "The Fairplay Pro dashboard provides granular performance metrics and deep-dive ROI analysis for {t} enthusiasts.",
        "Yes, our 'Black-Tier' members gain access to private, high-limit environments for {t} with bespoke dealers.",
        "Premium charts for {t} include live heat maps and momentum oscillators to inform your elite strategy.",
        "Fairplay remains inclusive with flexible entry points for {t}, though elite high-rollers enjoy custom high-stakes.",
        "Professional bettors can leverage our RESTful API to integrate custom bots and models for {t} execution.",
        "Our quant-algorithms analyze global betting flows in real-time to offer the most competitive odds for {t}.",
        "Transparency is our core value; there are zero hidden fees for any {t} activities on the elite platform.",
        "We collaborate with top-tier global market makers to ensure deep liquidity and tight spreads for {t} at all times.",
        "Elite members have access to a library of masterclasses and tactical whitepapers focused on {t} mastery.",
        "Market data for {t} is refreshed every 500 milliseconds, providing a decisive edge in fast-moving markets.",
        "Yes, our elite partial cash-out feature gives you total control over your {t} exposure at any moment.",
        "Fairplay operates under international elite licenses, ensuring a safe and regulated environment for {t} in 2026.",
        "You can form 'Elite Syndicates' for {t} and earn additional volume-based commissions from your invited circle.",
        "During major IPL and World Cup cycles, {t} turnover qualifies for double loyalty points and bonus drops.",
        "Activity logs for {t} can be downloaded in secure CSV or JSON formats for professional auditing and tax planning.",
        "The 'Shadow-Bet' mode allows you to simulate complex {t} strategies using live data without risking capital.",
        "We pride ourselves on speed; 99% of {t} settlements are completed within seconds of the official result.",
        "Progression to Platinum for {t} is based on consistent monthly turnover and platform engagement metrics."
    ]
    
    # Select a unique question and answer based on index and post_idx
    # This ensures 30 * 30 * number of questions variety
    q_idx_in_stems = (post_idx + q_idx) % 30
    a_idx_in_stems = (post_idx * 2 + q_idx) % 30
    
    return {
        "q": q_stems[q_idx_in_stems].format(t=title),
        "a": a_stems[a_idx_in_stems].format(t=title)
    }

file_path = 'src/routes/posts.$slug.tsx'
with open(file_path, 'r') as f:
    content = f.read()

slugs = re.findall(r'"([^"]+)":\s*\[', content)
slugs = [s for s in slugs if len(s) > 10 and '-' in s]

for i, slug in enumerate(slugs):
    start_marker = f'"{slug}": ['
    start_index = content.find(start_marker)
    if start_index == -1: continue
    
    next_slug_index = -1
    for s in slugs:
        idx = content.find(f'"{s}": [', start_index + len(start_marker))
        if idx != -1:
            if next_slug_index == -1 or idx < next_slug_index:
                next_slug_index = idx
                break
    
    if next_slug_index == -1:
        block_content = content[start_index:]
    else:
        block_content = content[start_index:next_slug_index]

    title_match = re.search(r'"t":\s*"h1",\s*"c":\s*"([^"]+)"', block_content)
    title = title_match.group(1) if title_match else slug.replace('-', ' ').title()
    
    # Generate 4 unique FAQs for every post
    new_faqs = [get_unique_content(slug, title, j, i) for j in range(4)]
    
    new_faq_items_str = json.dumps(new_faqs, indent=12).replace('\n', '\n            ')
    new_faq_block = '{\n            "t": "faq",\n            "items": ' + new_faq_items_str + '\n        }'
    
    faq_regex = re.compile(r'\{\s*"t":\s*"faq",\s*"items":\s*\[.*?\]\s*\}', re.DOTALL)
    new_block_content = faq_regex.sub(new_faq_block, block_content)
    content = content.replace(block_content, new_block_content)

with open(file_path, 'w') as f:
    f.write(content)

print(f"Successfully injected truly unique and varied FAQs into {len(slugs)} posts.")
