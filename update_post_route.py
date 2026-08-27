import json

with open('posts_data_constant.txt', 'r') as f:
    posts_data = f.read()

template = f"""import {{ createFileRoute }} from '@tanstack/react-router'
import {{ motion }} from 'framer-motion'
import {{ Calendar, User, Tag, ArrowLeft, ShieldCheck, Zap, Info }} from 'lucide-react'
import {{ Link }} from '@tanstack/react-router'

{posts_data}

export const Route = createFileRoute('/posts/$slug')({{
  loader: ({{ params }}: {{ params: {{ slug: string }} }}) => {{
    return {{ slug: params.slug }}
  }},
  head: ({{ loaderData }}) => {{
    const slug = loaderData?.slug || ''
    const title = slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    return {{
      title: `{{title}} | Fairplay Insights`,
      meta: [
        {{ name: 'description', content: `Expert betting guide for {{slug.replace(/-/g, ' ')}}. Get professional analysis and winning strategies on Fairplay.` }},
        {{ property: 'og:title', content: `{{title}} - Fairplay Pro` }},
        {{ name: 'twitter:card', content: 'summary_large_image' }},
      ],
    }}
  }},
  component: PostDetail,
}})

function PostDetail() {{
  const {{ slug }} = Route.useLoaderData()
  const content = POSTS_DATA[slug] || [];
  
  const title = slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <article className="container max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{{{ opacity: 0, y: 20 }}}}
          animate={{{{ opacity: 1, y: 0 }}}}
          className="mb-12"
        >
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest mb-8 hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO INSIGHTS
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-primary/10 text-primary rounded">INSIGHTS</span>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase">
              <Calendar className="w-3 h-3 text-primary" /> JAN 2026
            </div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase border-l border-border pl-4">
              <ShieldCheck className="w-3 h-3 text-primary" /> VERIFIED CONTENT
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-tight">
            {{title}}
          </h1>
          
          <div className="aspect-video bg-card border border-border rounded-[2rem] overflow-hidden mb-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 group-hover:opacity-100 transition-opacity" />
            <div className="w-full h-full flex items-center justify-center">
              <Zap className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{{{ opacity: 0 }}}}
          animate={{{{ opacity: 1 }}}}
          transition={{{{ delay: 0.2 }}}}
          className="prose prose-invert prose-orange max-w-none"
        >
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            {{content.length > 0 ? (
              content.map((item, idx) => {{
                if (item.t === 'h2') return <h2 key={{idx}} className="text-3xl font-black italic uppercase tracking-tight text-foreground mt-16 mb-6">{{item.c}}</h2>;
                if (item.t === 'h3') return <h3 key={{idx}} className="text-xl font-bold italic uppercase tracking-tight text-primary mt-12 mb-4">{{item.c}}</h3>;
                return <p key={{idx}} className="text-muted-foreground/90">{{item.c}}</p>;
              }})
            ) : (
              <div className="p-12 border border-dashed border-border rounded-3xl text-center">
                <Info className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p>Content for this specialized guide is being optimized for the 2026 season. Check back shortly for expert analysis.</p>
              </div>
            )}}
            
            <div className="bg-card/50 border border-primary/20 p-10 rounded-[2rem] my-16 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />
              <h3 className="text-primary font-black italic uppercase tracking-tighter text-2xl mb-4 relative z-10">Elite Fairplay Tip:</h3>
              <p className="italic text-foreground/80 text-xl relative z-10 leading-relaxed">
                "Winning at this level requires discipline and data. Use Fairplay's real-time analytics to spot value before the market adjusts. A pro never bets blindly."
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{{{ opacity: 0, y: 20 }}}}
          whileInView={{{{ opacity: 1, y: 0 }}}}
          viewport={{{{ once: true }}}}
          className="mt-32 p-16 bg-gradient-to-r from-card to-card/50 border border-primary/30 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">Master the Game with Fairplay</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">Join India's most elite betting community. Get your verified VIP ID instantly and secure your 500% welcome bonus.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/+910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-primary text-primary-foreground font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 uppercase tracking-widest italic overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Get VIP ID Now</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </a>
            <Link 
              to="/services"
              className="text-foreground/60 hover:text-primary font-bold uppercase tracking-widest text-sm transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  )
}}
"""

with open('src/routes/posts.$slug.tsx', 'w') as f:
    f.write(template)
