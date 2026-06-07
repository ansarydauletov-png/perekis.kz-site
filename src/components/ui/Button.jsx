import { motion } from 'framer-motion'

export default function Button({ children, href, variant = 'primary', className = '' }) {
  const classes = `button button-${variant} ${className}`

  if (href) {
    return (
      <motion.a
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={classes}
        href={href}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={classes}
      type="button"
    >
      {children}
    </motion.button>
  )
}
