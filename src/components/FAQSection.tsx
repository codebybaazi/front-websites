import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { faqPageJsonLd, normalizeFaqs } from '@/utils/faq-schema';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
  /** Mark the “What is Fairplay?” answer for SpeakableSpecification. */
  speakable?: boolean;
}

export function FAQSection({ title = "Frequently Asked Questions", faqs, className = "", speakable = false }: FAQSectionProps) {
  const items = normalizeFaqs(faqs);
  if (items.length === 0) return null;
  const schema = faqPageJsonLd(items);

  return (
    <section className={`py-24 px-4 container max-w-5xl mx-auto ${className}`} aria-labelledby="faq-heading">
      <JsonLd data={schema} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
            <div className="h-[2px] w-8 bg-primary" />
            Knowledge Base
            <div className="h-[2px] w-8 bg-primary" />
          </div>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Short answers on Fairplay ID, deposits, cricket betting and the exchange — the questions people actually ask.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((faq, i) => {
            const isWhatIs = speakable && /what is fairplay/i.test(faq.q);
            return (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/30 border border-white/5 p-8 rounded-3xl hover:border-primary/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <h3
                id={isWhatIs ? "what-is-fairplay" : undefined}
                className="text-white font-semibold text-base tracking-normal mb-4 flex items-start gap-3 relative z-10"
              >
                <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 
                <span className="leading-tight">{faq.q}</span>
              </h3>
              <p
                id={isWhatIs ? "what-is-fairplay-answer" : undefined}
                className="text-muted-foreground/80 leading-relaxed italic text-sm relative z-10"
              >
                {faq.a}
              </p>
            </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
