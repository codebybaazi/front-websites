import os
import re

def get_faqs_for_route(route_name):
    route_display = route_name.replace('-', ' ').title()
    if 'betting' in route_name or 'ipl' in route_name or 't20' in route_name:
        return [
            {"q": f"How do I start {route_display} today?", "a": f"Simply secure your Elite Fairplay ID and navigate to the sports exchange section to find premium markets for {route_display}."},
            {"q": "What is the minimum stake for these markets?", "a": "Fairplay caters to both casual bettors and high-rollers, with minimum stakes starting at just ₹10 on most major sports events."},
            {"q": "Are the odds updated in real-time?", "a": "Yes, our institutional-grade data feeds ensure that odds for all sports markets are updated with sub-second latency."},
            {"q": "Can I use my 300% bonus here?", "a": "Absolutely! The Fairplay welcome bonus can be utilized across all sports exchange markets including this one."}
        ]
    elif 'vs' in route_name:
        parts = route_name.split('-vs-')
        competitor = parts[-1].replace('.tsx', '').capitalize() if len(parts) > 1 else "Competitors"
        return [
            {"q": f"Why choose Fairplay over {competitor}?", "a": f"Fairplay offers significantly higher liquidity and faster settlement speeds compared to {competitor}, thanks to our advanced P2P exchange architecture."},
            {"q": "Is it safe to switch from other platforms?", "a": "Yes, we provide instant VIP ID migration support for players moving from other platforms to the Fairplay elite ecosystem."},
            {"q": "Does Fairplay have better odds?", "a": f"On average, our P2P model provides 15% better odds than traditional bookmakers like {competitor} by eliminating the middleman margin."},
            {"q": "Can I use the same ID for both platforms?", "a": "No, you will need a dedicated Fairplay Elite ID to access our premium liquidity pools and exclusive 300% bonus offers."}
        ]
    elif 'issue' in route_name or 'support' in route_name or 'guide' in route_name or 'kyc' in route_name or 'policy' in route_name:
        return [
            {"q": "How quickly are technical issues resolved?", "a": "Our elite concierge team targets a resolution time of under 5 minutes for most account and technical queries."},
            {"q": "Is there a dedicated manager for my account?", "a": "Yes, high-volume players are automatically assigned a dedicated VIP manager for personalized 24/7 assistance."},
            {"q": "What should I do if I face a delay?", "a": "Simply reach out to our verified WhatsApp support channel for an instant audit and priority settlement of your query."},
            {"q": "Are these guides updated for 2026?", "a": "All Fairplay support documentation and technical guides are updated monthly to reflect the latest security and feature enhancements."}
        ]
    else:
        return [
            {"q": f"What is the Fairplay advantage for {route_display}?", "a": f"Fairplay provides a secure, high-liquidity environment for {route_display} with professional-grade tools for elite members."},
            {"q": "Is my data protected on this page?", "a": "Yes, we utilize 256-bit bank-grade encryption across all sections of our platform to ensure your privacy and security."},
            {"q": "How can I get more information?", "a": "Our 24/7 concierge team is always available via WhatsApp to provide deep-dives into any aspect of our services."},
            {"q": "Is this service available mobile-wide?", "a": "Absolutely. The entire Fairplay ecosystem is optimized for high-performance use on both iOS and Android devices."}
        ]

routes_to_fix = [
    "src/routes/11xplay.tsx", "src/routes/account-issues.tsx", "src/routes/all-links.tsx",
    "src/routes/app.tsx", "src/routes/basketball-betting.tsx", "src/routes/bonus-issues.tsx",
    "src/routes/champions-trophy.tsx", "src/routes/contact-us.tsx", "src/routes/cricbet99.tsx",
    "src/routes/deposit-guide.tsx", "src/routes/deposit-issues.tsx", "src/routes/disclaimer.tsx",
    "src/routes/esports-betting.tsx", "src/routes/fairdeal.tsx", "src/routes/fairplay-id.tsx",
    "src/routes/fairplay-vs-11xplay.tsx", "src/routes/fairplay-vs-diamond-exchange.tsx",
    "src/routes/fairplay-vs-fairdeal.tsx", "src/routes/fairplay-vs-gold365.tsx",
    "src/routes/fairplay-vs-laser247.tsx", "src/routes/fairplay-vs-lotus365.tsx",
    "src/routes/fairplay-vs-mahavir-book.tsx", "src/routes/fairplay-vs-reddybook.tsx",
    "src/routes/fairplay-vs-skyexchange247.tsx", "src/routes/gold365.tsx", "src/routes/horse-racing.tsx",
    "src/routes/ipl-betting.tsx", "src/routes/is-fairplay-legal.tsx", "src/routes/is-fairplay-real.tsx",
    "src/routes/is-fairplay-safe.tsx", "src/routes/kabaddi-betting.tsx", "src/routes/kyc-verification-policy.tsx",
    "src/routes/laser247.tsx", "src/routes/legal-status.tsx", "src/routes/login-guide.tsx",
    "src/routes/login-issues.tsx", "src/routes/platforms.tsx", "src/routes/privacy-policy.tsx",
    "src/routes/refund-policy.tsx", "src/routes/register-guide.tsx", "src/routes/responsible-gaming.tsx",
    "src/routes/rules-regulations.tsx", "src/routes/security-safety.tsx", "src/routes/t20-world-cup.tsx",
    "src/routes/telegram-channel.tsx", "src/routes/terms-conditions.tsx", "src/routes/what-is-fairplay.tsx",
    "src/routes/withdrawal-guide.tsx", "src/routes/withdrawal-issues.tsx", "src/routes/wpl-betting.tsx"
]

for file_path in routes_to_fix:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Remove the broken injection if it exists
    content = re.sub(r'\s+<FAQSection[^>]*/>\s*(\)\s+\})', r'\1', content)
    content = content.replace('import { FAQSection } from \'@/components/FAQSection\'', '')
    content = content.replace('import { FAQSection } from "@/components/FAQSection"', '')

    # Clean up double imports
    content = re.sub(r'\n\n+', '\n\n', content)

    # Add import correctly
    import_match = re.search(r"import\s+\{\s*AIOverview\s*\}\s+from\s+'@/components/AIOverview'", content)
    if import_match:
        content = content[:import_match.end()] + "\nimport { FAQSection } from '@/components/FAQSection'" + content[import_match.end():]
    else:
        # Try different quotes or no space
        import_match = re.search(r'import\s+\{\s*AIOverview\s*\}\s+from\s+"@/components/AIOverview"', content)
        if import_match:
             content = content[:import_match.end()] + "\nimport { FAQSection } from '@/components/FAQSection'" + content[import_match.end():]
        else:
             content = "import { FAQSection } from '@/components/FAQSection';\n" + content

    route_name = os.path.basename(file_path).replace('.tsx', '')
    faqs = get_faqs_for_route(route_name)
    
    # Format FAQs as a clean JS array of objects
    faqs_str = "[\n"
    for faq in faqs:
        q = faq['q'].replace("'", "\\'")
        a = faq['a'].replace("'", "\\'")
        faqs_str += f"          {{ q: '{q}', a: '{a}' }},\n"
    faqs_str += "        ]"

    faq_code = f"""
      <FAQSection 
        title="{route_name.replace('-', ' ').title()} FAQ"
        faqs={{{faqs_str}}}
      />"""

    # Insert before the last closing </div> that is followed by ) and }
    # This usually targets the end of the component's main div
    new_content = re.sub(r'(\n\s+)(</div>\s+)\)\s+\}', r'\1' + faq_code + r'\1\2)\n}', content)
    
    if new_content == content:
        # Fallback: if no match, try to insert at the end of the return block
        new_content = re.sub(r'(\n\s+)(\)\s+\})', r'\1' + faq_code + r'\1\2', content)

    with open(file_path, 'w') as f:
        f.write(new_content)

