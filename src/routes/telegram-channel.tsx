import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Send, Users, Bell, Zap, ArrowRight, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/telegram-channel')({
  component: TelegramChannel,
  head: () => pageHeadFor('/telegram-channel'),
})

function TelegramChannel() {
  const features = [
    { title: 'Market Alerts', desc: 'Real-time notifications on major sporting events and odds shifts.', icon: Bell },
    { title: 'Exclusive Tips', desc: 'Expert analysis and high-probability betting patterns.', icon: Zap },
    { title: 'VIP Community', desc: 'Connect with 50,000+ elite members in a secure environment.', icon: Users },
  ]

  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,136,204,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0088cc]/10 border border-[#0088cc]/20 text-[#0088cc] text-sm font-bold tracking-widest uppercase mb-8">
              <Send className="w-4 h-4 fill-[#0088cc]" /> Verified Telegram Network
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              ELITE <span className="text-[#0088cc] not-italic">TELEGRAM</span> COMMUNITY
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              The ultimate hub for high-stakes information. Stay ahead of the markets with our elite community channel.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Telegram Channel"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 border-[#0088cc]/20 hover:border-[#0088cc]/50 transition-all group"
              >
                <f.icon className="w-12 h-12 text-[#0088cc] mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-black italic uppercase mb-4 tracking-tighter">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0088cc] opacity-5" />
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-zinc-900/50 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0088cc]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter leading-none uppercase">
              Join <span className="text-[#0088cc] not-italic underline decoration-[#0088cc]/30 underline-offset-8">50,000+</span> Winners
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Get instant access to the official Fairplay Telegram and never miss a beat in the world of elite exchange betting.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://t.me/fairplay" 
                target="_blank"
                rel="noreferrer"
                className="bg-[#0088cc] text-white px-12 py-6 rounded-2xl font-black italic uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-[#0088cc]/20 flex items-center gap-4 mx-auto"
              >
                JOIN CHANNEL NOW <ArrowRight className="w-5 h-5" />
              </a>
              
              <div className="flex items-center gap-3 text-muted-foreground pt-4">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Official Verified Channel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    
      <FAQSection 
        title="Telegram Channel FAQ"
        faqs={[
          { q: 'Is Fairplay Telegram for deposits?', a: 'No. Telegram is for updates. IDs and UPI still go through official WhatsApp and the Fairplay login.' },
          { q: 'Someone in Telegram sent a UPI ID.', a: 'Ignore it. Only deposit details shown after you log in, or sent on the published WhatsApp, are valid.' },
          { q: 'Do tips in the channel settle on Fairplay?', a: 'Channel chat is not a bet. The slip after login is the only price that counts.' },
          { q: 'How do I join the right channel?', a: 'Use the link on this page. Random “Fairplay tips” groups are not the desk.' },
        ]}
      />
    </div>)
}
