import { FetchProjectData } from '../../assets/data/FetchProjectData'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// styles
import styles from './ProjectsList.module.scss'

// components
import ArrowOutward from '../../components/ArrowOutward'


export default function ProjectsList({ isHome }) {

    const workProjects = FetchProjectData();
    const homeProjects = FetchProjectData().slice(0, 4);

  return (
    <ul className={isHome ? styles.cardContainer : styles.cardContainer__projects }>
        { isHome ? (    
            homeProjects.map((project, index) => (
            <li 
            key={index}
            className={styles.card}
            id={`section--${index}`}>
                <Link
                to={project.link}
                preventScrollReset={true} >
                    <div className={styles.cardImg}>
                        {/* <img 
                        src={project.image_url}
                        alt={project.title} /> */}
                        <LazyLoadImage 
                            alt={project.title}
                            height="100%"
                            src={project.image_url}
                            placeholdersrc={project.image_url_placeholder}
                            width="100%"
                            effect='blur'
                        />
                    </div>
                    <div className={styles.cardDetails}>                            
                        <span className={styles.id}>{project.id}</span>
                        <div className={styles.txtContainer}>
                            <div className={styles.titleContainer}>
                                <h4>{project.title}</h4>
                                <div className={styles.titleClone}>
                                    <span>{project.title}</span>
                                    <ArrowOutward />
                                </div>
                            </div>
                            <div className="keywordsContainer">
                                {project.keywords.map((keyword, index) => (
                                <span
                                className="keywords" 
                                key={index}>
                                    {keyword}
                                </span>
                            ))}
                            </div>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </Link>
            </li>))
        ) : (
            workProjects.map((project, index) => (
            <li 
            key={index}
            className={styles.card}
            id={`section--${index}`}>
                <Link
                to={project.link}
                preventScrollReset={true} >
                    <div className={styles.cardImg}>
                        {/* <img 
                        src={project.image_url_projects}
                        alt={project.title} /> */}
                        <LazyLoadImage 
                            alt={project.title}
                            height="100%"
                            src={project.image_url_projects}
                            placeholdersrc={project.image_url_projects_placeholder}
                            width="100%"
                            effect='blur'
                        
                        />
                    </div>
                    <div className={styles.cardDetails}>                            
                        <span className={styles.id}>{project.id}</span>
                        <div className={styles.txtContainer}>
                            <div className={styles.titleContainer}>
                                <h4>{project.title}</h4>
                                <div className={styles.titleClone}>
                                    <span>{project.title}</span>
                                    <ArrowOutward />
                                </div>
                            </div>
                            <div className="keywordsContainer">
                                {project.keywords.map((keyword, index) => (
                                <span
                                className="keywords" 
                                key={index}>
                                    {keyword}
                                </span>
                            ))}
                            </div>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </Link>
            </li>))
        )}
    </ul>
  )
}
