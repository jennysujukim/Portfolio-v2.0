import { Link } from 'react-router-dom'

// styles
import styles from './Button.module.scss'

export default function Button({ text, reverse, link }) {

    return(
        <div className={styles.container}>
            <Link className={`${reverse ? styles.reverse : styles.button}`} to={`${link}`}>
                { text }
            </Link>
        </div>
    )
}