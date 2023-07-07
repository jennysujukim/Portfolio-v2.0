// styles
import styles from './Home.module.scss'

// components
import Hero from './Hero'
import FeaturedProjects from './FeaturedProjects'
import AboutMe from './AboutMe'
import ThreeGradient from './Animation/ThreeGradient'

export default function Home() {

  return (
  <>
    <ThreeGradient />
    <main className={styles.main}>
      <div className="glass__white"></div>
      <Hero />
      <FeaturedProjects />
      <AboutMe />
    </main>
  </>

  )
}

