import json

def main():
    file_path = 'src/routes/posts.$slug.tsx'
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Extract all slugs from the current POSTS_DATA in the file
    import re
    # Find the POSTS_DATA block
    start_idx = content.find("const POSTS_DATA")
    end_idx = content.find("export const Route")
    data_block = content[start_idx:end_idx]
    
    slugs = re.findall(r'"([^"]+)": \[', data_block)
    
    # Generate a comprehensive date map
    from datetime import datetime, timedelta
    start_date = datetime(2025, 12, 1)
    
    new_date_map = "  const dateMap: Record<string, string> = {\n"
    for i, slug in enumerate(slugs):
        current_date = start_date + timedelta(days=i)
        date_str = current_date.strftime("%b %d, %Y")
        new_date_map += f'    "{slug}": "{date_str}",\n'
    new_date_map += "  };"
    
    # Replace the old dateMap in the file
    map_start = content.find("const dateMap: Record<string, string> = {")
    map_end = content.find("};", map_start) + 2
    
    if map_start != -1 and map_end != -1:
        new_content = content[:map_start] + new_date_map + content[map_end:]
        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f"Updated dateMap with {len(slugs)} entries.")
    else:
        print("Could not find dateMap to replace.")

if __name__ == "__main__":
    main()
