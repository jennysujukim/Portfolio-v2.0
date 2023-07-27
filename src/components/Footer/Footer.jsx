// styles
import styles from './Footer.module.scss'

// components
import ExternalLink from '../ExternalLink'

export default function Footer() {

  const socialList = [
    { title: "LinkedIn", url: "https://www.linkedin.com/in/jenny-seojeong-kim/" },
    { title: "Github", url: "https://github.com/jennysujukim" },
    { title: "Instagram", url: "https://www.instagram.com/codingwith_jen/" }
  ]

  const contactList = [
    { title: "Email", url: "mailto:hello@seojeongkim.com" },
    { title: "Resume", url: "https://seojeongkim.com/resume" }
  ]

  // Scroll to top event hanlder
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <footer className={styles.wrapper}>
      <p className={styles.title}>
        Let's Connect!
      </p>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.socialContainer}>
            <p className={styles.label}>
              Find Me On
            </p>
            <ul className={styles.linkList}>
              { socialList.map((social, index) => (
                <li key={index}>
                  <ExternalLink 
                    text={social.title}
                    link={social.url}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.contactContainer}>
            <p className={styles.label}>
              Contact
            </p>
            <ul className={styles.linkList}>
                { contactList.map((contact, index) => (
                  <li key={index}>
                    <ExternalLink 
                      text={contact.title}
                      link={contact.url}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.copyContainer}>
            <p>&copy; 2023</p>
            <p>All Rights Reserved</p>
            <p>JENKIM</p>
          </div>
          <div 
            className={styles.scrollBtnContainer}
            onClick={handleBackToTop}>
            <div className={styles.scrollBtn}>
              Back to top
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
