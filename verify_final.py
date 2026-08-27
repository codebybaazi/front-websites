import re

file_path = 'src/routes/posts.$slug.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# Look for FAQ items
faq_items = re.findall(r'"q":\s*"([^"]+)"', content)

print(f"Total questions found: {len(faq_items)}")
print("Sample questions to verify variety:")
# Pick questions from start, middle, and end
samples = [0, 1, 2, 300, 301, 302, 600, 601, 602, 900, 901, 902]
for i in samples:
    if i < len(faq_items):
        print(f"{i}: {faq_items[i]}")

# Check for "Items" keyword leaks
items_count = len(re.findall(r'related to Items', content))
print(f"Occurrences of 'related to Items': {items_count}")

# Check uniqueness across a larger sample
sample_size = min(len(faq_items), 500)
seen = set()
duplicates = 0
for q in faq_items[:sample_size]:
    if q in seen:
        duplicates += 1
    seen.add(q)

print(f"Duplicates in first {sample_size} questions: {duplicates}")
