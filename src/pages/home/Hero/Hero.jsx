import { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//styles
import styles from './Hero.module.scss'

// components 
import ThreeHero from './ThreeHero'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {

  // GSAP container animation
  const comp = useRef()
  const container = useRef()
  const txtsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(container.current, {
      borderRadius: "0",
      width: "100%",
      height: "100%",
      background: "#fbfbfb",
    }, {
      borderRadius: "180px",
      height: "calc(100% - 150px)",
      width: "98%",
      background: "#151515",
      delay: 2.4
    })

    gsap.fromTo(txtsRef.current, { 
      y: '100%' 
    },{
        y: '0%',
        stagger: 0.3,
        delay: 1.2
      })
  }, [comp])

  return (
    <>
    <section className={styles.container}>
      <div 
        className={styles.circleContainer} 
        ref={comp}
      >
        <div 
          className={styles.circle}
          ref={container}
        ></div>
      </div>
      <ThreeHero />
      <h1 className={styles.title}>Jenny Seojeong Kim</h1>
      <div className={styles.txtContainer}>
        <span className={styles.txtTop}>
          Hi! I'm <span className={`highlight--white ${styles.circle}`}>Jen</span>
        </span>
        <div className={styles.txtMain}>
          <p ref={el => {txtsRef.current[0] = el;}}>Creative</p>
        </div>
        <div className={styles.txtMain}>
          <p ref={el => {txtsRef.current[1] = el;}}>Frontend</p>
        </div>
        <div className={styles.txtMain}>
          <p ref={el => {txtsRef.current[2] = el;}}>Developer</p>
        </div>
        <div className={styles.txtSub}>
          <p ref={el => {txtsRef.current[3] = el;}}>
            Crafting&nbsp;
            <span>digital</span> 
            &nbsp;experiences with&nbsp;
            <span>thoughtful</span> 
            &nbsp;design&nbsp;
          </p>
        </div>
      </div>
    </section>
    </>
  )
}