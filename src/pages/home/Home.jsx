

// styles
import styles from './Home.module.scss'

// components
import Hero from './Hero'
import FeaturedProjects from './FeaturedProjects'
import AboutMe from './AboutMe'

export default function Home() {

  return (
    <main className={styles.main}>
      <Hero />
      <FeaturedProjects />
      <AboutMe />
    </main>
  )
}

