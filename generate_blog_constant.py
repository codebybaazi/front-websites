import json
import os

# Load all scraped posts
with open('all_posts_data.json', 'r') as f:
    all_data = json.load(f)

# Define icons mapping for categorization
icon_map = {
    "login": "Shield",
    "withdraw": "Zap",
    "deposit": "Zap",
    "money": "Zap",
    "wallet": "Zap",
    "bet": "Star",
    "prediction": "Trophy",
    "match": "Trophy",
    "strategy": "Zap",
    "guide": "BookOpen",
    "verify": "Shield",
    "security": "Shield",
    "ipl": "Star",
    "wpl": "Star",
    "t20": "Star",
    "world-cup": "Star",
    "agent": "Smartphone",
    "id": "Smartphone"
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
    description = ""
    for item in content:
        if item['t'] == 'p':
            description = item['c'][:150] + "..."
            break
    
    category = "Guide"
    if any(k in slug.lower() for k in ["prediction", "match", "strategy", "vs"]):
        category = "Events"
    elif any(k in slug.lower() for k in ["login", "withdraw", "deposit", "verify", "agent"]):
        category = "Support"
    elif any(k in slug.lower() for k in ["brand", "why", "trusted"]):
        category = "Brand"
    
    articles.append({
        "slug": slug,
        "title": title,
        "category": category,
        "desc": description,
        "date": "Jan 2026",
        "icon": get_icon(slug)
    })

# Write the constant to a file
with open('blog_constant.txt', 'w') as f:
    f.write("const articles = ")
    json.dump(articles, f, indent=2)
    f.write(";\n")

# Process the icons mapping
# We need to map the string icon names to the actual Lucide components in blog.tsx
# The template will use something like: const IconComponent = { Shield, Zap, Star, Trophy, BookOpen, Smartphone }[post.icon]
