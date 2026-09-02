import xml.etree.ElementTree as ET
import json
import requests
import re
import os
from datetime import datetime

def get_sitemap_data():
    url = "https://reddyaannabook.in/post-sitemap.xml"
    response = requests.get(url)
    root = ET.fromstring(response.content)
    
    # Namespaces
    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    
    data = {}
    for url_tag in root.findall('s:url', ns):
        loc = url_tag.find('s:loc', ns).text
        lastmod = url_tag.find('s:lastmod', ns).text
        
        # Extract slug from URL
        slug = loc.strip('/').split('/')[-1]
        
        # Rephrase slug to fairplay if needed
        slug = slug.replace('reddy-anna-book', 'fairplay').replace('reddy-anna', 'fairplay')
        
        # Format date: 2025-12-30T06:27:20+00:00 -> Dec 2025
        dt = datetime.fromisoformat(lastmod.replace('Z', '+00:00'))
        date_str = dt.strftime("%b %Y")
        
        data[slug] = date_str
    
    return data

def update_post_slug_file(dates_map):
    file_path = 'src/routes/posts.$slug.tsx'
    if not os.path.exists(file_path):
        return

    with open(file_path, 'r') as f:
        content = f.read()

    # Build the dateMap string
    map_lines = []
    for slug, date in dates_map.items():
        # Escape single quotes in slug just in case
        safe_slug = slug.replace("'", "\\'")
        map_lines.append(f'    "{safe_slug}": "{date}"')
    
    date_map_str = "const dateMap: Record<string, string> = {\n" + ",\n".join(map_lines) + "\n  };"

    # Replace the existing small dateMap
    new_content = re.sub(
        r'const dateMap: Record<string, string> = \{.*?\};',
        date_map_str,
        content,
        flags=re.DOTALL
    )

    with open(file_path, 'w') as f:
        f.write(new_content)

if __name__ == "__main__":
    dates = get_sitemap_data()
    update_post_slug_file(dates)
    print("Updated dateMap in posts.$slug.tsx")
