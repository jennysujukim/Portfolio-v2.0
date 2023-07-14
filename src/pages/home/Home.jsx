import PageTransition from '../../hooks/usePageTransition'

// styles
import styles from './Home.module.scss'

// components
import Hero from './Hero'
import FeaturedProjects from './FeaturedProjects'
import AboutMe from './AboutMe'

export default function Home() {

  const WrappedContent = PageTransition(() => (
    <main className={styles.main}>
      <Hero />
      <FeaturedProjects />
      <AboutMe />
    </main>
  ))

  return (
    <WrappedContent />
  )
}
