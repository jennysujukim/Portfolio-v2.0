// styles
import styles from './ExternalLink.module.scss'

// components
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function ExternalLink({ text, link }) {

    const openExternalLink = (url) => {
        console.log(url)
        window.open(url, '_blank', 'noopener noreferrer')
    }

    return (
        <button 
        onClick={() => openExternalLink(`${link}`)}
        className={styles.container}>
            {text}
            < ArrowOutwardIcon className={styles.cta}/>
        </button>
    )
}
