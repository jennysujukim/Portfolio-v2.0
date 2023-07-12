import { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all'

//styles
import styles from './Hero.module.scss'

// components
import ThreeHero from '../Animation/ThreeHero'

export default function Hero() {
 
  const comp = useRef()
  const txtsRef = useRef([])

  useEffect(() => {
  
      gsap.fromTo(txtsRef.current,
      {
        y: '100%',
      },
      {
        y: '0%',
        stagger: 0.3,
      })
  }, []);


  return (
    <>
    <section className={styles.container} ref={comp}>
      <ThreeHero />
      <h1 className={styles.title}>Jenny Seojeong Kim</h1>
      <div className={styles.txtContainer}>
        <div className={styles.txtTop} ref={el => {txtsRef.current[0] = el;}}>
          Hi! I'm <span className={`highlight--white ${styles.circle}`}>Jen</span>
        </div>
        <div>
          <p ref={el => {txtsRef.current[1] = el;}}>Creative</p>
        </div>
        <div>
          <p ref={el => {txtsRef.current[2] = el;}}>Frontend Developer</p>
        </div>
        <div>
          <p ref={el => {txtsRef.current[3] = el;}}>UIUX Designer</p>
        </div>
        <div>
          <p className={styles.subTxt} ref={el => {txtsRef.current[4] = el;}}>Crafting <span>digital</span> experiences with <span>thoughtful</span> design</p>
        </div>
      </div>
    </section>
    </>
  )
}