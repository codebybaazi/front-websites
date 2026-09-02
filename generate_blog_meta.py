import json
import os

# Load all scraped posts
with open('all_posts_data.json', 'r') as f:
    all_data = json.load(f)

# Define icons mapping for categorization
icon_map = {
    "login": "ShieldCheck",
    "withdraw": "Zap",
    "deposit": "Zap",
    "money": "Zap",
    "wallet": "Zap",
    "bet": "Star",
    "prediction": "Trophy",
    "match": "Trophy",
    "strategy": "Zap",
    "guide": "Info",
    "verify": "ShieldCheck",
    "security": "ShieldCheck",
    "ipl": "Star",
    "wpl": "Star",
    "t20": "Star",
    "world-cup": "Star",
    "agent": "User",
    "id": "User"
}

def get_icon(slug):
    for key, val in icon_map.items():
        if key in slug.lower():
            return val
    return "Star"

# Generate articles array for blog.tsx
articles = []
for slug, content in all_data.items():
    title = slug.replace('-', ' ').title()
    # Try to find first paragraph for description
    description = ""
    for item in content:
        if item['t'] == 'p':
            description = item['c'][:150] + "..."
            break
    
    articles.append({
        "title": title,
        "slug": slug,
        "description": description,
        "icon": get_icon(slug),
        "date": "JAN 2026",
        "category": "Elite Tips"
    })

# Write to a file that we can easily copy into blog.tsx
with open('blog_articles.json', 'w') as f:
    json.dump(articles, f, indent=2)

print(f"Generated {len(articles)} article definitions.")
