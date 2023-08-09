import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'

// styles
import styles from '../Work.module.scss'

// components
import WorkBanner from '../../../components/WorkBanner'
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import WorkNavigation from '../../../components/WorkNavigation'


export default function TidalFest() {

    // Match project data
    const { setProjectId } = useContext(ProjectContext)

    useEffect(() => {
        setProjectId("004")
    }, [setProjectId])

    // Set slider's labels
    const TidalFestSections = [ "Overview", "Project Management", "Development", "Quality Assurance", "Takeaways" ]

  return (
    <>
        <WorkBanner />
        <div className={`wrapper ${styles.container}`}>
            <WorkSlider sections={TidalFestSections} />
            <div className={styles.content}>
                <section
                    id="seciton--0"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Overview" />
                    <WorkOverview 
                        timeline="AUG 2023"
                        role="Develop"
                        tech="React.js &middot; PayPal API &middot; Firebase &middot; MUI &middot; TailwindCSS"
                        collab={true}
                        members={[
                            {
                                name: "Arik",
                                link: "https://www.arikblaushtein.com",
                                role: "UI/UX Design, QA"
                            }, 
                            {
                                name: "Jerrel",
                                link: "https://jerrellustre.com/",
                                role: "UI/UX Design, Develop"
                            },
                            {
                                name: "Emily",
                                link: "https://emily-boyd.com/",
                                role: "Develop"
                            }
                        ]}
                    />
                    <div className={styles.overviewTxtContainer}>
                        <p className="grid-col-6">
                            {/* TidalFest is a SPA website that allows users to purchase tickets for the music festival. With this project, I could practice to work collaboratively with the team using GitHub and  */}
                        </p>
                        <p className="grid-col-6">

                        </p>
                    </div>
                </section>
                <section
                    id="seciton--1"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Project Management" />
                </section>
                <section
                    id="seciton--2"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Development" />
                </section>
                <section
                    id="seciton--3"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Quality Assurance" />
                </section>
                <section
                    id="seciton--4"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Takeaways" />
                </section>
            </div>
        </div>
        <WorkNavigation />
    </>
  )
}
