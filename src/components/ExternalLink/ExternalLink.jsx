import { Link } from 'react-router-dom'

// styles
import styles from './ExternalLink.module.scss'

// components 
import ArrowOutward from '../ArrowOutward'

export default function ExternalLink({ text, link, project }) {

    return ( 
        <Link
            to={link}
            target="_blank"
            className={project ? styles.container_projects : styles.container}>
            {text}
            <div className={ project ? styles.cta_projects : styles.cta }>
                < ArrowOutward 
                    w="25px"
                    h="25px"/>
            </div>
        </Link>
    )
}
