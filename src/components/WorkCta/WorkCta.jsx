import { Link } from 'react-router-dom'
import ArrowOutward from '../ArrowOutward'

// styles
import styles from './WorkCta.module.scss'

export default function WorkCta({ link, title }) {
  return (
    <Link 
        to={link}
        target="_blank"
        className={styles.container}
    >
        <div className={styles.text}>
            <div>{ title }</div>
            <ArrowOutward />
        </div>
        <div className={styles.textClone}>
            <div>{ title }</div>
            <ArrowOutward />
        </div>
    </Link>
  ) 
}
