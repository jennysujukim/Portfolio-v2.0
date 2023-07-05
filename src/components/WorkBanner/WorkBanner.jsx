import { useContext } from 'react'
import { ProjectContext } from '../../context/ProjectContext'

// styles
import styles from './WorkBanner.module.scss'

// components
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'


export default function WorkBanner() {

    const { projectData } = useContext(ProjectContext)

    const openExternalLink = (url) => {
        window.open(url, '_blank', 'noopener noreferrer')
    }

  return (
    <>
        { projectData &&
            <section className={`wrapper ${styles.container}`}>
                <div className={styles.contentContainer}>
                    <div className={styles.txtContainer}>
                        <h2> {projectData.title}</h2>
                        <div className={`keywordsContainer ${styles.keywords}`}>
                            {projectData.keywords.map((keyword, index) => (
                                <span className="keywords" key={index}>
                                    {keyword}
                                </span>
                            ))}
                        </div>
                        <p>{projectData.description}</p>
                    </div>
                    <div className={styles.btnContainer}>
                        <button onClick={() => openExternalLink(`${projectData.live_site}`)}>
                            Live Site
                            < ArrowOutwardIcon className={styles.cta}/>
                        </button>
                        <button onClick={() => openExternalLink(`${projectData.source_code}`)}>
                            View Code
                            < ArrowOutwardIcon className={styles.cta}/>
                        </button>
                    </div>
                </div>
                <div className={styles.bannerImg}>
                    <img src={projectData.banner_url} alt={`Banner of ${projectData.title}`} />
                </div>
            </section>
        }
    </>

  )
}
