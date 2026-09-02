import re

file_path = 'src/routes/posts.$slug.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the sequence "}] }, {" -> "},"
# The Python script generated extra closing brackets and braces.
# We want: ... } ] }, "next-slug": [ ...
# Actually the structure in view showed:
# 5004:     }]
# 5005:     },
# 5006: 
# 5007:     {
# 5008:         "t": "h2",

# This is wrong because it closes the outer array item.
# It should be:
# { "t": "p", "c": "..." },
# { "t": "h2", "c": "FAQ..." },
# { "t": "faq", "items": [...] }

# The script seems to have done:
# [ ... { "t": "p", "c": "..." }] }, { "t": "h2", ... } ...

# Let's just fix the specific pattern of misplaced brackets.
fixed = content.replace('}] },', '},')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(fixed)

print("Cleaned up structural errors")
