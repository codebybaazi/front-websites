import re

file_path = 'src/routes/posts.$slug.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# The error was caused by nested JSON objects being incorrectly terminated.
# I will use a more surgical approach to clean up the POSTS_DATA structure.

# 1. First, let's look for the problematic endings:
#             ]
#         }
#             ]
# }
#   ],

# This occurs at the end of every post block. 
# It should likely be:
#             ]
#         }
#     ],

# Let's fix the multi-level closing brackets.
# Every post data block currently looks like:
# "slug": [
#    {...},
#    {
#        "t": "faq",
#        "items": [...]
#    }
#  ]
# }  <-- EXTRA
# ], <-- EXTRA

def repair_content(text):
    # Fix the trailing structure of each post array
    # Looking for:
    #             ]
    #         }
    #             ]
    # }
    #   ],
    
    # Correct structure should be:
    #             ]
    #         }
    #     ],
    
    # The regex finds the end of the FAQ items array and then cleans up the excess closers
    # added by the previous script.
    
    pattern = re.compile(r'\]\s*\}\s*\]\s*\}\s*\]\s*,', re.DOTALL)
    text = pattern.sub('] } ],', text)
    
    # Also handle the very last one before dateMap
    pattern_last = re.compile(r'\]\s*\}\s*\]\s*\}\s*\]\s*\}\s*;', re.DOTALL)
    text = pattern_last.sub('] } ]\n};', text)
    
    return text

content = repair_content(content)

# Additionally, there's a specific issue in "fairplay-live-casino-features-and-services"
# where an object was inserted into an array improperly (lines 14335-14355)
# Let's clean that up specifically.

# It was inserted inside a 'ul' items array.
# 14334:         "Exclusive VIP tables",
# 14335:             {
# 14336:             "t": "faq",
# ...
# 14355:         }
# 14356:       ]

bad_ul_block = re.compile(r'"Exclusive VIP tables",\s*\{\s*"t":\s*"faq",\s*"items":\s*\[.*?\]\s*\}', re.DOTALL)
content = bad_ul_block.sub('"Exclusive VIP tables"', content)

with open(file_path, 'w') as f:
    f.write(content)

print("Fixed syntax issues in POSTS_DATA.")
