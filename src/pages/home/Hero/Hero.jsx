//styles
import styles from './Hero.module.scss'

// components
import ThreeHero from '../Animation/ThreeHero'

export default function Hero() {
 
  return (
    <>
    <section className={styles.container}>
      <ThreeHero />
      <h1 className={styles.title}>Jenny Seojeong Kim</h1>
      <div className={styles.txtContainer}>
        <div className={styles.txtTop}>
          Hi! I'm <span className={`highlight--white ${styles.circle}`}>Jen</span>
        </div>
        <div>
          <p>Creative</p>
        </div>
        <div>
          <p>Frontend Developer</p>
        </div>
        <div>
          <p>UIUX Designer</p>
        </div>
        <div>
          <p className={styles.subTxt}>Crafting <span>digital</span> experiences with <span>thoughtful</span> design</p>
        </div>
      </div>
    </section>
    </>
  )
}