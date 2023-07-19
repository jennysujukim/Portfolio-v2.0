import { Link } from 'react-router-dom'

// styles
import styles from './InternalButton.module.scss'

export default function InternalButton({ text, link, reverse, flexEnd }) {

    return(
        <div className={`${flexEnd ? styles.containerRight : styles.container}`}>
            <Link 
                className={`${reverse ? styles.reverse : styles.button}`}
                to={`${link}`}
            >
                { text }
            </Link>
        </div>
    )
}