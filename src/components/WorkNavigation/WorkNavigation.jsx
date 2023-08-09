import { Link } from 'react-router-dom'
import { useProjectContext } from '../../hooks/useProjectContext'

// styles
import styles from './WorkNavigation.module.scss'

// components
import ArrowOutward from '../ArrowOutward'

export default function WorkNavigation() {

    const { nextProjectData } = useProjectContext()

  return (
    <> 
        { nextProjectData &&
            <section className={`wrapper ${styles.container}`}>
                <Link 
                to="/work/all"
                className={styles.goBackContainer}>
                    <div className={styles.goBack}>
                        <ArrowOutward w="25px" h="25px"/>
                        <p>Go Back To List</p>
                    </div>
                </Link>
                <Link
                to={nextProjectData.link}
                className={styles.nextContainer}>
                    <div className={styles.nextProject}>
                        <p>Next Project</p>
                        <ArrowOutward w="25px" h="25px"/>
                    </div>
                    <div className={styles.projectDetails}>
                        <h4>{nextProjectData.title}</h4>
                        <span>{nextProjectData.id}</span>
                    </div>
                </Link>
            </section>
        }
    </>
  )
}
