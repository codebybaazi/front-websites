import json

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
        lines = f.readlines()
    
    # POSTS_DATA starts at line 6 (index 5)
    # Based on the view, export const Route starts around line 1509
    # Let's find the exact line for export const Route
    route_line_idx = -1
    for i, line in enumerate(lines):
        if "export const Route = createFileRoute" in line:
            route_line_idx = i
            break
            
    if route_line_idx != -1:
        # We replace from line 6 to just before route_line_idx
        # But we need to find where POSTS_DATA ends before Route
        data_end_idx = -1
        for i in range(route_line_idx - 1, 5, -1):
            if "};" in lines[i]:
                data_end_idx = i
                break
        
        if data_end_idx != -1:
            new_lines = lines[:6] + [posts_data_str + "\n\n"] + lines[data_end_idx + 1:]
            with open(file_path, 'w') as f:
                f.writelines(new_lines)
            print(f"Successfully updated src/routes/posts.$slug.tsx. Replaced lines 7 to {data_end_idx + 1}")
        else:
             print("Could not find end of POSTS_DATA")
    else:
        print("Could not find Route definition")

if __name__ == "__main__":
    main()
