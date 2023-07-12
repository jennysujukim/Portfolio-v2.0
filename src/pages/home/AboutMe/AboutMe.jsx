import { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// styles
import styles from './AboutMe.module.scss'

// components
import Terminal from '../../../components/Terminal'

gsap.registerPlugin(ScrollTrigger)

export default function AboutMe() {

    const comp = useRef()
    const txtsRef = useRef([])
  
    useEffect(() => {
    
        gsap.fromTo(txtsRef.current,
        {
            mixBlendMode: "unset",
        },
        {
            mixBlendMode: "difference",
            stagger: 0.5,
            scrollTrigger: {
                trigger: comp.current,
                scrub: 1,
                start: "-=20% top",
                end: "-=20% top"
            }
        })
    }, [comp]);

    return (
    <section className={styles.container} ref={comp}>
        <div className="glass__black"></div>
        <div className={styles.txtTop}>Hello <span className="highlight--white">World</span></div>
       
        <div className={styles.heading}>
            <h2>Here's More <br/> About Me!</h2>
        </div>

        <div className={`wrapper--inner ${styles.txtContainer}`}>
            <p>I am a frontend developer who prioritizes <span className='text--highlight' ref={el => {txtsRef.current[0] = el;}}>problem-solving</span> and delivers <span className='text--highlight' ref={el => {txtsRef.current[1] = el;}}>user-centric</span> solutions.</p>
            <p>With a solid foundation in <span className='text--highlight' ref={el => {txtsRef.current[2] = el;}}>aesthetics,</span> I enjoy creating digital products that are both functional and visually appealing.</p>
            <p>I consistently seek out challenges in the world and leverage my knowledge to develop <span className='text--highlight' ref={el => {txtsRef.current[3] = el;}}>impactful products.</span></p>
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
