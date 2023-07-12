// styles
import styles from './Profile.module.scss'

// components
import profileImg from '../../../assets/images/profile.jpg'
import CtaButton from '../../../components/CtaButton'

export default function Profile() {

  return ( 
    <section className={`wrapper ${styles.container}`}>
      <div className={styles.titleContainer}> 
        <h1>Hi, I'm Jen!</h1>
        <p>I code and design.</p>
      </div>
      <div className={styles.parentContainer}>
        <div className={styles.imgContainer}>
          <img src={profileImg} alt="Profile of Jen" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.socialContainer}>
            <span>✨ Find Me On ✨</span>
            <div className={styles.socialList}>
              <CtaButton 
                text="LinkedIn"
                link="https://www.linkedin.com/in/jenny-seojeong-kim/"/>
              <CtaButton 
                text="Github"
                link="https://github.com/jennysujukim"/> 
              <CtaButton 
                text="Email"
                link="https://github.com/jennysujukim"/>
              <CtaButton
                text="Resume"
                link="https://github.com/jennysujukim"/>
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
