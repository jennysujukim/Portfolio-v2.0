//styles
import styles from './Hero.module.scss'

export default function Hero() {

  return (
    <>
    <section className={styles.container}>
      <h1 className={styles.title}>Jenny Seojeong Kim</h1>
      <div className={styles.txtContainer}>
        <div className={`heroText ${styles.txtTop}`}>
          Hi! I'm <span className={`highlight ${styles.circle}`}>Jen</span>
        </div>
        <div>
          <p className="heroText">Creative</p>
        </div>
        <div>
          <p className="heroText">Frontend Developer</p>
        </div>
        <div>
          <p className="heroText">UIUX Designer</p>
        </div>

        <p className={`heroText ${styles.subTxt}`}>Crafting <span>digital</span> experiences with <span>thoughtful</span> design</p>
      </div>
    </section>
    </>
  )
}