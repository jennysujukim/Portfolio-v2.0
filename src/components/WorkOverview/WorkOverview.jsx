import { Link } from 'react-router-dom'

// styles
import styles from './WorkOverview.module.scss'

export default function WorkOverview({ timeline, role, tech, collab, members }) {
  return (
    <>
        <ul className={styles.overview}>
            <li className={styles.list}>
                <span>Timeline</span>
                <p>{ timeline }</p>
            </li>
            <li className={styles.list}>
                <span>Role</span>
                <p>{ role }</p>
            </li>
            <li className={styles.list}>
                <span>Tech</span>
                <p>{ tech }</p>
            </li>
            {collab && (
                <li className={styles.list}>
                    <span>Team Members</span>
                    <div>
                        {members.map((member, index) => (
                            <Link 
                                key={index}
                                to={member.link}
                                target="_blank"
                            >
                                <p>{ member.name } | { member.role }</p>
                            </Link>
                        ))}
                    </div>
                </li>
            )}
            {!collab && (
                <li className={styles.list}>
                    <span>Project Type</span>
                    <p>Individual project</p>
                </li>
            )}
        </ul>
    </>
  )
}
