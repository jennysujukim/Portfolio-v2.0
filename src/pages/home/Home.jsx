import { useEffect, useRef } from 'react'
import { gsap } from 'gsap/all'
import PageTransition from '../../hooks/usePageTransition'

// styles
import styles from './Home.module.scss'

// components
import Hero from './Hero'
import FeaturedProjects from './FeaturedProjects'
import AboutMe from './AboutMe'


export default function Home() {

  // GSAP banner text animation
  const comp = useRef()

  useEffect(() => {
    gsap.fromTo(comp.current, {
      opacity: "0",
    }, {
      opacity: "1",
      delay: 1
    })
  }, [])

  // Wrap content for FM page transition
  const WrappedContent = PageTransition(() => (
    <main
      className={styles.main}
      ref={comp}
    >
      <Hero />
      <FeaturedProjects />
      <AboutMe />
    </main>
  ))

  return (
    <WrappedContent />
  )
}
