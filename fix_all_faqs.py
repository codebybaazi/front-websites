import json
import re

def get_unique_faqs(slug, title):
    # Ensure title is not just "Items"
    if title == "Items":
        title = slug.replace('-', ' ').title()
    
    # 5 base patterns, but we will inject variety within them
    variation = len(slug) % 5
    
    if variation == 0:
        return [
            {"q": f"How do I unlock professional tools for {title}?", "a": f"To access elite-level analytics for {title}, ensure your Fairplay ID is verified. Premium members get instant access to 2026 data models and real-time strategic insights for this category."},
            {"q": f"Is {title} optimized for high-frequency trading?", "a": f"Yes, our backend for {title} uses low-latency protocols, allowing elite bettors to execute strategies with sub-millisecond precision on the Fairplay platform."},
            {"q": f"What are the loyalty benefits for {title} enthusiasts?", "a": f"Fairplay offers tiered rewards specifically for {title}. Elite members can earn up to 5% cashback on weekly turnover and unlock exclusive VIP event tickets."}
        ]
    elif variation == 1:
        return [
            {"q": f"Can I access {title} from the mobile app?", "a": f"The Fairplay mobile experience for {title} is unmatched, featuring native push alerts for market shifts and a streamlined interface for elite one-touch betting."},
            {"q": f"What is the security rating for {title} operations?", "a": f"Every action related to {title} is protected by RSA 4096-bit encryption. We prioritize your privacy and capital security above all else on our elite platform."},
            {"q": f"How does Fairplay verify {title} results?", "a": f"We use decentralized audit trails for all {title} outcomes, ensuring that every win is verified by independent nodes for absolute transparency and trust."}
        ]
    elif variation == 2:
        return [
            {"q": f"What are the deposit limits for {title}?", "a": f"Elite Fairplay users enjoy uncapped deposit potential for {title}, with instant settlement via UPI, IMPS, and premium crypto gateways for the 2026 season."},
            {"q": f"Does {title} include advanced charting?", "a": f"Yes, our professional suite includes real-time momentum indicators and historical trend analysis for {title}, giving you the data you need to win like a pro."},
            {"q": f"Are there private {title} betting pools?", "a": f"Fairplay offers 'Invite-Only' syndicates for {title} where high-net-worth individuals can collaborate and leverage collective market intelligence."}
        ]
    elif variation == 3:
        return [
            {"q": f"How do I manage my {title} portfolio?", "a": f"The Fairplay elite dashboard provides a comprehensive overview of your {title} performance, with detailed ROI tracking and risk management tools built-in."},
            {"q": f"Is crypto the best way to fund {title}?", "a": f"While we support all major methods, crypto offers the fastest settlement for {title} winnings. We recommend USDT for its stability and elite-level privacy."},
            {"q": f"What is the customer support for {title}?", "a": f"Elite members get a dedicated 24/7 account manager for all {title} queries, ensuring priority resolution and personalized strategy sessions."}
        ]
    else:
        return [
            {"q": f"When is the best time to bet on {title}?", "a": f"Our algorithms show that liquidity for {title} peaks 30 minutes before major events. Elite members receive alerts when market depth is at its most profitable."},
            {"q": f"Does Fairplay offer cash-out for {title}?", "a": f"Yes, our elite cash-out feature allows you to secure profits on {title} at any time. You can even set automatic triggers to lock in gains based on your specific strategy."},
            {"q": f"How do I upgrade my status for {title}?", "a": f"Status upgrades for {title} are based on consistent activity and volume. High-performers are fast-tracked to the 'Elite Platinum' tier for maximum platform perks."}
        ]

file_path = 'src/routes/posts.$slug.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# We need a robust way to replace the FAQ blocks without breaking the structure
# Let's split by post slug and reconstruct

# Find all slugs
slugs = re.findall(r'"([^"]+)":\s*\[', content)
# Filter out non-slugs that might match
slugs = [s for s in slugs if len(s) > 10 and '-' in s]

for slug in slugs:
    # Find the block for this slug
    # We look for the start "slug": [ and then the end of that array
    start_marker = f'"{slug}": ['
    start_index = content.find(start_marker)
    if start_index == -1: continue
    
    # Find the end of this post's array
    # Since they are consistent, we look for the closing ], followed by next slug or end of object
    # But a simpler way is to find the FAQ section within this block
    
    # Extract the block content (up to next slug or end)
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

    # Find the title in this block
    title_match = re.search(r'"t":\s*"h1",\s*"c":\s*"([^"]+)"', block_content)
    title = title_match.group(1) if title_match else slug.replace('-', ' ').title()
    if title.endswith(" – Elite Fairplay Guide"):
        title = title.replace(" – Elite Fairplay Guide", "")
    
    # Generate new unique FAQs
    new_faqs = get_unique_faqs(slug, title)
    
    # Construct the new FAQ block string
    new_faq_items_str = json.dumps(new_faqs, indent=12).replace('\n', '\n            ')
    new_faq_block = '{\n            "t": "faq",\n            "items": ' + new_faq_items_str + '\n        }'
    
    # Replace ALL faq blocks in this post's content
    # Some posts might have multiple due to failed previous attempts
    faq_regex = re.compile(r'\{\s*"t":\s*"faq",\s*"items":\s*\[.*?\]\s*\}', re.DOTALL)
    
    # Find where the faq block starts in the original content relative to this slug
    new_block_content = faq_regex.sub(new_faq_block, block_content)
    
    # Update content
    content = content.replace(block_content, new_block_content)

with open(file_path, 'w') as f:
    f.write(content)

print(f"Successfully processed {len(slugs)} posts and injected unique FAQs.")
