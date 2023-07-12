import { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// styles
import styles from './Stories.module.scss'

// components
import { ArchiveAus, ArchiveFashion, ArchiveHobby } from '../../../assets/data/AnimData'

gsap.registerPlugin(ScrollTrigger)

export default function Stories() {

  const comp = useRef()

  useEffect(() => {

    let storyTitles = document.querySelectorAll('.story-title')
    
    storyTitles.forEach(txt => {
          gsap.fromTo(txt,
      {
        y: "30%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: txt,
          scrub: 1,
          start: "top +=70%",
          end: "top +=70%",
        }
      })
    })
    
  }, [comp])
  

  return (
    <section className="wrapper" ref={comp}>
      <h3 className={styles.heading}>More Stories</h3>

      <div className={styles.storiesContainer}>
        <div className={styles.content}>
          <div className={styles.img}>
            <ArchiveAus />
          </div>
          <div className={styles.txt}>
            <h4 className='story-title'>My Background</h4>
            <p>
              Originally from South Korea, I lived in Australia for few years in my early 20s. This experience has helped me develop strong adaptability skills and communicating with people from diverse backgrounds.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.img__reverse}>
            <ArchiveFashion />
          </div>
          <div className={styles.txt}>
            <h4 className='story-title'>From Fashion to Tech</h4>
            <p>
              Before entering the tech world, I studied and worked in fashion industry. During this time, I developed strong aesthetic skills and maintained a keen interest in staying updated with the latest trends. These experiences allowed me to become familiar with digital products and sparked my passion for frontend development.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.img}>
            <ArchiveHobby />
          </div>
          <div className={styles.txt}>
            <h4 className='story-title'>In My Free Time</h4>
            <p>
              I'm pretty much glued to my laptop most of the time, exploring and learning about new technologies. But I also make sure to take breaks and step outside to enjoy nature and find inspiration at exhibitions. And I love having long chats with my family and furry friends in Korea.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}