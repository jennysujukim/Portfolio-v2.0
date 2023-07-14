import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'
import { WorkSliderContextProvider } from '../../../context/WorkSliderContext'
import { motion } from 'framer-motion'

// styles
import styles from './MyNotes.module.scss'

// components
import WorkBanner from '../../../components/WorkBanner'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import WorkSlider from '../../../components/WorkSlider'
import WorkNavigation from '../../../components/WorkNavigation'

export default function MyNotes() {

  // ---- Fetch MyNotes Data ---- //
  const { setProjectId } = useContext(ProjectContext)

  useEffect(() => {
    setProjectId("005")
  }, [setProjectId])

  // ---- Set Sections Title for Slider ---- //
  const MyNotesSections = [ "Overview", "At A Glance", "Database Operations", "Validation & Security", "Takeaways" ]

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}>
        <WorkBanner />
        <div className={`wrapper ${styles.container}`}>

          <WorkSliderContextProvider>
            <WorkSlider sections={MyNotesSections} />
          </WorkSliderContextProvider>

          <div className={styles.content}>
            <div className="glass__white"></div>
            <section 
              id="section--0"
              className="wrapper--inner">
              <SubHeading text="Overview" />
              <div>
                <WorkOverview
                  timeline="SEP - Nov 2022"
                  role="Design & Develop"
                  tech="PHP MySQL Bootstrap" />
              </div>
              <div className={styles.overviewText}>
                <p> My Notes  is an application that provides users with a personal dashboard for managing their notes. Users can sign up and log in to create their own accounts on the website. Once logged in, they can easily create, edit, and delete notes with categories. The app offers a search feature to find specific notes by their titles, and users can also sort the note list by categories.</p>
                <p> PHP and MySQL are implemented for CRUD database operations. Bootstrap is employed to style and maintain consistent design. After creating the MySQL database, it is connected to the project's root directory using PHP. Classes are utilized to manage and manipulate data within the project files. Additionally, jQuery Validation is implemented for client-side validation.</p>
              </div>
              <div className={styles.overviewImg}></div>
            </section>
            <section
            id="section--1"
            className="wrapper--inner">
              <SubHeading text="At A Glance" />
              <div className={styles.sectionGrid}>
                <div>
                  <h5>Search and Tab Functionalities</h5>
                  <p>Users can search for specific notes by keywords in the note titles, making it easier to find the information. The note titles and the search input words are split and stored as arrays. These arrays are then compared using the 'some' and 'includes' methods to determine if there are any matching values. The user interface for labels is designed using Bootstrap, providing a visually appealing and responsive design. Inside each tab, only the corrected value of the course_number will be displayed in the list.</p>
                </div>
                <div className={styles.glanceImg}></div>
              </div>
            </section>
            <section 
            id="section--2"
            className="wrapper--inner">
              <SubHeading text="Database Operations" />
            </section>
            <section
            id="section--3"
            className="wrapper--inner">
              <SubHeading text="Validation & Security" />
            </section>
            <section 
            id="section--4"
            className="wrapper--inner">
              <SubHeading text="Takeaways" />
            </section>
          </div>
        </div>
        <WorkNavigation />
      </motion.div>
    </>
  )
}
 