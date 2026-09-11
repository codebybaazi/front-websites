import { motion } from 'framer-motion';
import { Sparkles, Info } from 'lucide-react';
import { overviewFor } from '@/utils/hub-overviews';

interface AIOverviewProps {
  title: string;
  content?: string;
  type?: 'summary' | 'analysis' | 'key-takeaways';
}

export function AIOverview({ title, content = '', type = 'summary' }: AIOverviewProps) {
  const body = overviewFor(title, content);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="post-summary"
      className="relative overflow-hidden mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-[40px] border border-primary/20" />
      
      {/* Animated Glow Effect */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full animate-pulse" />
      
      <div className="relative z-10 p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary rounded-xl">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-1">
              Quick summary
            </span>
            <h2 className="text-2xl font-black italic uppercase text-white leading-none">
              {title}
            </h2>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-lg text-white/80 leading-relaxed font-medium">
            {body}
          </p>
          
          <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            <Info className="w-3 h-3" />
            Plain-language summary for this Fairplay page
          </div>
        </div>
      </div>
    </motion.div>
  );
}
