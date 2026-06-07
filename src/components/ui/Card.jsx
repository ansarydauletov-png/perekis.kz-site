import { motion } from 'framer-motion'

export default function Card({ children, className = '' }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-card ${className}`}
    >
      {children}
    </motion.article>
  )
}
