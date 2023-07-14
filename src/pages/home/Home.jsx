import { motion } from 'framer-motion'

// styles
import styles from './Home.module.scss'

// components
import Hero from './Hero'
import FeaturedProjects from './FeaturedProjects'
import AboutMe from './AboutMe'

export default function Home() {

  return (

    <motion.div
      initial={{y: "100%"}}
      animate={{y: 0}}
      exit={{y: "-100%"}}
      transition={{duration: 1.5}}>
    <main className={styles.main}>
      <Hero />
      <FeaturedProjects />
      <AboutMe />
    </main>
    </motion.div>
  )
}

