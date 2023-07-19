import { Link } from 'react-router-dom'

// styles
import styles from './CtaButton.module.scss'

// components
import ArrowOutward from '../ArrowOutward'

export default function CtaButton({ text, link }) {

    return (
        <Link
            to={link}
            target="_blank"
            className={`highlight ${styles.container}`}
        >
            {text}
            <div className={styles.cta}>
                <ArrowOutward 
                    w="20px"
                    h="20px"
                />
            </div>
        </Link>
    )
}
