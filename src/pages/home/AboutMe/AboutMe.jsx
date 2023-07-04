
// styles
import styles from './AboutMe.module.scss'

// components
import Terminal from '../../../components/Terminal'


export default function AboutMe() {
    return (
    <section className={styles.container}>
        <div className="glass__black"></div>
        <div className={styles.txtTop}>Hello <span className="highlight--white">World</span></div>
       
        <div className={styles.heading}>
            <h2>Here's More <br/> About Me!</h2>
        </div>

        <div className={`wrapper--inner ${styles.txtContainer}`}>
            <p>I am a frontend developer who prioritizes problem-solving and delivers user-centric solutions.</p>
            <p>With a solid foundation in aesthetics, I enjoy creating digital products that are both functional and visually appealing to users. I consistently seek out challenges in the world and leverage my knowledge to develop impactful products.</p>
        </div>

        <div className={styles.terminalTitle}>
            <div className={styles.anim1}><span>Command</span> line on <span>terminal</span> to navigate</div>
            <div className={styles.anim2}><span>Command</span> line on <span>terminal</span> to navigate</div>
        </div>

        <div className={`wrapper--inner ${styles.terminal}`}>
            <Terminal />
        </div>
    </section>
    )
}
