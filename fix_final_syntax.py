import re

file_path = 'src/routes/posts.$slug.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# Fix common malformed closing sequences
# Sequence found in verify: } \n ] } ] \n };
# This is likely for the last post.
# Correct last post ending: ] } ] \n };

# 1. Clean up ALL intermediate post closings
# They currently might look like: ] } ] } ] ,
# They should be: ] } ] ,
content = re.sub(r'\]\s*\}\s*\]\s*\}\s*\]\s*,', '] } ],', content)

# 2. Clean up the FINAL post closing
# It might look like: ] } ] } ] ;
# It should be: ] } ] \n };
content = re.sub(r'\]\s*\}\s*\]\s*\}\s*\]\s*;', '] } ]\n};', content)

# 3. Specifically fix the "fairplay-live-casino-features-and-services" end
# Looking at the view output:
# 13640:             ] } ]
# 13641: };
# This actually looks okay if POSTS_DATA ends there.
# But wait, POSTS_DATA starts at line 6: const POSTS_DATA: Record<string, any[]> = {
# So it needs a closing } before the ;.

if "fairplay-live-casino-features-and-services" in content:
    # Ensure POSTS_DATA is closed
    content = re.sub(r'"fairplay-live-casino-features-and-services":\s*\[(.*?)\]\s*\]\s*;', 
                     r'"fairplay-live-casino-features-and-services": [\1] \n};', 
                     content, flags=re.DOTALL)

with open(file_path, 'w') as f:
    f.write(content)

print("Final syntax cleanup complete.")
