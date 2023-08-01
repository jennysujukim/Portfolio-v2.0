import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'

// styles
import styles from '../Work.module.scss'

// components
import WorkBanner from "../../../components/WorkBanner"
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import CodeSnippet from '../../../components/CodeSnippet'
import WorkNavigation from '../../../components/WorkNavigation'
import { codeStateManagement, codeFrontend, codeBackend, codeDatabase } from '../CodeData'

// images and videos
import overviewImg from '../../../assets/images/work/daily-protein/overview.jpg'
import CtaButton from '../../../components/CtaButton/CtaButton'

export default function DailyProtein() {

  // Match project data
  const { setProjectId } = useContext(ProjectContext)

  useEffect(() => {
    setProjectId("001")
  }, [setProjectId])

  // Set slider's labels
  const DailyProteinSections = [ "Overview", "Components", "Fetch API", "Connect Firebase", "Auth", "Takeaways" ]

  return (
    <>
      <WorkBanner /> 
      <div className={`wrapper ${styles.container}`}>
          <WorkSlider sections={DailyProteinSections} />
        <div className={styles.content}>
          <section
            id="section--0"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Overview"/>
            <WorkOverview
              timeline="MAY - JUN 2023"
              role="DESIGN & DEVELOP"
              tech="MERN &bull; TYPESCRIPT &bull; REDUX &bull; FIREBASE AUTH &bull; MUI &bull; TAILWIND CSS"
            />
            <div className={styles.overviewTxtContainer}>
              <p className="grid-col-6">
                Daily Protein is a Single Page Application that helps users in monitoring their daily protein intake. With Daily Protein, users can effortlessly calculate their required protein amount for each day and set targets to track their progress by logging meals on the app.
              </p>
              <p className="grid-col-6">
                To get started, users simply need to create an account and input their profile information. Then they can search foods to get detailed nutrition info and add them to their daily protein tracker. The app automatically sum up the total protein amount, providing users with up to date progress towards their goal.
              </p>
            </div>
            <div className={styles.imgContainer}>
              <img 
                src={overviewImg} 
                alt="Shots of Daily Protein App"
              />
            </div>
          </section>
          <section
            id="section--1"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Version History"/>
            <div className={styles.subContentContainer}>
              <div className={`grid-col-12 ${styles.txtContainer}`}>
                <h4>Version 1.0</h4>
                <p>
                  The first version was developed with React.js and Firebase. It was my first project of building React project, so I integrated Firebase which is the serverless development platform to focus on developing frontend style and functionalities with CRUD operation.
                </p>
                <div className={`grid-col-12 ${styles.txtContainer} ${styles.txtGap}`}>
                  <p>&bull; Design client side view with React.js and Sass.</p>
                  <p>&bull; Fetch food data from Edamam API to display food list.</p>
                  <p>&bull; Feat daily protein goal calcuating function based on personal diet data.</p>
                  <p>&bull; Connect Firebase Firestore to CRUD profile and food logging data.</p>
                  <p>&bull; Apply Firebase Auth to authenticate users.</p>
                </div>
                <div className={`grid-col-12 ${styles.ctaContainerLeft}`}>
                  <CtaButton 
                    text="Live Site"
                    link="https://daily-protein-v1.seojeongkim.com/"
                  />
                  <CtaButton 
                    text="View Code"
                    link="https://github.com/jennysujukim/Daily-Protein-v1.0"
                  />
                </div>
              </div>
            </div>
            <div className={styles.subContentContainer}>
              <div className={`grid-col-12 ${styles.txtContainer}`}>
                <h4>Version 2.0</h4>
                <p>
                  In Version 2.0, I separated frontend and backend to practice full-stack development workflow and applied new tech stacks that I wanted to practice. On the client side, I implemented a robust CSS framework and libraries to ensure a consistent design. Additionally, I utilized TypeScript and Redux Toolkit to improve the app maintainability and ease of debugging. For the backend, I built a server using Express.js and connected it to a MongoDB Atlas database instead of Firebase.
                </p>
                <div className={`grid-col-12 ${styles.txtContainer} ${styles.txtGap}`}>
                  <p>&bull; Design client side view with Material UI and Tailwind CSS.</p>
                  <p>&bull; Refactor code with Typescript.</p>
                  <p>&bull; Feat Redux Tookit to manage states for Auth and profile data.</p>
                  <p>&bull; Create and connect server and client side with Axios http requests.</p>
                  <p>&bull; Migrate and connect database to server using Mongo DB Atlas.</p>
                </div>
                <div className={`grid-col-12 ${styles.ctaContainerLeft}`}>
                  <CtaButton 
                    text="Live Site"
                    link="https://daily-protein.seojeongkim.com/"
                  />
                  <CtaButton 
                    text="View Code"
                    link="https://github.com/jennysujukim/DailyProtein2.0_MERN"
                  />
                </div>
              </div>
            </div>
          </section>
          <section 
            id="section--2"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="States Management"/>
            <div className={styles.contentContainer}>
              <div className={`grid-col-6 ${styles.txtContainer}`}>
                <p>
                  The app has two main mutable states: auth and user profile data. With version 1, I utilized useReducer hook to manage multiple mutable states globally, however, I found that it was not the best practice to manage states in a large scale app. So I decided to refactor the code with Redux Toolkit to manage states in a more efficient way.
                </p>
                <p>
                  I created slice for auth and profile with Redux Toolkit. It is a concise way of defining the actions and reducers for a specific portion of the application state. 
                </p>
                <p>
                  In the slice, I defined the initial state and reducers for each state. The reducers are responsible for updating the state based on the dispatched actions. The actions are dispatched from the components when the user interacts with the app.
                </p>
                <p>
                  The reducers are exported and stored in the Redux store to pass to the Provider component, which makes the Redux store available to any nested components.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.codeContainer}`}>
                <CodeSnippet 
                  language="javascript"
                  code={codeStateManagement}
                />
              </div>
            </div>
          </section>
          <section
            id="section--3"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Connect Database"/>
            <div className={styles.contentContainer}>
              <div className={`grid-col-6 order-2 ${styles.txtContainer}`}>
                <p>
                  Since I decided to separate front and backend, I needed to create a server to handle the data communication between the client and the database. I used Express.js to create a server and created routes to handle the HTTP requests from the client to execute CRUD operations on the database.
                </p>
                <p>
                  Mongo DB Atlas is a cloud database service that allows users to store and manage data. I created a database on it and connected to the server with mongoose. Then I created a model to define the schema for the data to be stored in the database. This schema is used to create or specify a collection in the database so server can handle the requests with the correct database.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.codeContainer}`}>
                <CodeSnippet 
                  language="typescript"
                  code={codeDatabase}
                />
              </div>
            </div>
          </section>
          <section
            id="section--4"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="REST API"/>
            <div className={`grid-col-12 ${styles.subContentContainer}`}>
              <div className={`grid-col-6 ${styles.txtContainer}`}>
                <h4>Backend</h4>
                <p>
                  After successfully connecting database, the server is organized into routes and controllers. The routes are responsible for handling the HTTP requests with [GET, POST, DELETE] controller functions in assocciated with its data communication purpose. The controllers are responsible for executing the CRUD operations on the database. 
                </p>
                <p>
                  For instance, the '/api/tracker' route handles the HTTP requests for creating food tracker data. When the client sends a POST request to this route, the server executes the 'createTracker' controller function to make the data on Tracker database and send it back to the client.
                </p>
                <p>
                  Additionally, I created 'http-errors.js' model to handle errors during communication and provide appropriate affordance aligned with user behaviour. 
                </p>
                <p></p>
              </div>
              <div className={`grid-col-6 ${styles.codeContainer}`}>
                <CodeSnippet 
                  language="typescript"
                  code={codeBackend}
                />
              </div>
            </div>
            <div className={`grid-col-12 ${styles.subContentContainer}`}>
              <div className={`grid-col-6 order-2 ${styles.txtContainer}`}>
                <h4>Frontend</h4>
                <p>
                  After setting up routes and controllers on the server, I applied functions to communicate with the server on the client side in line with its purpose. I used Axios to send requests which is a promise-based HTTP client that works both in the browser and in a node.js environment.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.codeContainer}`}>
                <CodeSnippet 
                  language="typescript"
                  code={codeFrontend}
                />
              </div>
            </div>
          </section>

          <section
            id="section--5"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Takeaways"/>
            <div className={styles.contentContainer}>
              <p className="grid-col-12">
                By improving the project with new tech stacks, I was able to practice and learn more about React development. MUI and Tailwind CSS were the combination to create the component without long lines of code while keeping consistent design. Redux Toolkit was more straightforward to handle multiple mutable states throughout the app. However, implementing TypeScript was challenging for me at the beginning since it stopped the process when there was a type error. It took more time to fix the error, but it was worth it to prevent the error from happening in the future. Also, this frontend and backend practice allows me to understand the full-stack development workflow and how to handle data communication between client and server with REST API.
              </p>
              <div className={`grid-col-12 ${styles.ctaContainer}`}>
                <CtaButton 
                  text="Live Site"
                  link="https://daily-protein.seojeongkim.com/"
                />
                <CtaButton 
                  text="View Code"
                  link="https://github.com/jennysujukim/Daily-Protein-v2.0"
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
