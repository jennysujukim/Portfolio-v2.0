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
import { codeFetchApi, codeFirebase, codeAuth } from '../CodeData'

// images and videos
import overviewImg from '../../../assets/images/work/daily-protein/overview.jpg'
import componentVid from '../../../assets/images/work/daily-protein/components-form.mp4'
import componentImg from '../../../assets/images/work/daily-protein/components.jpg'
import authVid from '../../../assets/images/work/daily-protein/auth.mp4'
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
              role="Design & Develop"
              tech="REACT.JS SASS FIREBASE"
            />
            <div className={styles.overviewTxtContainer}>
              <p className="grid-col-6">
                Daily Protein is a user-friendly Single Page Application that helps users in monitoring their daily protein intake. With Daily Protein, users can effortlessly calculate their required protein amount for each day and set targets to track their progress by logging meals on the app.
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
            <SubHeading text="Components"/>
            <div className={styles.subContentContainer}>
              <div className={`grid-col-6 ${styles.txtContainer}`}>
                <h4>Components and Routes</h4>
                <p>
                  To initiate the project, the view pages are established and components are created separately for each page. This approach ensures that the app functions as a single-page application, providing seamless user experience and enhancing reusability during development process.
                </p>
                <p>
                  Given that the app requires multiple pages, React Router Dom is utilized to enable dynamic routing within the app. This allows the app to fetch content based on the URL without the need for page refreshing.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.imgContainer}`}>
                <img 
                  src={componentImg}
                  alt="Components of Daily Protein App"
                />
              </div>
            </div>
            <div className={styles.subContentContainer}>
              <div className={`grid-col-6 order-2 ${styles.txtContainer}`}>
                <h4>Controlled Components</h4>
                <p>
                  Forms are utilized to handle user input values. Instead of managing the component values directly, React State is used to control their value. This approach makes it easier to track, validate, and modify the input as needed, which is also beneficial for future reference purposes when integrating with Firebase.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.vidContainer}`}>
                <video playsInline autoPlay muted loop>
                  <source 
                    src={componentVid}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </section>
          <section 
            id="section--2"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Fetch API"/>
            <div className={styles.contentContainer}>
              <div className={`grid-col-6 ${styles.txtContainer}`}>
                <p>
                  After setting up basic layout functionalities and routes, I proceeded to the next phase of fetching food nutrition data from ‘Edamam’ API endpoint. This enables users to search for food by name and get a list of matching food items along with their nutrition information. 
                </p>
                <p>
                  I created a custom hook to encapsulates the logic required for fetching data asynchronously. Within the function, three states ‘data’, ‘isPending’, and ‘error’ are declared to represent different aspect of the fetch process. 
                </p>
                <p>
                  A try-catch block is implemented to handle potential errors. In order to track the fetch signal and enable the request to be aborted if necessary, AbortController is utilized. 
                </p>
                <p>
                  Once a list of searched food items is successfully fetched, I implemented functionality to add the selected food items to the main tracker when users click the 'add' button. To achieve this, integration with Firebase's Firestore database was implemented.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.codeContainer}`}>
                <CodeSnippet 
                  language="javascript"
                  code={codeFetchApi}
                />
              </div>
            </div>
          </section>
          <section
            id="section--3"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Connect Firebase"/>
            <div className={styles.contentContainer}>
              <div className={`grid-col-6 order-2 ${styles.txtContainer}`}>
                <p>
                  I utilize Firebase to store and sync real-time data which using NoSQL cloud database. With real-time updates, changes are instantly delivered to connected users which is perfect for displaying a live protein tracker dashboard.  Also Firebase's serverless architecture enables me to focus on development instead of managing servers.
                </p>
                <p>
                  Two collections have been created: one for storing added food intakes from the searched food item lists, and the other for storing user profile data, which is used to automatically calculate the personal daily protein goal.
                </p>
                <p>
                  The forms and controlled components created during the initial phase have been integrated to enable the creation, updating, and deletion of data between the database and the user's input.
                </p>
                <p>
                  To ensure that the database is exclusively displayed for the associated user, the user's ID (uid) has been added as a field to each document. This allows the app to retrieve data only when the uid matches.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.codeContainer}`}>
                <CodeSnippet 
                  language="javascript"
                  code={codeFirebase}
                />
              </div>
            </div>
          </section>
          <section
            id="section--4"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Auth"/>
            <div className={styles.subContentContainer}>
              <div className={`grid-col-6 ${styles.txtContainer}`}>
                <p>
                  After successfully connecting to the database, Firebase Auth is integrated to ensure that the user exists and to display associated data based on the user's uid information.
                </p>
                <p>
                  To handle multiple states of the user's authentication status, the useReducer hook is utilized to manage state transitions based on dispatched actions.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.vidContainer}`}>
                <video playsInline autoPlay muted loop>
                  <source 
                    src={authVid} 
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className={styles.subContentContainer}>
              <div className={`grid-col-6 order-2 ${styles.txtContainer}`}>
                <p>
                  In this project, a Context called ‘AuthContext’ is created to pass authentication data throughout entire app. It has three states to handle in the useReducer, ‘LOGIN’, ‘LOGOUT’ and ‘AUTH_IS_READY’.  The ‘AUTH_IS_READY’ state is responsible for checking whether authentication is ready from Firebase, and the app will be worked when it is successfully ready. 
                </p> 
                <p>
                  The 'LOGIN' state is dispatched with the action of checking the response.user from the login/signup page and updates the user state in the AuthContext. So it allows to display associated data which had connected with uid.
                </p>
                <p>
                  The 'LOGOUT' state is dispatched when the user clicks the logout button, and it updates the user state to null in the AuthContext, which directs the user to the login/signup page.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.codeContainer}`}>
                <CodeSnippet
                  language="javascript"
                  code={codeAuth}
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
                Firebase has proven to be an efficient development platform for handling data communication without the need for a separate server. Through the integration of various functions with Firebase, I had the opportunity to practice and utilize different React hooks, such as Context and Reducer. Handling errors and providing appropriate affordance aligned with user behaviour took more time and details than I initially expected. Additionally, I encountered some code duplication when communicating with the database, which prompted me to find ways to make the code more DRY. Overall, it has been a rewarding project that has allowed me to deepen my understanding and proficiency in React development.
              </p>
              <div className={`grid-col-12 ${styles.ctaContainer}`}>
                <CtaButton 
                  text="Live Site"
                  link="https://daily-protein.seojeongkim.com/"
                />
                <CtaButton 
                  text="View Code"
                  link="https://github.com/jennysujukim/Daily-Protein-v1.0"
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
