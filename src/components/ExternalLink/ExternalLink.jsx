import { Link } from 'react-router-dom'

// styles
import styles from './ExternalLink.module.scss'

// components 
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function ExternalLink({ text, link }) {

    return ( 
        <Link
            to={link}
            target="_blank"
            className={styles.container}>
            {text}
            < ArrowOutwardIcon className={styles.cta}/>
        </Link>
    )
}
