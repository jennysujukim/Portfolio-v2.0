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
import CodeSnippet from '../../../components/CodeSnippet'
import { codePayPal, codeAuthContext } from '../CodeData'


// images
import overviewImg from '../../../assets/images/work/tidalfest/overview.jpg'
import pmImg from '../../../assets/images/work/tidalfest/project-management.jpg'
import qaImg from '../../../assets/images/work/tidalfest/quality-assurance.jpg'


export default function TidalFest() {

    // Match project data
    const { setProjectId } = useContext(ProjectContext)

    useEffect(() => {
        setProjectId("003")
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
                                The project is a rebuild of the website that we created in the past. In the initial version, we built a static website using HTML and CSS, and though we simulated the features, they were not fully functional. Due to our limited experience in web development at that time, we struggled to collaboratively manage the code to make it work as intended.
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
                                alt="Screenshot of project management board" 
                            />
                        </div>
                    </div>
                </section>
                <section
                    id="section--2"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Development" />
                    <div className={styles.subContentContainer}>
                        <div className={`grid-col-6 ${styles.txtContainer}`}>
                            <h4>UI & AuthContext</h4>
                            <p>
                                First, we decided to focus on the UI. Emily began creating reusable components, while I worked on establishing the layout to ensure a consistent and responsive website design. Afterward, we divided our tasks by pages to complete the UI for each page, and I was responsible for the Home and Tickets pages.
                            </p>
                            <p>
                                Regarding Authentication, I had experience with Firebase Auth from a previous personal project, so Emily took on the responsibility of integrating Authentication in this project. While Emily connecting OAuth, I worked on AuthContext to manage user and auth states globally which allows to pass actions from the components and update the states. 
                            </p>
                        </div>
                        <div className={`grid-col-6 ${styles.codeContainer}`}>
                            <CodeSnippet 
                                language="javascript"
                                code={codeAuthContext}
                            />
                        </div>
                    </div>
                    <div className={styles.subContentContainer}>
                        <div className={`grid-col-6 order-2 ${styles.txtContainer}`}>
                            <h4>PayPal Sandbox API</h4>
                            <p>
                                I was responsible for integrating the PayPal Sandbox API, enabling users to simulate purchasing tickets. I utilized '@paypal/react-paypal-js' to provide an optimized solution within the SPA components environment. 
                            </p>
                            <p>
                                However, there was a challenge when attempting to pass the saved the total order amount in the state to the PayPal's built-in function. The PayPal function didn't accept mutable values, so I decided to save the total order amount in the localStorage and retrieve the value in the PayPal function.
                            </p>
                            <p>
                                While this approach may not be the best practice in terms of security, we had limited time, so I chose to implement it this way. In the future, I plan to utilize a backend server to handle this sensitive data.
                            </p>
                        </div>
                        <div className={`grid-col-6 ${styles.codeContainer}`}>
                            <CodeSnippet 
                                language="javascript"
                                code={codePayPal}
                            />
                        </div>
                    </div>
                </section>
                <section
                    id="section--3"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Quality Assurance" />
                    <div className={styles.contentContainer}>
                        <div className={`grid-col-6 ${styles.txtContainer}`}>
                            <p>
                                After the development phase, we conducted a series of tests to ensure that the website was functioning as intended. We created the test plan for the main features, authentication and PayPal payment to test under three different devices/OS (Mac, iPhone and Window) with two different browsers (Chrome and Safari).
                            </p>
                            <p> 
                                During testing, we ensured to check if the website was compatible and if all features were working as intended. We encountered the bug in the FaceBook authentication through Firebase, which was caused by authorization issue with Facebook developer account. So we decided to remove the feature from the project.
                            </p>
                        </div>
                        <div className={`grid-col-6 ${styles.imgContainer}`}>
                            <img 
                                src={qaImg} 
                                alt="Screenshot of project management board" 
                            />
                        </div>
                    </div>
                </section>
                <section
                    id="section--4"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Takeaways" />
                    <div className={styles.contentContainer}>
                        <div className={`grid-col-12 ${styles.txtContainer}`}>
                            <p>
                                This project was a great opportunity to learn how to effectively manage a project with a team. We were able to successfully complete the project by utilizing GitHub Projects to manage the agile workflow. Additionally, we could keep track the development process with the team by using GitHub Issues and Pull Requests. I learned again the key to handle project is an endless communication with the team members, and it was very great to actually implement the Git workflow in the project.
                            </p>
                        </div>
                        <div className={`grid-col-12 ${styles.ctaContainer}`}>
                            <CtaButton 
                            text="Live Site"
                            link="https://tidalfest.seojeongkim.com"
                            />
                            <CtaButton 
                            text="View Code"
                            link="https://github.com/JerrelLustre/TidalFest"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <WorkNavigation />
    </>
  )
}
