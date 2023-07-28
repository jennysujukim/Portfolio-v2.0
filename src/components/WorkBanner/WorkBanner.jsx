import { useContext } from 'react'
import { ProjectContext } from '../../context/ProjectContext'

// styles
import styles from './WorkBanner.module.scss'

// components
import WorkCta from '../WorkCta'

export default function WorkBanner() {
 
    const { projectData } = useContext(ProjectContext)

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
                        <WorkCta 
                            link={projectData.live_site}
                            title="Live Site"
                        />
                        <WorkCta 
                            link={projectData.source_code}
                            title="View Code"
                        />
                    </div>
                </div>
                <div className={styles.bannerImg}>
                    <img 
                    src={projectData.banner_url} 
                    alt={`Banner of ${projectData.title}`} 
                    width="100%" 
                    height="100%"/>
                </div>
            </section>
        }
    </>

  )
}
