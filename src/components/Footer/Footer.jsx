// styles
import styles from './Footer.module.scss'

// components
import Button from '../Button'
import ExternalLink from '../ExternalLink'

export default function Footer() {

  return (
    <footer className={styles.wrapper}>
      <p className={styles.title} >Let's Connect!</p>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.socialContainer}>
            <p className={styles.label}>Find Me On</p>
            <ul className={styles.linkList}>
              <li>
                <ExternalLink 
                  text="LinkedIn"
                  link="https://www.linkedin.com/in/jenny-seojeong-kim/" />
              </li>
              <li>
                <ExternalLink
                  text="Github"
                  link="https://github.com/jennysujukim" />
              </li>
              <li>
                <ExternalLink 
                  text="Instagram" 
                  link="https://www.instagram.com/codingwith_jen/" />
              </li>
            </ul>
          </div>
          <div className={styles.contactContainer}>
            <p className={styles.label}>Contact</p>
            <ul className={styles.linkList}>
              <li>
                <ExternalLink 
                  text="Email"
                  link="https://github.com/jennysujukim" />
              </li>
              <li>
                <ExternalLink 
                  text="Resume" 
                  link="https://github.com/jennysujukim" />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.copyContainer}>
            <p>&copy; 2023</p>
            <p>All Rights Reserved</p>
            <p>JENKIM</p>
          </div>
          <div className={styles.scrollContainer}>
            <Button 
              flexEnd
              text="Back to top"
              className={styles.cta}/>
          </div>
        </div>
      </div>
    </footer>

  )
}
