import re

file_path = 'src/routes/posts.$slug.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# The previous repair failed to catch all variations. 
# Let's perform a more systematic reconstruction of each post's closing brackets.

# Each post should end with:
#             ]
#         }
#     ],

# The problematic parts currently look like:
#             ]
#         }
#             ]
# }
#   ],

# Let's match the block "t": "faq" until the end of the post array.
pattern = re.compile(r'\{\s*"t":\s*"faq",\s*"items":\s*\[.*?\]\s*\}\s*\]\s*\}\s*\]\s*,', re.DOTALL)
content = pattern.sub(lambda m: re.sub(r'\}\s*\]\s*\}\s*\]\s*,', '} ],', m.group(0)), content)

# And for the very last post before dateMap
pattern_last = re.compile(r'\{\s*"t":\s*"faq",\s*"items":\s*\[.*?\]\s*\}\s*\]\s*\}\s*\]\s*\}', re.DOTALL)
content = pattern_last.sub(lambda m: re.sub(r'\}\s*\]\s*\}\s*\]\s*\}', '} ] }', m.group(0)), content)

with open(file_path, 'w') as f:
    f.write(content)

print("Attempted secondary syntax repair.")
