import { ArchiveAus, ArchiveFashion, ArchiveHobby } from '../../../assets/data/AnimData'

// styles
import styles from './Stories.module.scss'

export default function Stories() {
  return (
    <section className="wrapper">
      <h3 className={styles.heading}>More Stories</h3>

      <div className={styles.storiesContainer}>
        <div>
          <h4>My Background</h4>
          <div className={styles.content}>
            <div className={styles.img}>
              <ArchiveAus />
            </div>
            <p>
              Originally from South Korea, I lived in Australia for few years in my early 20s. This experience has helped me develop strong adaptability skills and communicating with people from diverse backgrounds.
            </p>
          </div>
        </div>

        <div>
          <h4>From Fashion to Tech</h4>
          <div className={styles.content}>
            <div className={styles.img__reverse}>
              <ArchiveFashion />
            </div>
            <p>
              Before entering the tech world, I studied and worked in fashion industry. During this time, I developed strong aesthetic skills and maintained a keen interest in staying updated with the latest trends. These experiences allowed me to become familiar with digital products and sparked my passion for frontend development.
            </p>
          </div>
        </div>

        <div>
          <h4>In My Free Time</h4>
          <div className={styles.content}>
            <div className={styles.img}>
              <ArchiveHobby />
            </div>
            <p>
              I'm pretty much glued to my laptop most of the time, exploring and learning about new technologies. But I also make sure to take breaks and step outside to enjoy nature and find inspiration at exhibitions. And I love having long chats with my family and furry friends in Korea.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}