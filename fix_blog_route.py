import json
import os

def fix_blog_route():
    file_path = 'src/routes/blog.tsx'
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Fix the Link component paths
    content = content.replace('to="/posts/\\$slug"', 'to="/posts/$slug"')
    
    with open(file_path, 'w') as f:
        f.write(content)
    print("Fixed Link paths in blog.tsx")

if __name__ == "__main__":
    fix_blog_route()
