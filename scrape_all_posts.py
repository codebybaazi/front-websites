import requests
from bs4 import BeautifulSoup
import json
import re
import os
import time

def rephrase(text):
    if not text: return ""
    text = text.replace("Reddy Anna Book", "Fairplay")
    text = text.replace("Reddy Anna", "Fairplay")
    text = text.replace("reddy anna", "fairplay")
    text = text.replace("Reddy anna", "Fairplay")
    return text

def scrape_post(url):
    try:
        response = requests.get(url, timeout=5)
        soup = BeautifulSoup(response.content, 'html.parser')
        content_div = soup.find('div', class_='entry-content') or soup.find('article')
        if not content_div: return None
        content = []
        for tag in content_div.find_all(['h2', 'h3', 'p']):
            text = tag.get_text().strip()
            if len(text) < 5: continue
            content.append({'t': tag.name, 'c': rephrase(text)})
        return content
    except: return None

def main():
    if not os.path.exists('post_urls.txt'): return
    with open('post_urls.txt', 'r') as f:
        urls = [line.strip() for line in f.readlines()]
    
    start_index = 0
    scraped_data = {}
    if os.path.exists('all_posts_data.json'):
        try:
            with open('all_posts_data.json', 'r') as f:
                scraped_data = json.load(f)
                start_index = len(scraped_data)
        except: pass

    # Skip already processed based on count to keep it simple
    urls_to_process = urls[start_index:]
    print(f"Resuming from index {start_index}. Total to process: {len(urls_to_process)}")

    for i, url in enumerate(urls_to_process):
        slug = url.split('/')[-2].replace('reddy-anna-book', 'fairplay').replace('reddy-anna', 'fairplay')
        data = scrape_post(url)
        if data:
            scraped_data[slug] = data
        
        # Periodic save
        if (i + 1) % 20 == 0:
            with open('all_posts_data.json', 'w') as f:
                json.dump(scraped_data, f, indent=2)
            print(f"Processed {start_index + i + 1} posts...")

    with open('all_posts_data.json', 'w') as f:
        json.dump(scraped_data, f, indent=2)
    print("Scraping complete.")

if __name__ == "__main__":
    main()
