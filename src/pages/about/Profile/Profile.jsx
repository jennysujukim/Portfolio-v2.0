// styles
import styles from './Profile.module.scss'

// components
import profileImg from '../../../assets/images/profile.jpg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function Profile() {

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener noreferrer')
  }

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
              <button className="highlight" onClick={() => openExternalLink("https://www.linkedin.com/in/jenny-seojeong-kim/")}>
                LinkedIn
                < ArrowOutwardIcon className={styles.cta}/>
              </button>
              <button className="highlight" onClick={() => openExternalLink("https://github.com/jennysujukim")}>
                Github
                < ArrowOutwardIcon className={styles.cta}/>
              </button>
              <button className="highlight" onClick={() => openExternalLink("https://www.instagram.com/codingwith_jen/")}>
                Instagram
                < ArrowOutwardIcon className={styles.cta}/>
              </button>
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
