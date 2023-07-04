import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FetchProjectData } from '../../../assets/data/FetchProjectData'
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// styles
import styles from './All.module.scss'

// components
import Heading from '../../../components/Heading'

gsap.registerPlugin(ScrollTrigger)

export default function All() {

  const projects = FetchProjectData()

  const comp = useRef()

  useEffect(() => {
    let cards = document.querySelectorAll('.target')

    cards.forEach(card => {
      gsap.fromTo(card,
        
        {
          y: "30%",
          transform: "rotate(-5deg)",
          opacity: 0
        },
        {
          y: "0%",
          transform: "rotate(0deg)",
          opacity: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: card,
            scrub: 1,
            start: "top bottom-=20vh",
            end: "center bottom"
          }
        }
      )
    })

  }, [])


  return (
    <section className={`wrapper ${styles.container}`}>
      <div className={styles.heading}>
        <Heading text="Projects"/>
      </div>
      <ul className={styles.listContainer} ref={comp}>
        {projects.map((project, index) => (
          <li
            key={index}
            className={`target project--${project.id} ${styles.cardContainer}`}>
            <Link
            to={project.link}
            preventScrollReset={true}>

            <svg
              className={styles.cta}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960">
              <path d="m250.308-258.693-31.615-31.615 413.923-414.308H250.001v-45.383h459.998v459.998h-45.383v-382.615L250.308-258.693Z"/>
            </svg>
            <span className={styles.id}>{project.id}</span>
            <div className={styles.overlay}></div>
            <div className={styles.imgContainer}>
              <img 
              src={project.image_url_projects}
              alt={project.title} />
            </div>


              <div className={styles.textContainer}>
                <div className={styles.cardText}>
                  <h4>{project.title}</h4>
                  <div className="keywordsContainer">
                    {project.keywords.map((keyword, index) => (
                    <span className="keywords" key={index}>
                      {keyword}
                    </span>
                    ))}
                  </div>
                </div> 
                <p>Short Description for the project.</p>                         
              </div>

            </Link>
          </li>
        ))}
      </ul>
    </section>      

  )
}
