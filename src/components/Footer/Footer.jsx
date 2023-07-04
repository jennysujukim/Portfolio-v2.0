// styles
import styles from './Footer.module.scss'

// components
import Button from '../Button'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function Footer() {

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener noreferrer')
  }

  return (
    <footer className={styles.wrapper}>
      <p className={styles.title} >Let's Connect!</p>
      <div className={styles.container}>
        <div className={styles.txtContainer}>
          <ul className={styles.social}>
            <li>
              <button onClick={() => openExternalLink("https://www.linkedin.com/in/jenny-seojeong-kim/")}>
                LinkedIn
                < ArrowOutwardIcon className={styles.cta}/>
              </button>
            </li>
            <li>
              <button onClick={() => openExternalLink("https://github.com/jennysujukim")}>
                Github
                < ArrowOutwardIcon className={styles.cta}/>
              </button>
            </li>
            <li>
              <button onClick={() => openExternalLink("https://www.instagram.com/codingwith_jen/")}>              
                Instagram
                < ArrowOutwardIcon className={styles.cta}/>
              </button>
            </li>
          </ul>
          <ul className={styles.contact}>
            <li>
              <button onClick={() => openExternalLink("https://www.instagram.com/codingwith_jen/")}>    
                Email
                < ArrowOutwardIcon className={styles.cta}/>
              </button>
            </li>
            <li>
              <button onClick={() => openExternalLink("https://www.instagram.com/codingwith_jen/")}>                  
                Resume
                < ArrowOutwardIcon className={styles.cta}/>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.sideContainer}>
          <Button text="Back to top"/>
        </div>
      </div>
    
      {/* <div className={styles.footer}>
        <div className={styles.copy}>
          <p>&copy; 2023</p>
          <p>Designed & Coded by</p>
          <p>JENKIM</p>
        </div>
      </div> */}

    </footer>

  )
}
