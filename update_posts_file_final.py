import json
import re

def main():
    try:
        with open('fixed_posts_data.json', 'r') as f:
            fixed_data = json.load(f)
    except Exception as e:
        print(f"Error loading fixed data: {e}")
        return

    posts_data_str = "const POSTS_DATA: Record<string, any[]> = " + json.dumps(fixed_data, indent=2) + ";"
    
    file_path = 'src/routes/posts.$slug.tsx'
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Use a more robust regex to find POSTS_DATA
    # Match from "const POSTS_DATA" until it hits the next component definition or significant block
    start_pattern = r'const POSTS_DATA: Record<string, any\[\]> = \{'
    # The view showed POSTS_DATA starts at line 6.
    # Let's find where the HeroBanner component starts.
    end_marker = "function HeroBanner"
    
    match_start = re.search(start_pattern, content)
    match_end = content.find(end_marker)
    
    if match_start and match_end != -1:
        # We want to replace everything from match_start to just before match_end
        # But we need to keep any space or comments between the end of POSTS_DATA and HeroBanner.
        # Actually, let's just find the last "};" before "function HeroBanner"
        data_block_end = content.rfind("};", match_start.start(), match_end)
        if data_block_end != -1:
            new_content = content[:match_start.start()] + posts_data_str + "\n\n" + content[data_block_end+2:]
            with open(file_path, 'w') as f:
                f.write(new_content)
            print("Successfully updated src/routes/posts.$slug.tsx")
        else:
            print("Could not find ending of POSTS_DATA object.")
    else:
        print(f"Markers not found. match_start: {bool(match_start)}, match_end: {match_end != -1}")

if __name__ == "__main__":
    main()
