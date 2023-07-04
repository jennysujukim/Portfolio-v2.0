import { FetchProjectData } from '../../../assets/data/FetchProjectData'
import { Link } from 'react-router-dom'

// styles
import styles from './FeaturedProjects.module.scss'

// components
import Button from '../../../components/Button'
import Heading from '../../../components/Heading'

export default function FeaturedProjects() {

    // fetch data
    const projects = FetchProjectData().slice(0, 4);

    return (
        <section className={`wrapper ${styles.container}`}>
            <div className={styles.heading}>
                <Heading text="Featured Projects"/>
                <p className={styles.subTxt}>Check out selected projects. 
                <br /> Have a blast exploring them!</p>
            </div>

            <ul className={styles.cardContainer}>
                {projects.map((project, index) => (
                <li 
                    key={index}
                    className={`${styles.card} ${ index === 1 || index === 3  ? styles.card__reverse : '' }`}>

                    <Link to={project.link}
                    preventScrollReset={true}>

                        <div className={styles.cardImg}>
                            <img 
                            src={project.image_url}
                            alt={project.title} />
                        </div>

                        <div className={styles.cardDetails}>                            
                            <span className={styles.id}>{project.id}</span>
                            <div className={styles.arrowContainer}>
                                <div>
                                    <h4>{project.title}</h4>
                                    <div className="keywordsContainer">
                                    {project.keywords.map((keyword, index) => (
                                        <span className="keywords" key={index}>
                                            {keyword}
                                        </span>
                                    ))}
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                    <path d="m250.308-258.693-31.615-31.615 413.923-414.308H250.001v-45.383h459.998v459.998h-45.383v-382.615L250.308-258.693Z"/>
                                </svg>
                            </div>
                            <p>{project.description}</p>
                        </div>

                    </Link>

                </li>
                ))}
            </ul>
            <Button text="View All Projects" link="/work/all" />
        </section>
    )
}
