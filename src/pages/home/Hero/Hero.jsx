//styles
import styles from './Hero.module.scss'

export default function Hero() {

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Jenny Seojeong Kim</h1>
      <div className={styles.txtTop}>Hi! I'm <span className="highlight">Jen</span></div>
      <div className={styles.txtLeft}><span className="highlight--vertical">Digital</span> Creator</div>
      <div className={styles.txtRight}>Based in <span className="highlight--vertical">Vancouver</span></div>
      <div className={styles.txtBottom}>Scroll to See More</div>

      <div className={styles.txtContainer}>
        <p>Creative</p>
        <p>Frontend Developer</p>
        <p>UIUX Designer</p>
        <p className={styles.subTxt}>Crafting <span>digital</span> experiences with <span>thoughtful</span> design</p>
      </div>
    </section>
  )
}