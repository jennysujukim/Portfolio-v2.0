import { Link } from 'react-router-dom';

// styles
import styles from './MailToButton.module.scss'

// components
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function MailToButton({ footer, mailto, text }) {

    const openMailTo = (e) => {
        window.location.href = mailto;
        e.preventDefault();
    }


  return (
    <Link 
        className={footer ? styles.footerMailTo : styles.profileMailTo}
        onClick={openMailTo}>
        {text}
        < ArrowOutwardIcon className={styles.cta}/>
    </Link>
  )
}
