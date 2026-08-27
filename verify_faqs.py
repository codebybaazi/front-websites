import re

file_path = 'src/routes/posts.$slug.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# Look for FAQ items
faq_items = re.findall(r'"q":\s*"([^"]+)"', content)

# Check uniqueness of first 10 questions
print(f"Total questions found: {len(faq_items)}")
print("First 15 questions:")
for i, q in enumerate(faq_items[:15]):
    print(f"{i+1}: {q}")

# Check if there are duplicates in the first 50 questions
seen = set()
duplicates = []
for q in faq_items[:150]:
    if q in seen:
        duplicates.append(q)
    seen.add(q)

print(f"Duplicates in first 150 questions: {len(duplicates)}")
if duplicates:
    for d in duplicates[:5]:
        print(f"Duplicate found: {d}")
