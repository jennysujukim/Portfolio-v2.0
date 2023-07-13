import { Link } from 'react-router-dom'

// styles
import styles from './CtaButton.module.scss'

// components
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function CtaButton({ text, link }) {

    return (
        <Link
            to={link}
            target="_blank"
            className={`highlight ${styles.container}`}>
            {text}
            < ArrowOutwardIcon className={styles.cta}/>
        </Link>
    )
}
