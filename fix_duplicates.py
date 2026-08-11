import re
import sys

content = open('src/data/blog-posts.ts').read()

# This is a very rough regex approach to handle the specific data structure
def fix_object(match):
    obj_content = match.group(0)
    # Check for multiple authors or tags
    authors = re.findall(r'"author":\s*"[^"]*"', obj_content)
    tags = re.findall(r'"tag":\s*"[^"]*"', obj_content)
    
    if len(authors) > 1:
        # Keep the first one found (which we just added)
        obj_content = re.sub(r'"author":\s*"[^"]*"', authors[0], obj_content, count=1)
        # Remove others
        obj_content = obj_content.replace(authors[1], "") # This is dangerous but we know the structure
        
    # Better approach: parse lines
    lines = obj_content.split('\n')
    seen_keys = set()
    new_lines = []
    for line in lines:
        match_key = re.search(r'"(author|tag)":', line)
        if match_key:
            key = match_key.group(1)
            if key in seen_keys:
                continue
            seen_keys.add(key)
        new_lines.append(line)
    return '\n'.join(new_lines)

# This is too complex for a quick fix. Let's use a simpler sed strategy.
