import os
import re

def fix_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # 1. Standardise Date rendering (TanStack Start/React 19 SSR compatibility)
    # The hydration error: + 25 Jul 2026, - 24 Jul 2026
    # Suggests timezone mismatch between Server (UTC) and Client (Local).
    # We will wrap dynamic date formatting in a way that respects a fixed timezone or avoids direct rendering of "today".
    
    # Target new Date().toLocaleDateString("en-IN")
    new_content = re.sub(
        r'new Date\(([^)]+)\)\.toLocaleDateString\("en-IN",\s*\{([^}]+)\}\)',
        r'new Date(\1).toLocaleDateString("en-GB", { timeZone: "Asia/Kolkata", \2 })',
        content
    )
    
    new_content = re.sub(
        r'new Date\(([^)]+)\)\.toLocaleDateString\("en-IN"\)',
        r'new Date(\1).toLocaleDateString("en-GB", { timeZone: "Asia/Kolkata" })',
        new_content
    )

    # 2. Date-fns format hydration issues (if any)
    # format(new Date(match.startDate), 'eee, dd MMM yyyy · HH:mm')
    # If the server and client calculate different local times, this fails.
    # We should ensure 'Asia/Kolkata' is used if the app targets India.
    
    if content != new_content:
        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f"Fixed: {file_path}")

targets = [
    "src/routes/index.tsx",
    "src/routes/blog.$slug.tsx",
    "src/components/live-dashboard.tsx",
    "src/routes/schedule.tsx",
    "src/routes/matches/$slug.tsx"
]

for t in targets:
    if os.path.exists(t):
        fix_file(t)

