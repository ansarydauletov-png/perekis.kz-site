import { motion } from 'framer-motion'
import Section from '../layout/Section'
import { faqSection } from '../../data/content'
import { fadeUp } from '../../lib/animationPresets'

export default function FaqSection() {
  return (
    <Section id="faq" title={faqSection.title} className="section--faq">
      <motion.div
        className="faq-list"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {faqSection.items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </motion.div>
    </Section>
  )
}
