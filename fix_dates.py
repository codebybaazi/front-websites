import os
import re

def fix_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Standardise date rendering to avoid hydration mismatches
    # Instead of raw toLocaleDateString, we'll use a fixed format for server/client consistency if possible
    # or wrap in a generic component that handles hydration safely.
    # However, for this project, standardising the locale to 'en-IN' and passing a fixed timeZone if needed works best.
    
    new_content = re.sub(
        r'new Date\(([^)]+)\)\.toLocaleDateString\("en-IN",\s*\{([^}]+)\}\)',
        r'new Date(\1).toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata", \2 })',
        content
    )
    
    # Also fix simple usage
    new_content = re.sub(
        r'new Date\(([^)]+)\)\.toLocaleDateString\("en-IN"\)',
        r'new Date(\1).toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })',
        new_content
    )
    
    if content != new_content:
        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f"Fixed: {file_path}")

targets = [
    "src/routes/index.tsx",
    "src/routes/blog.$slug.tsx",
    "src/components/live-dashboard.tsx",
    "src/routes/schedule.tsx"
]

for t in targets:
    if os.path.exists(t):
        fix_file(t)

