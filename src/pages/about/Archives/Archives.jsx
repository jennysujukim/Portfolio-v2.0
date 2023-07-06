import { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// styles
import styles from './Archives.module.scss'

// components
import { ArchiveAus, ArchiveFashion, ArchiveHobby } from '../../../assets/data/AnimData'

// icons
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//initiate GSAP scrolltrigger
gsap.registerPlugin(ScrollTrigger)

export default function Archives() {

  const comp = useRef()
  const slider = useRef()

    useEffect(() => {
      let ctx = gsap.context(() => {

        let sections = gsap.utils.toArray(".archiveSection");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => "+=" + slider.current.offsetWidth,
            // markers: true
          }
        })
      }, comp)

      return () => ctx.revert();
    
    }, [])

  return (
  <section className={styles.wrapper} ref={comp}>
    <div className={styles.container} ref={slider}>

      <div className={`archiveSection ${styles.banner}`}>
        <span className="highlight--white">Photodumps</span>
        <h2>My Archives</h2>
        <div className={styles.scroll}>
          <div>
            <p>Scroll Down</p>
            <ArrowDownwardIcon />
          </div>
          <div>
            <p>To Move Right</p>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>

      <div className={`archiveSection ${styles.australia}`}>
      <div className={styles.sectionContainer}>
        <div className={styles.txt}>
          <h4>/ Australia</h4>
          <p>I studied fashion in Melbourne Australia and lived there for few years. It was a great experience to explore big nature and vibrant city.</p>
        </div>
        <div className={styles.imgAnim}>
          <ArchiveAus />
        </div>
        </div>
      </div>

      <div className={`archiveSection ${styles.fashion}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.imgAnim}>
            <ArchiveFashion />
          </div>
          <div className={styles.txt}>
            <h4>/ Fashion</h4>
            <p>This is the part for three sentences explaining about australia archive.</p>
          </div>
        </div>
      </div>

      <div className={`archiveSection ${styles.hobby}`}>
        <div className={styles.sectionContainer}>
        <div className={styles.txt}>
          <h4>/ Free Time</h4>
          <p>This is the part for three sentences explaining about australia archive.</p>
        </div>
        <div className={styles.imgAnim}>
          <ArchiveHobby /> 
        </div>
        </div>

      </div>

    </div>
  </section>
    
  )
}



// const comp = useRef()
// const slider = useRef()
// const heading = useRef()

// useEffect(() => {
//   let ctx = gsap.context(() => {
//     let sections = gsap.utils.toArray(".projectSection");
//     const triggerOffset = -slider.current.offsetTop;

//     gsap.to(heading, {
//       position: "fixed",
//       zIndex: 20,
//       scrollTrigger: {
//         trigger: heading.current,
//         pin: true,
//         pinSpacing: false,
//         scrub: 1,
//         start: "top +=108px",
//         end: () => "+=" + slider.current.offsetWidth,
//         markers: true
//       }
//     })

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: slider.current,
//         pin: true,
//         scrub: true,
//         start: `+=${triggerOffset}px top`,
//         end: () => "+=" + slider.current.offsetWidth,
//         markers: true
//       }
//     })

//   }, comp);

//   return () => ctx.revert();
// }, []);

