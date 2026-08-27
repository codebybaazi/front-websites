import re
file_path = 'src/routes/posts.$slug.tsx'
with open(file_path, 'r') as f:
    content = f.read()

slugs = re.findall(r'"([^"]+)":\s*\[', content)
slugs = [s for s in slugs if len(s) > 10 and '-' in s]

# Check first 3 posts
for s in slugs[:3]:
    print(f"\nSLUG: {s}")
    q = re.findall(rf'"{s}":.*?("q":\s*"[^"]+")', content, re.DOTALL)
    for i, question in enumerate(q[:4]):
        print(f"Q{i}: {question}")

# Check 2 middle posts
mid = len(slugs) // 2
for s in slugs[mid:mid+2]:
    print(f"\nSLUG: {s}")
    q = re.findall(rf'"{s}":.*?("q":\s*"[^"]+")', content, re.DOTALL)
    for i, question in enumerate(q[:4]):
        print(f"Q{i}: {question}")
