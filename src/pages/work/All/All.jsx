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

  const sections = [ "001", "002", "003", "004" ]

  const handleScroll = (index) => {
    const element = document.getElementById(`section--${index}`)

    if (element) {
    const yOffset = -76;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

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
      <div className={styles.contentContainer}>
        <div className={styles.slider}>
            {sections.map((section, index) => (
            <div 
            className={styles.sliderIndex}
            key={index}
            onClick={() => handleScroll(index)}>
            {section}
            </div>
            ))}
        </div>
      <ul 
        className={styles.listContainer}
        ref={comp}>
          {projects.map((project, index) => (
          <li 
          key={index}
          className={`target ${styles.card}`}
          id={`section--${index}`}>
              <Link
              to={project.link}
              preventScrollReset={true} >

                  <div className={styles.cardImg}>
                      <img 
                      src={project.image_url_projects}
                      alt={project.title} />
                  </div>

                  <div className={styles.cardDetails}>                            
                      <span className={styles.id}>{project.id}</span>
                      <div className={styles.txtContainer}>
                          <h4>{project.title}</h4>
                          <div className="keywordsContainer">
                              {project.keywords.map((keyword, index) => (
                              <span className="keywords" key={index}>
                                  {keyword}
                              </span>
                          ))}
                          </div>
                          <p>{project.description}</p>
                      </div>
                  </div>

              </Link>

          </li>
          ))}
      </ul>
      </div>
      
    </section>      

  )
}