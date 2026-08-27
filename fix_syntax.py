import re

def fix_blog():
    file_path = 'src/routes/blog.tsx'
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Check for duplicate </div> fragments at the end
    # The tsgo output suggests JSX errors at lines 1550+ and 1800+
    
    # Let's completely rewrite the file with a clean structure if it's messed up.
    # But it's 1800 lines... 
    
    # Try targeted repair
    # Find the newsletter section
    newsletter_match = re.search(r'\{/\* Newsletter Footer \*/\}.*?</section>', content, re.DOTALL)
    if newsletter_match:
        # Reconstruct from start to end of newsletter, then add Quick Links and proper closure
        base_content = content[:newsletter_match.end()]
        
        jsx_block = """
    
      {/* Blog SEO Quick Links */}
      <section className="py-24 px-4 bg-primary/5 border-t border-white/5">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-12 text-center">Direct Navigation Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Betting Guides", href: "/blog", category: "Guide" },
              { title: "IPL Live Updates", href: "/ipl-betting", category: "Events" },
              { title: "Casino Strategy", href: "/casino", category: "Strategy" },
              { title: "Login Help", href: "/support", category: "Support" },
            ].map((link) => (
              <Link 
                key={link.title} 
                to={link.href}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary transition-all text-center group"
              >
                <span className="block text-primary text-[10px] font-black uppercase tracking-widest mb-2">{link.category}</span>
                <span className="text-xl font-black italic uppercase tracking-tighter group-hover:text-white transition-colors">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
"""
        with open(file_path, 'w') as f:
            f.write(base_content + jsx_block)

def fix_index():
    file_path = 'src/routes/index.tsx'
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Find the trust section
    trust_match = re.search(r'\{/\* Trust & Security \*/\}.*?</section>', content, re.DOTALL)
    if trust_match:
        base_content = content[:trust_match.end()]
        
        jsx_block = """
    
      {/* SEO Friendly Quick Links Section */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-[2px] w-10 bg-primary" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Quick Access</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-12">Essential Professional Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { title: "VIP Registration", href: "/register-guide" },
              { title: "Secure Login", href: "/login-guide" },
              { title: "IPL 2026 Hub", href: "/ipl-betting" },
              { title: "Elite Casino", href: "/casino" },
              { title: "Bonus Center", href: "/bonus" },
              { title: "Partner Network", href: "/services" },
              { title: "Support 24/7", href: "/support" },
              { title: "App APK", href: "/app" },
              { title: "About Fairplay", href: "/about" },
              { title: "Privacy Policy", href: "/privacy-policy" },
              { title: "Terms of Service", href: "/terms-conditions" },
              { title: "Live Cricket", href: "/betting" },
            ].map((link) => (
              <Link 
                key={link.title} 
                to={link.href} 
                className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all text-center group"
              >
                <span className="text-sm font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
"""
        with open(file_path, 'w') as f:
            f.write(base_content + jsx_block)

fix_blog()
fix_index()
