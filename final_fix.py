import re

file_path = 'src/routes/posts.$slug.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# The view showed 5018:     \},
# This is a literal backslash.
content = content.replace('\\}', '}')

# Also ensure no "}]" exists inside the array before the FAQ
content = re.sub(r'\}\]\s+,\s+\{', '},\n    {', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed backslashes and fixed commas")
