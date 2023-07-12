// styles
import styles from './CtaButton.module.scss'

// components
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function CtaButton({ text, link }) {

    const openExternalLink = (url) => {
        window.open(url, '_blank', 'noopener noreferrer')
        }

    return (
        <button className={`highlight ${styles.container}`} onClick={() => openExternalLink(`${link}`)}>
            {text}
            < ArrowOutwardIcon className={styles.cta}/>
        </button>
    )
}
