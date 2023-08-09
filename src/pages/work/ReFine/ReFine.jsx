import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'
import { codeClient, codeServer, codeOpenAi } from '../CodeData'

// styles
import styles from '../Work.module.scss'

// components
import WorkBanner from '../../../components/WorkBanner'
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import WorkNavigation from '../../../components/WorkNavigation'
import CodeSnippet from '../../../components/CodeSnippet'
import CtaButton from '../../../components/CtaButton'
import OverviewVid from '../../../assets/images/work/re-fine/overview.mp4'
import frontendImg from '../../../assets/images/work/re-fine/frontend.jpg'

export default function ReFine() {

    // Match project data
    const { setProjectId } = useContext(ProjectContext)

    useEffect(() => {
        setProjectId("002")
    }, [setProjectId])

    // Set slider's labels
    const ReFineSections = [ "Overview", "Serverside Envrionment", "OpenAI API", "Clientside Display", "Takeaways" ]

  return (
    <>
        <WorkBanner />
        <div className={`wrapper ${styles.container}`}>
            <WorkSlider sections={ReFineSections} />
            <div className={styles.content}>
                <section
                    id="section--0"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Overview"/>
                    <WorkOverview
                        timeline="JUL 2023"
                        role="Design & Develop"
                        tech="JavaScript &middot; Node.js &middot; Express.js &middot; OpenAI"
                    />
                    <div className={styles.overviewTxtContainer}>
                        <p className="grid-col-6">
                            RE:FINE is a web application that allows users to check and refine their sentences using AI. Through a user-friendly chat interface, you can input initial sentences and promptly receive the polished versions. 
                        </p>
                        <p className="grid-col-6">
                            As a non-native English speaker, I have relied on AI particularly chatGPT to modify sentences. RE:FINE eliminates the need for additional commands and simplifies the process of verifying grammar and improving sentence structure.
                        </p>
                    </div>
                    <div className={styles.vidContainer}>
                        <video playsInline autoPlay muted loop>
                            <source
                                src={OverviewVid} 
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </section>
                <section
                    id="section--1"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Server-side Environment"/>
                    <div className={styles.contentContainer}>
                        <div className={`grid-col-6 ${styles.txtContainer}`}>
                            <p>
                                The code utilizes Node.js as the runtime environment to integrate the OpenAI API efficiently. Express.js, a web application framework for Node.js, is employed to simplify the handling of HTTP requests and responses with the OpenAI API. After starting the server, I set up the middleware that parses incoming requests as JSON. Additionally, the application is configured to serve static assets from the 'public' directory.
                            </p>
                            <p>
                                Then, a route is created to handle POST requests at the '/api/content' endpoint. This route is associated with the generateContent function from the controller module. When a POST request is received at this endpoint, the generateContent function will be invoked to handle the request and generate the desired content using the OpenAI API.
                            </p>
                        </div>
                        <div className={`grid-col-6 ${styles.codeContainer}`}>
                            <CodeSnippet 
                                language="javascript"
                                code={codeServer}
                            />
                        </div>
                    </div>
                </section>
                <section
                    id="section--2"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="OpenAI Controller"/>
                    <div className={styles.contentContainer}>
                        <div className={`grid-col-6 order-2 ${styles.txtContainer}`}>
                            <p>
                                I created controller module to handle the Open AI API logic associated with the ‘/api/content’ endpoint. 
                            </p>
                            <p>
                                Thankfully, OpenAI provides comprehensive resources, which made it easy for me to set up the async function to handle the POST request. ‘Content’, which is the input value from the client side, is extracted when user make a request. The request’s body property contains a JSON object with a content field. 
                            </p>
                            <p>
                                This is passed to the messages array object, which is structured to serve as the command line for OpenAI’s GPT. I specifically have set the system and user’s situation to instruct the GPT model to function as a grammar checker and sentence refiner. 
                            </p>
                        </div>
                        <div className={`grid-col-6 ${styles.codeContainer}`}>
                            <CodeSnippet
                                language="javascript"
                                code={codeOpenAi}
                            />
                        </div>
                    </div>
                </section>
                <section
                    id="section--3"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Client-side Display"/>
                    <div className={styles.subContentContainer}>
                        <div className={`grid-col-6 ${styles.txtContainer}`}>
                            <p>
                                On the client-side, I have implemented the async function that sends a 'POST' request when the form is submitted. This allows the OpenAI controller to handle the content data sent from the form. When the fetch function successfully receives a response from the server, it triggers the execution of the formatAnswer() function. This function appends the generated answer as a new node element inside the HTML, displaying it to the user. Additional functions and error handling are included within this function to ensure a seamless user experience and better affordance.
                            </p>
                        </div>
                        <div className={`grid-col-6 ${styles.codeContainer}`}>
                            <CodeSnippet 
                                language="javascript" 
                                code={codeClient}
                            />
                        </div>
                    </div>
                    <div className={styles.subContentContainer}>
                        <div className={`grid-col-12 ${styles.imgContainer}`}>
                            <img 
                                src={frontendImg}
                                alt="Shots of RE:FINE App"
                            />
                        </div>
                    </div>
                </section>
                <section
                    id="section--4"
                    className={`wrapper--inner ${styles.section}`}
                >
                    <SubHeading text="Takeaways"/>
                    <div className={styles.contentContainer}>
                        <p className="grid-col-12">
                            Thanks to Express.js, building a project that includes both server and client with Node.js was an excellent practice for me. As a frontend developer, it provides me with a clear understanding of how server handles requests and how frontend displays the response on the client-side. Integrating OpenAI into the project initially seemed challenging, but the detailed documentation made it feasible to implement AI functionality. Although fine-tuning is required to achieve seamless and accurate answers in the responses, it was a fun project that catered to my personal needs.
                        </p>
                        <div className={`grid-col-12 ${styles.ctaContainer}`}>
                            <CtaButton 
                            text="Live Site"
                            link="https://re-fine.seojeongkim.com"
                            />
                            <CtaButton 
                            text="View Code"
                            link="https://github.com/jennysujukim/refine-2023"
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
