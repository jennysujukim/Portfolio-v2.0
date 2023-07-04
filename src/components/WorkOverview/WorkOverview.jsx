// styles
import styles from './WorkOverview.module.scss'

export default function WorkOverview({ timeline, role, tech }) {
  return (
    <>
        <ul className={styles.overview}>
            <li>
                <span>Timeline</span>
                <p>{ timeline }</p>
            </li>
            <li>
                <span>Role</span>
                <p>{ role }</p>
            </li>
            <li>
                <span>Tech</span>
                <p>{ tech }</p>
            </li>
        </ul>
    </>
  )
}
