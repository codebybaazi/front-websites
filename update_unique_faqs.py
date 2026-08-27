import json
import re

file_path = 'src/routes/posts.$slug.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract POSTS_DATA content
match = re.search(r'const POSTS_DATA: Record<string, any\[\]> = (\{.*?\n\});\n\nconst dateMap', content, re.DOTALL)
if not match:
    print("Could not find POSTS_DATA")
    exit(1)

json_str = match.group(1)

entries = {}
current_pos = 0
while True:
    key_match = re.search(r'"([^"]+)": \[', json_str[current_pos:])
    if not key_match:
        break
    
    key = key_match.group(1)
    start_idx = current_pos + key_match.end() - 1
    
    bracket_count = 0
    end_idx = -1
    for i in range(start_idx, len(json_str)):
        if json_str[i] == '[':
            bracket_count += 1
        elif json_str[i] == ']':
            bracket_count -= 1
            if bracket_count == 0:
                end_idx = i + 1
                break
    
    if end_idx != -1:
        entries[key] = json_str[start_idx:end_idx]
        current_pos = start_idx + (end_idx - start_idx)
    else:
        break

print(f"Found {len(entries)} posts.")

def generate_unique_faq(slug):
    title = slug.replace('-', ' ').title()
    
    if 'login' in slug.lower():
        q1 = f"How can I troubleshoot {title} issues instantly?"
        a1 = f"To resolve {title} concerns on Fairplay, first ensure your credentials are correct and verify your network stability. Our elite support team is also available 24/7 to provide high-priority assistance for all premium login queries in 2026."
        q2 = f"Is {title} information secure on Fairplay?"
        a2 = f"Absolutely. Fairplay employs military-grade 256-bit encryption for all {title} related data. Your elite betting account remains isolated and safe from any unauthorized third-party access."
        q3 = f"Does Fairplay offer two-factor authentication for {title}?"
        a3 = f"Yes, for maximum protection, we strongly recommend enabling 2FA for all {title} related actions. This elite security layer ensures that only you can access your premium Fairplay profile."
    elif 'deposit' in slug.lower() or 'money' in slug.lower() or 'withdrawal' in slug.lower() or 'wallet' in slug.lower():
        q1 = f"What are the fastest methods for {title} in 2026?"
        a1 = f"For {title}, Fairplay supports instant UPI, major cryptocurrencies, and high-speed bank transfers. Elite members enjoy zero-latency processing, ensuring your funds are available for the next major match immediately."
        q2 = f"Are there any hidden fees for {title} on Fairplay?"
        a2 = f"Fairplay maintains a policy of total transparency. There are no hidden fees for {title}. Elite members receive 100% of their transaction value, backed by our commitment to being the most trusted platform in India."
        q3 = f"Can I track my {title} history in real-time?"
        a3 = f"Yes, the Fairplay premium dashboard provides a granular, real-time log of every {title} action. This allows elite bettors to manage their betting capital with professional-grade precision."
    elif 'cricket' in slug.lower() or 'ipl' in slug.lower() or 'betting' in slug.lower() or 'market' in slug.lower():
        q1 = f"How do I find the most profitable odds for {title}?"
        a1 = f"Fairplay provides industry-leading dynamic odds for {title}. Our elite quant-algorithms analyze global betting flows in real-time to offer you the highest possible returns during the 2026 cricket season."
        q2 = f"Is high-definition live streaming available for {title}?"
        a2 = f"Yes, premium Fairplay users can access lag-free, HD streams for most {title} events. This allows you to make informed live betting decisions based on the actual momentum of the game."
        q3 = f"What is the maximum limit for {title} stakes?"
        a3 = f"Fairplay is built for high-rollers. While we remain accessible, elite members can negotiate custom high-limit stakes for {title} through their dedicated account managers."
    elif 'bonus' in slug.lower() or 'promotion' in slug.lower() or 'offer' in slug.lower() or 'free' in slug.lower():
        q1 = f"How do I instantly activate the latest {title}?"
        a1 = f"To claim {title}, simply head to the 'Elite Rewards' tab in your Fairplay account. Once activated, the promotional credits are applied to your betting wallet with zero delay."
        q2 = f"What makes Fairplay {title} better than other platforms?"
        a2 = f"Fairplay's {title} features the most player-friendly wagering requirements in the industry. We focus on providing actual value rather than just numbers, helping our elite community win more."
        q3 = f"Can I use {title} for live casino games?"
        a3 = f"Specific terms apply to {title}, but most Fairplay bonuses are versatile. Elite members often receive specialized offers that can be used across sports markets and our premium live casino suites."
    else:
        q1 = f"What is the core advantage of using {title} for Fairplay members?"
        a1 = f"{title} provides professional-grade tools and strategic insights that are exclusive to the Fairplay ecosystem, giving our elite members a distinct edge in 2026."
        q2 = f"How does Fairplay verify the quality of its {title} services?"
        a2 = f"Every feature within {title} undergoes rigorous quality control by our team of elite analysts. We ensure that all platform components meet the highest standards of reliability and user satisfaction."
        q3 = f"Is there a dedicated VIP support line for {title} queries?"
        a3 = f"Yes, elite tier members have access to a specialized support channel for all {title} related questions, ensuring priority resolution and expert guidance at all times."

    return [
        {"q": q1, "a": a1},
        {"q": q2, "a": a2},
        {"q": q3, "a": a3}
    ]

new_json_parts = []
for slug, array_str in entries.items():
    unique_faq_items = generate_unique_faq(slug)
    
    # Using a more robust regex that handles spacing and variations
    faq_pattern = r'\{\s*"t":\s*"faq",\s*"items":\s*\[.*?\]\s*\}'
    new_faq_block = json.dumps({
        "t": "faq",
        "items": unique_faq_items
    }, indent=12)
    
    # Escape any backslashes in the generated JSON for the regex replace
    new_faq_block_escaped = new_faq_block.replace('\\', '\\\\')
    
    updated_array_str = re.sub(faq_pattern, new_faq_block_escaped, array_str, flags=re.DOTALL)
    
    if updated_array_str == array_str:
        insertion = ",\n    " + new_faq_block + "\n  ]"
        updated_array_str = array_str.rstrip()[:-1] + insertion
        
    new_json_parts.append(f'  "{slug}": {updated_array_str}')

new_posts_data = "{\n" + ",\n".join(new_json_parts) + "\n}"

new_content = content[:match.start(1)] + new_posts_data + content[match.end(1):]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated all posts with unique, content-rich FAQs.")
