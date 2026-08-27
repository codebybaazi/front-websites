import json
import re
from datetime import datetime, timedelta

def main():
    file_path = 'src/routes/posts.$slug.tsx'
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Extract slugs correctly by finding keys at the start of lines in POSTS_DATA
    # Pattern: "slug": [
    slugs = re.findall(r'^  "([^"]+)": \[', content, re.MULTILINE)
    
    start_date = datetime(2025, 12, 1)
    new_date_map = "  const dateMap: Record<string, string> = {\n"
    for i, slug in enumerate(slugs):
        current_date = start_date + timedelta(days=i)
        date_str = current_date.strftime("%b %d, %Y")
        new_date_map += f'    "{slug}": "{date_str}",\n'
    new_date_map += "  };"
    
    map_start = content.find("const dateMap: Record<string, string> = {")
    map_end = content.find("};", map_start) + 2
    
    if map_start != -1 and map_end != -1:
        new_content = content[:map_start] + new_date_map + content[map_end:]
        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f"Updated dateMap with {len(slugs)} valid slugs.")
    else:
        print("Could not find dateMap.")

if __name__ == "__main__":
    main()
