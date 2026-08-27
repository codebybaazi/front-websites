import xml.etree.ElementTree as ET
import json
import requests
import re
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
        
        # Rephrase slug to fairplay if needed (though existing slugs already have it)
        slug = slug.replace('reddy-anna-book', 'fairplay').replace('reddy-anna', 'fairplay')
        
        # Format date: 2025-12-30T06:27:20+00:00 -> Dec 2025
        dt = datetime.fromisoformat(lastmod.replace('Z', '+00:00'))
        date_str = dt.strftime("%b %Y")
        
        data[slug] = date_str
    
    return data

def update_blog_file(dates_map):
    with open('src/routes/blog.tsx', 'r') as f:
        content = f.read()
    
    # We need to find the articles array and update the dates
    # The articles array is a large array of objects
    
    def replace_date(match):
        obj_str = match.group(0)
        slug_match = re.search(r'"slug":\s*"([^"]+)"', obj_str)
        if slug_match:
            slug = slug_match.group(1)
            if slug in dates_map:
                new_date = dates_map[slug]
                # Replace the date field
                return re.sub(r'"date":\s*"[^"]+"', f'"date": "{new_date}"', obj_str)
        return obj_str

    # Match individual objects in the array
    pattern = re.compile(r'\{\s*"slug":\s*"[^"]+".*?"date":\s*"[^"]+".*?\}', re.DOTALL)
    new_content = pattern.sub(replace_date, content)
    
    with open('src/routes/blog.tsx', 'w') as f:
        f.write(new_content)

def update_post_slug_file(dates_map):
    # Check if posts.$slug.tsx exists
    import os
    file_path = 'src/routes/posts.$slug.tsx'
    if not os.path.exists(file_path):
        print(f"{file_path} not found")
        return

    with open(file_path, 'r') as f:
        content = f.read()

    # Same logic for POSTS_DATA or whatever it uses
    def replace_date(match):
        obj_str = match.group(0)
        # Find key (slug)
        key_match = re.search(r'["\']?([^"\']+)["\']?:\s*\{', obj_str)
        if key_match:
            slug = key_match.group(1)
            if slug in dates_map:
                new_date = dates_map[slug]
                return re.sub(r'date:\s*["\'][^"\']+["\']', f'date: "{new_date}"', obj_str)
        return obj_str

    # Pattern for POSTS_DATA entries: "slug": { ... date: "..." }
    pattern = re.compile(r'["\']?[^"\']+["\']?:\s*\{[^{}]*date:\s*["\'][^"\']+["\'][^{}]*\}', re.DOTALL)
    new_content = pattern.sub(replace_date, content)

    with open(file_path, 'w') as f:
        f.write(new_content)

if __name__ == "__main__":
    dates = get_sitemap_data()
    update_blog_file(dates)
    update_post_slug_file(dates)
    print("Updated dates for all articles.")
