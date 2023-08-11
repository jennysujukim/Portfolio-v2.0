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
import CtaButton from '../../../components/CtaButton'

// images
import overviewImg from '../../../assets/images/work/tidalfest/overview.jpg'
import pmImg from '../../../assets/images/work/tidalfest/project-management.jpg'


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
                    id="section--0"
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
                            Tidalfest is a promotional site created for a fictional music festival. The main content of the site involves sharing event details and the musician lineup. In this project, our team enhanced interactivity with authentication and PayPal payment.
                        </p>
                        <p className="grid-col-6">
                            We ensured that the management process was well-documented and practiced by utilizing GitHub. I took on the role of a developer and set up the branch/commit structures and project management board to effectively communicate with the team.
                        </p>
                    </div>
                    <div className={styles.imgContainer}>
                        <img 
                            src={overviewImg} 
                            alt="Shots of TidalFest" 
                        />
                    </div>
                </section>
                <section
                    id="section--1"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Project Management" />
                    <div className={styles.contentContainer}>
                        
                        <div className={`grid-col-6 order-2 ${styles.txtContainer}`}>
                            <p>
                                The project is a rebuild of the TidalFest website that we created in the past. In the initial version, we built a static website using HTML and CSS, and though we simulated the features, they were not fully functional. Due to our limited experience in web development at that time, we struggled to collaboratively manage the code to make it work as intended.
                            </p>
                            <p>
                                However, in this project, we decided to use GitHub Projects to achieve effective cross-functional communication. We utilized a Kanban board to manage the agile project, using visual signals to track progress with the team. Additionally, once a card was created, we made issues and branches to align with the card, allowing us to control the delivery points within the team.
                            </p>
                            <div className={`grid-col-12 ${styles.ctaContainerLeft}`}>
                            <CtaButton 
                                text="View Project Board"
                                link="https://github.com/users/JerrelLustre/projects/1"
                            />
                            </div>
                        </div>
                        
                        <div className={`grid-col-6 ${styles.imgContainer}`}>
                            <img 
                                src={pmImg} 
                                alt="Shots of Typa Type" 
                            />
                        </div>
                    </div>
                    <div>

                    </div>
                </section>
                <section
                    id="section--2"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Development" />
                </section>
                <section
                    id="section--3"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Quality Assurance" />
                </section>
                <section
                    id="section--4"
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
