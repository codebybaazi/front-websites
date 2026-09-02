import json

def main():
    try:
        with open('fixed_posts_data.json', 'r') as f:
            fixed_data = json.load(f)
    except Exception as e:
        print(f"Error loading fixed data: {e}")
        return

    # Prepare the string for replacement
    posts_data_str = "const POSTS_DATA: Record<string, any[]> = " + json.dumps(fixed_data, indent=2) + ";"
    
    file_path = 'src/routes/posts.$slug.tsx'
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    # We need to find the start and end of POSTS_DATA
    import re
    # Match from "const POSTS_DATA" to the first ";" after the object closes.
    # This is a bit tricky with nested braces, but since we know it's a Record<string, any[]>,
    # we can try to match until the final closing brace before the next major section (likely the component).
    
    # Let's use a simpler approach: replace the whole POSTS_DATA section.
    start_pattern = r'const POSTS_DATA: Record<string, any\[\]> = \{'
    # Find the end of the object. Since it's the only large object at the top, 
    # we can find the end by looking for "};" followed by "const PostUnderReview" or similar.
    end_pattern = r'\n\s*const PostUnderReviewContent'
    
    match_start = re.search(start_pattern, content)
    match_end = re.search(end_pattern, content)
    
    if match_start and match_end:
        new_content = content[:match_start.start()] + posts_data_str + content[match_end.start():]
        with open(file_path, 'w') as f:
            f.write(new_content)
        print("Successfully updated src/routes/posts.$slug.tsx")
    else:
        print(f"Could not find start/end markers. Start: {bool(match_start)}, End: {bool(match_end)}")
        # Fallback: just try to find the last }; before the component
        # This is risky, let's try to be more specific.
        # Actually, looking at the previous view, it starts at line 6 and goes very far.
        pass

if __name__ == "__main__":
    main()
