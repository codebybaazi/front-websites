import json

with open('all_posts_data.json', 'r') as f:
    all_data = json.load(f)

# Convert all_data to a string for insertion
posts_data_str = "const POSTS_DATA: Record<string, any[]> = " + json.dumps(all_data, indent=2) + ";"

with open('posts_data_constant.txt', 'w') as f:
    f.write(posts_data_str)
