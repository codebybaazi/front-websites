import { motion } from 'framer-motion';
import { Info, NotebookText } from 'lucide-react';
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden mb-12 rounded-xl border border-white/8 bg-card/60"
    >
      <div className="h-[3px] w-full brand-rule" />
      
      <div className="relative z-10 p-7 md:p-9">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-primary/15 rounded-md border border-primary/25">
            <NotebookText className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span className="kicker block mb-1">
              In brief
            </span>
            <h2 className="text-xl font-semibold tracking-tight text-foreground leading-none">
              {title}
            </h2>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="ai-overview-summary text-[15px] text-foreground/80 leading-relaxed">
            {body}
          </p>
          
          <div className="pt-3 flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
            <Info className="w-3 h-3" />
            A short read of this Fairplay page — not betting advice.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
