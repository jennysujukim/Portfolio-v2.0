// styles
import styles from './AboutMe.module.scss'

// components
import TerminalItem from '../../../components/TerminalItem'


export default function AboutMe() {

    return (
    <section className={styles.container}>
        <div className={styles.txtTop}>
            Hello &nbsp;
            <span className="highlight--white">World</span>
        </div>
        <div className={styles.heading}>
            <h2>
                Here's More
                <br/>
                About Me!
            </h2>
        </div>
        <div className={`wrapper--inner ${styles.txtContainer}`}>
            <p>
                I am a frontend developer who prioritizes &nbsp;
                <span className={styles.highlight}>problem-solving</span> 
                &nbsp; and delivers &nbsp;
                <span className={styles.highlight}>user-centric</span> 
                &nbsp; solutions.
            </p>
            <p>
                I like to create interactive digital products with &nbsp;
                <span className={styles.highlight}>JavaScript</span> 
                &nbsp; and its libraries such as &nbsp;
                <span className={styles.highlight}>React.</span>
            </p>
            <p>
                I consistently seek out challenges and leverage my knowledge to develop &nbsp;
                <span className={styles.highlight}>impactful products.</span>
            </p>
        </div>
        <div className={styles.terminalTitle}>
            <div className={styles.anim1}>
                <span>Command</span> 
                &nbsp;line on&nbsp;
                <span>terminal</span> 
                &nbsp;to navigate&nbsp;
            </div>
            <div className={styles.anim2}>
                <span>Command</span> 
                &nbsp;line on&nbsp;
                <span>terminal</span> 
                &nbsp;to navigate&nbsp;
            </div>
        </div>
        <div className={`wrapper--inner ${styles.terminal}`}>
            <TerminalItem />
        </div>
    </section> 
    )
}
