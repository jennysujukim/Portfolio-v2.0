// styles
import styles from './All.module.scss'

// components
import Heading from '../../../components/Heading'
import ProjectsList from '../../../components/ProjectsList'

export default function All() {

  const sections = [ "001", "002", "003", "004", "005", "006" ]

  const handleScroll = (index) => {
    const element = document.getElementById(`section--${index}`)

    if (element) {
    const yOffset = -76;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

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
        <ProjectsList />
      </div>
      
    </section>      

  )
}