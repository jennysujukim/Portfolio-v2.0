import { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//styles
import styles from './Hero.module.scss'

// components 
import ThreeHero from './ThreeHero'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {

  const comp = useRef()
  const container = useRef()
  const txtsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(container.current, {
      borderRadius: "0",
      width: "100%",
      height: "100%"
    }, {
      borderRadius: "180px",
      height: "calc(100% - 150px)",
      width: "98%",
      delay: 3.7
    })

    gsap.fromTo(txtsRef.current,
      {
        y: '100%',
      },
      {
        y: '0%',
        stagger: 0.3,
        delay: 2.3
      })
  }, [comp])

  return (
    <>
    <section className={styles.container}>
      <div className={styles.circlesWrapper} ref={comp}>
        <div className={styles.circlesContainer}>
          <div className={styles.leftCircle} ref={container}></div>
        </div>
      </div>
      <ThreeHero />

      <h1 className={styles.title}>Jenny Seojeong Kim</h1>
      <div className={styles.txtContainer}>
        <span className={styles.txtTop}>
          Hi! I'm <span className={`highlight--white ${styles.circle}`}>Jen</span>
        </span>
        <div>
          <p ref={el => {txtsRef.current[0] = el;}}>Creative</p>
        </div>
        <div>
          <p ref={el => {txtsRef.current[1] = el;}}>Frontend Developer</p>
        </div>
        <div>
          <p ref={el => {txtsRef.current[2] = el;}}>& Designer</p>
        </div>
        <div>
          <p className={styles.subTxt} ref={el => {txtsRef.current[3] = el;}}>Crafting <span>digital</span> experiences with <span>thoughtful</span> design</p>
        </div>
      </div>
    </section>
    </>
  )
}