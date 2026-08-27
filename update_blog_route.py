import json

# Define the Lucide components available in blog.tsx
lucide_imports = "BookOpen, Trophy, Zap, ArrowRight, Star, Shield, Smartphone"

with open('blog_constant.txt', 'r') as f:
    content = f.read()

# Final component structure for blog.tsx
blog_update = f"""import {{ createFileRoute }} from '@tanstack/react-router'
import {{ {lucide_imports} }} from 'lucide-react'
import {{ Link }} from '@tanstack/react-router'
import {{ motion }} from 'framer-motion'

export const Route = createFileRoute('/blog')({{
  head: () => ({{
    title: 'Fairplay Insights | 150+ Expert Betting Guides & Tips',
    meta: [
      {{ name: 'description', content: 'Master the game with Fairplay expert insights. 150+ detailed guides for Cricket, Football, Casino, and premium betting strategies.' }},
    ],
  }}),
  component: BlogPage,
}})

const ICON_MAP: Record<string, any> = {{
  BookOpen, Trophy, Zap, Star, Shield, Smartphone
}};

{content}

function BlogPage() {{
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{{{ opacity: 0, y: 20 }}}}
            animate={{{{ opacity: 1, y: 0 }}}}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
              FAIRPLAY <span className="text-primary not-italic">INSIGHTS</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore over 150+ professional guides, winning strategies, and market analysis for the elite betting experience.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {{articles.map((post, i) => {{
            const Icon = ICON_MAP[post.icon] || Star;
            return (
              <motion.article 
                key={{i}}
                initial={{{{ opacity: 0, scale: 0.95 }}}}
                whileInView={{{{ opacity: 1, scale: 1 }}}}
                viewport={{{{ once: true }}}}
                transition={{{{ delay: Math.min(i * 0.05, 0.5) }}}}
                className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all flex flex-col"
              >
                <div className="aspect-video bg-primary/5 flex items-center justify-center border-b border-border group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-16 h-16 text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-primary/10 text-primary rounded">{{post.category}}</span>
                    <span className="text-[10px] text-muted-foreground font-bold uppercase">{{post.date}}</span>
                  </div>
                  <h2 className="text-2xl font-black italic uppercase tracking-tight mb-4 leading-none group-hover:text-primary transition-colors">
                    {{post.title}}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                    {{post.desc}}
                  </p>
                  <Link 
                    to="/posts/\$slug"
                    params={{{{ slug: post.slug }}}}
                    className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-4 transition-all"
                  >
                    READ FULL ARTICLE <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            );
          }})}}
        </div>

        <section className="mt-32 p-12 bg-primary rounded-[3rem] text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -z-0" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">Stay Ahead of the Market</h2>
              <p className="text-lg opacity-90 font-medium">Subscribe to our newsletter to receive weekly insights, flash bonus codes, and market analysis directly in your inbox.</p>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/20 border border-white/30 rounded-2xl px-6 py-4 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="bg-white text-primary font-black px-8 py-4 rounded-2xl hover:scale-105 transition-all shadow-xl">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}}
"""

with open('src/routes/blog.tsx', 'w') as f:
    f.write(blog_update)
