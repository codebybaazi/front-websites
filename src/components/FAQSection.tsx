import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
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
}

export function FAQSection({ title = "Questions people actually ask", faqs, className = "" }: FAQSectionProps) {
  const items = normalizeFaqs(faqs);
  if (items.length === 0) return null;
  const schema = faqPageJsonLd(items);

  return (
    <section className={`py-24 px-4 container max-w-5xl mx-auto ${className}`} aria-labelledby="faq-heading">
      <JsonLd data={schema} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 brand-rule" />
            <span className="kicker">Straight answers</span>
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl leading-relaxed">
            IDs, deposits, cricket books and payouts — written the way the desk explains them, not as marketing copy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card/60 border border-white/8 border-l-2 border-l-primary/40 p-7 rounded-lg hover:border-l-primary transition-colors"
            >
              <h3 className="text-foreground font-semibold text-[15px] mb-3 flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 
                <span className="leading-snug">{faq.q}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm pl-7">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
