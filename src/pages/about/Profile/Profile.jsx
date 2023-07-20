// styles
import styles from './Profile.module.scss'

// components
import profileImg from '../../../assets/images/profile.jpg'
import CtaButton from '../../../components/CtaButton/CtaButton'

export default function Profile() {

  const socialList = [
    { title: "LinkedIn", url: "https://www.linkedin.com/in/jenny-seojeong-kim/" },
    { title: "Github", url: "https://github.com/jennysujukim" },
    { title: "Email", url: "mailto:hello@seojeongkim.com" },
    { title: "Resume", url: "https://seojeongkim.com" }
  ]

  return ( 
    <section className={`wrapper ${styles.container}`}>
      <div className={styles.titleContainer}> 
        <h1>Hi, I'm Jen!</h1>
        <p>I code and design.</p>
      </div>
      <div className={styles.parentContainer}>
        <div className={`grid-col-5 ${styles.imgContainer}`}>
          <img 
            src={profileImg} 
            alt="Profile of Jen"
          />
        </div>
        <div className={`grid-col-7 ${styles.contentContainer}`}>
          <div className={styles.socialContainer}>
            <span>✨ Find Me On ✨</span>
            <div className={styles.socialList}>
              {socialList.map((social, index) => (
              <div key={index}>
                <CtaButton 
                  text={social.title}
                  link={social.url}
                />
              </div>
              ))}
            </div>
          </div>
          <div className={styles.txtContainer}>
            <p>
              I am currently studying New Media Design and Web Development at the British Columbia Institute of Technology.
            </p>
            <p>  
              With a curious and proactive mindset, I have discovered a hidden passion for the world of technology and have made the decision to pursue frontend development. 
            </p>
            <p>
              Drawing from my solid design background, my main focus is on developing products that have a positive impact on people while incorporating pleasing design. 
            </p>
            <p>
              I aspire to create products that offer solutions by emphasizing a human-centered approach. Furthermore, I strive to inspire users to engage with these products over the long term.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
