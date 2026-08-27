import re
import os

file_path = 'src/routes/posts.$slug.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Identify all slugs by looking for the keys in the Record
slugs = re.findall(r'"([^"]+)":\s*\[\{', content)

def generate_unique_faq(slug):
    title = slug.replace('-', ' ').title()
    return f"""{{
        "t": "h2",
        "c": "Frequently Asked Questions about {title}"
    }},
    {{
        "t": "faq",
        "items": [
            {{
                "q": "What makes {title} an essential topic for Fairplay users in 2026?",
                "a": "Understanding {title} is crucial because it provides the elite edge needed to navigate the Fairplay ecosystem efficiently, ensuring you maximize your winning potential with our verified insights."
            }},
            {{
                "q": "Are the details provided in this guide for {title} verified by Fairplay?",
                "a": "Yes, every piece of information regarding {title} is meticulously vetted by our elite team to ensure accuracy, security, and the highest standards of betting intelligence for our premium users."
            }},
            {{
                "q": "How often is the content for {title} updated?",
                "a": "We update the {title} guide in real-time to reflect the latest market trends, security protocols, and platform enhancements of 2026, keeping you ahead of the competition."
            }}
        ]
    }}"""

# Split the content to preserve everything before and after POSTS_DATA
header_part = content.split('const POSTS_DATA: Record<string, any[]> = {')[0]
footer_part = content.split('const dateMap: Record<string, string> = {')[1]

new_posts_data = "const POSTS_DATA: Record<string, any[]> = {\n"

for slug in slugs:
    # Use a more flexible search for the core body
    # We want the content between "slug": [ and the first mess
    pattern = re.escape(f'"{slug}":') + r'\s*\[(.*?)(?:(?:\s+,\s+)|(?:\s+\{\s+"t": "h2",\s+"c": "Frequently Asked Questions))'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        core_body = match.group(1).strip()
        if core_body.endswith(','):
            core_body = core_body[:-1].strip()
            
        new_posts_data += f'  "{slug}": [\n    {core_body},\n    {generate_unique_faq(slug)}\n  ],\n'
    else:
        print(f"Warning: Could not extract core body for {slug}")

new_posts_data = new_posts_data.strip().rstrip(',') + "\n};\n\nconst dateMap: Record<string, string> = {"

# Combine parts
final_content = header_part + new_posts_data + footer_part

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Successfully reconstructed {len(slugs)} posts with unique FAQs.")
