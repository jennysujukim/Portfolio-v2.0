import { FetchProjectData } from '../../../assets/data/FetchProjectData'
import { Link } from 'react-router-dom'

// styles
import styles from './FeaturedProjects.module.scss'

// components
import Button from '../../../components/Button'
import Heading from '../../../components/Heading'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


export default function FeaturedProjects() {

    // fetch data
    const projects = FetchProjectData().slice(0, 4);

    return (
        <section className="wrapper">
            <div className={styles.heading}>
                <Heading text="Featured Projects"/>
                <p className={styles.subTxt}>Check out selected projects. 
                <br /> Have a blast exploring them!</p>
            </div>

            <ul className={styles.cardContainer}>
                {projects.map((project, index) => (
                <li 
                key={index}
                className={styles.card}>
                    <Link
                    to={project.link}
                    preventScrollReset={true} >

                        <div className={styles.cardImg}>
                            <img 
                            src={project.image_url}
                            alt={project.title} />
                        </div>

                        <div className={styles.cardDetails}>                            
                            <span className={styles.id}>{project.id}</span>
                            <div className={styles.txtContainer}>
                                <div className={styles.titleContainer}>
                                    <h4>{project.title}</h4>
                                    <div className={styles.titleClone}>
                                        <span>{project.title}</span>
                                        <ArrowOutwardIcon />
                                    </div>

                                </div>
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
            <Button text="View All Projects" link="/work/all" />
        </section>
    )
}
