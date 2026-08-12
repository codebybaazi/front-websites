import os
import re

def fix_file(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r') as f:
        content = f.read()
    
    # 1. Add break-words to handle long titles/text on mobile
    new_content = content
    # Target large headings that might overflow
    new_content = re.sub(r'(text-[3-6]xl|text-[4-9]xl font-black)', r'\1 break-words', new_content)
    
    # 2. Ensure containers have horizontal padding on mobile
    # Search for container-like classes and ensure px-4/px-6
    new_content = re.sub(r'(max-w-[a-z0-9-]+ px-[1-3])', r'\1 sm:px-6', new_content)

    if content != new_content:
        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f"Fixed responsiveness in: {file_path}")

targets = [
    "src/routes/index.tsx",
    "src/routes/schedule.tsx",
    "src/routes/matches/index.tsx",
    "src/routes/blog.$slug.tsx",
    "src/routes/matches/$slug.tsx",
    "src/components/long-form-page.tsx"
]

for t in targets:
    fix_file(t)
