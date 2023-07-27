import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0.5 }} >
      <main>
        404 Not Found
      </main>
    </motion.div>
  )
}
