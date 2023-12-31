import { FetchProjectData } from '../../assets/data/FetchProjectData'
import { Link } from 'react-router-dom'

// styles
import styles from './ProjectsList.module.scss'

// components
import ArrowOutward from '../../components/ArrowOutward'
import LazyImage from '../LazyImage'

export default function ProjectsList({ isHome }) {

    const workProjects = FetchProjectData();
    const homeProjects = FetchProjectData().slice(0, 4);

  return (
    <ul className={isHome ? styles.cardContainer : styles.cardContainer__projects }>
        {isHome ? (    
            homeProjects.map((project, index) => (
            <li 
                key={index}
                className={`grid-row-1 ${styles.card}`}
                id={`section--${index}`}
            >
                <Link 
                    to={project.link}
                    className={styles.cardLink}
                >
                    <div className={styles.cardImg}>
                        <LazyImage 
                            src={project.image_url}
                            alt={project.title}
                            placeholderSrc={project.image_url_placeholder}
                            placeholderClassName="lazyImgPlaceholder"
                            className="lazyImage"
                        />
                    </div>
                    <div className={styles.cardDetails}>                            
                        <span className={styles.id}>
                            {project.id}
                        </span>
                        <div className={styles.txtContainer}>
                            <div className={styles.titleContainer}>
                                <p className="h4">
                                    {project.title}
                                </p>
                                <div className={styles.titleClone}>
                                    <span>{project.title}</span>
                                    <ArrowOutward />
                                </div>
                            </div>
                            <div className="keywordsContainer">
                                {project.keywords.map((keyword, index) => (
                                <span
                                className="keywords" 
                                key={index}
                                >
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
                id={`section--${index}`}
            >
                <Link
                    to={project.link}
                    className={styles.cardLink}
                >
                    <div className={styles.cardImg}>
                        <LazyImage 
                            src={project.image_url_projects}
                            alt={project.title}
                            placeholderSrc={project.image_url_projects_placeholder}
                            placeholderClassName="lazyImgPlaceholder"
                            className="lazyImage"
                        />
                    </div>
                    <div className={styles.cardDetails}>                            
                        <span className={styles.id}>
                            {project.id}
                        </span>
                        <div className={styles.txtContainer}>
                            <div className={styles.titleContainer}>
                                <p className="h4">
                                    {project.title}
                                </p>
                                <div className={styles.titleClone}>
                                    <span>{project.title}</span>
                                    <ArrowOutward />
                                </div>
                            </div>
                            <div className="keywordsContainer">
                                {project.keywords.map((keyword, index) => (
                                <span
                                className="keywords" 
                                key={index}
                                >
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
