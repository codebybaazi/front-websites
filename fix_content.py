import json
import re

def rephrase_title(title):
    return title.replace("Reddy Anna", "Fairplay").strip()

def generate_dynamic_content(slug, title):
    title = rephrase_title(title)
    
    content = [
        {"t": "h1", "c": title},
        {"t": "p", "c": f"Experience the next level of elite sports betting with Fairplay. This comprehensive guide covers everything you need to know about {title} to maximize your winning potential in 2026."},
        {"t": "h2", "c": f"Understanding {title} on Fairplay"},
        {"t": "p", "c": f"Fairplay provides a secure and transparent environment for all your betting needs. When exploring {title}, our platform offers specialized insights and real-time data to help you make informed decisions. Whether you are a seasoned pro or just starting, our interface is optimized for your success."},
        {"t": "h2", "c": "Key Strategies & Benefits"},
        {"t": "ul", "items": [
            f"Dedicated Fairplay ID for personalized {title} tracking",
            "Real-time market analysis and competitive odds",
            "Instant deposit and 24/7 withdrawal support via WhatsApp",
            "Exclusive loyalty rewards for consistent players"
        ]},
        {"t": "h2", "c": "How to Get Started"},
        {"t": "p", "c": f"To begin your journey with {title}, simply contact our official support team. We will guide you through the process of setting up your Fairplay ID, ensuring you have access to the best markets and features available in the industry."},
        {"t": "p", "c": "Don't wait for the action to pass you by. Join the Fairplay elite today and start winning with confidence."}
    ]
    return content

def main():
    try:
        with open('all_posts_data.json', 'r') as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error loading file: {e}")
        return

    updated_data = {}
    for slug, items in data.items():
        # Extract title from the first element if possible
        title = ""
        if items and len(items) > 0:
            if 'c' in items[0]:
                title = items[0]['c']
            elif 'items' in items[0]:
                title = items[0]['items'][0] # Fallback
        
        if not title:
            title = slug.replace('-', ' ').title()
            
        updated_data[slug] = generate_dynamic_content(slug, title)
        print(f"Fixed content for: {slug}")

    with open('fixed_posts_data.json', 'w') as f:
        json.dump(updated_data, f, indent=2)

if __name__ == "__main__":
    main()
