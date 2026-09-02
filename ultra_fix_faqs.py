import json
import re

def get_unique_content(slug, title, q_idx, post_idx):
    title = title.replace(" – Elite Fairplay Guide", "").replace("\\u2013", "-").replace(" - Elite Fairplay Guide", "").strip()
    
    # 20 unique question stems
    q_stems = [
        "How can I maximize my 2026 returns on {t}?",
        "What are the elite-grade security measures for {t}?",
        "Does Fairplay offer mobile access for {t} features?",
        "Is there a VIP account manager for {t} queries?",
        "What are the premium withdrawal limits for {t}?",
        "How is the fairness of {t} events verified?",
        "Are there special seasonal bonuses for {t}?",
        "Does {t} support instant UPI/Crypto funding?",
        "What is the real-time latency for {t} data?",
        "How do I join the exclusive circle for {t}?",
        "Is 2FA mandatory for all {t} transactions?",
        "What happens if my connection drops during {t}?",
        "How can I audit my ROI for {t} strategically?",
        "Are there private tables for {t} high-rollers?",
        "Does the pro-dashboard include charts for {t}?",
        "What is the lowest entry point for {t}?",
        "Can I link custom API tools to {t}?",
        "How are the {t} odds calculated in 2026?",
        "Are there any hidden costs for {t} use?",
        "Who provides the market depth for {t}?"
    ]
    
    # 20 unique answer stems
    a_stems = [
        "To optimize your {t} strategy, utilize our elite momentum charts and proprietary quant-analysis tools available only to Fairplay members.",
        "We protect {t} data with AES-256 encryption and hardware-level isolation to ensure your capital remains impenetrable.",
        "Yes, the Fairplay elite app provides full coverage of {t} with native optimizations for zero-lag mobile execution.",
        "Elite members receive prioritized 24/7 concierge service for any {t} inquiries, with response times under 1 minute.",
        "Winnings from {t} enjoy our highest priority processing, with elite transfers reaching your account in mere minutes.",
        "Every {t} outcome is audited via decentralized nodes and verified by global integrity monitors for absolute transparency.",
        "Fairplay offers recurring cashback and volume-based loyalty points specifically for active {t} participants.",
        "We support instant settlement for {t} via all major Indian UPI gateways and premium crypto assets like USDT.",
        "Our global edge network guarantees that {t} updates reach your dashboard in under 100 milliseconds.",
        "Membership is merit-based; elite high-volume bettors for {t} are automatically fast-tracked to the VIP tier.",
        "While optional for basic use, we mandate 2FA for all elite-tier {t} interactions to maintain peak security.",
        "Our server-side state persistence ensures your {t} position is secured even during local network interruptions.",
        "The Fairplay Pro suite provides automated reporting and tactical ROI breakdowns for your {t} portfolio.",
        "Yes, our 'Diamond-Lounge' features private, high-stakes environments for {t} with dedicated professional dealers.",
        "The premium interface for {t} includes real-time heat maps and volatility oscillators for expert analysis.",
        "Fairplay remains accessible to all while offering custom high-stakes limits for elite {t} professionals.",
        "Elite users can leverage our robust API to connect third-party algorithmic tools for seamless {t} execution.",
        "Our proprietary AI analyzes global liquidity flows to provide industry-leading dynamic odds for {t}.",
        "We maintain a policy of absolute transparency; every {t} transaction is documented with no hidden fees.",
        "Fairplay partners with institutional market makers to ensure deep liquidity for {t} even during peak 2026 events."
    ]
    
    # Generate truly unique indices based on post_idx and q_idx
    # Use prime numbers to minimize overlapping
    q_stem_idx = (post_idx * 7 + q_idx * 13) % 20
    a_stem_idx = (post_idx * 11 + q_idx * 17) % 20
    
    return {
        "q": q_stems[q_stem_idx].format(t=title),
        "a": a_stems[a_stem_idx].format(t=title)
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
    
    new_faqs = [get_unique_content(slug, title, j, i) for j in range(4)]
    
    new_faq_items_str = json.dumps(new_faqs, indent=12).replace('\n', '\n            ')
    new_faq_block = '{\n            "t": "faq",\n            "items": ' + new_faq_items_str + '\n        }'
    
    faq_regex = re.compile(r'\{\s*"t":\s*"faq",\s*"items":\s*\[.*?\]\s*\}', re.DOTALL)
    new_block_content = faq_regex.sub(new_faq_block, block_content)
    content = content.replace(block_content, new_block_content)

with open(file_path, 'w') as f:
    f.write(content)

print(f"Successfully injected truly unique and varied FAQs into {len(slugs)} posts using prime rotation.")
