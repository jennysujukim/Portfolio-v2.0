import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'
import { WorkSliderContextProvider } from '../../../context/WorkSliderContext'

// styles
import styles from './DailyProtein.module.scss'

// components
import WorkBanner from "../../../components/WorkBanner"
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import CodeSnippet from '../../../components/CodeSnippet'
import WorkNavigation from '../../../components/WorkNavigation'

// images and videos
import overviewImg from '../../../assets/images/work/daily-protein/overview.jpg'
import componentVid from '../../../assets/images/work/daily-protein/components-form.mp4'
import componentImg from '../../../assets/images/work/daily-protein/components.jpg'
import authVid from '../../../assets/images/work/daily-protein/auth.mp4'

export default function DailyProtein() {

  const { setProjectId } = useContext(ProjectContext)

  const DailyProteinSections = [ "Overview", "Components", "Fetch API", "Connect Firebase", "Auth", "Takeaways" ]

  useEffect(() => {
    setProjectId("001")
  }, [setProjectId])


  const codeFetchApi = 
` // use to track signal and request to be aborted if necessary
  const controller = new AbortController()

  const fetchData = async () => {
    setIsPending(true)
    try {
      // fetch data
      const response = 
      await fetch(url, { signal: controller.signal })

      // throw error if the response is failed
      if(!response.ok){
          throw new Error(response.statusText)
      }
      // receive parsed json data
      const data = await response.json()

      setIsPending(false)
      setData(data)
      setError(null)

    } catch (error) {
      if(error.name === "AbortError"){
        setError("the fetch was aborted.")
      } else {
        setIsPending(false)
        setError("Could not fetch the data.")
      }
    }
  }
`

const codeFirebase = 
`// Custom Hook to READ data from Firestore
useEffect(() => {

  // refer to 'profiles' collection in Firestore
  let ref = collection(db, 'profiles')

  // check data where 'uid' field matches current user's uid
  const q = query(ref, where("uid", "==", user.uid))

  // Read real-time data
  const unsub = onSnapshot(q, (snapshot) => {
      // retrieve data if snapshot is not empty
      if(!snapshot.empty){
          snapshot.forEach((doc) => {
              setProfile({...doc.data(), id: doc.id})
              setError(null)
          })
      } else {
          setError('Profile does not exist.')
      }
  }, (error) => {
      setError('Could not fetch the profiles data.')
  })

  return () => unsub()

}, [user.uid])

return { profile, error }
`

  const codeAuth = 
`export const AuthContext = createContext()

// return a new state based on the action type
export const authReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { user: action.payload, authIsReady: true }
    default:
      return state
  }
}

// listen state changes and dispatch function
export const AuthContextProvider = ({ children }) => {
  // useReducer(reducer function , initial value)
  const [ state, dispatch ] = useReducer(authReducer, {
    user: null,
    authIsReady: false
  })
}
`


  return (
    <>
      <WorkBanner /> 
      <div className={`wrapper ${styles.container}`}>
        <WorkSliderContextProvider>
          <WorkSlider sections={DailyProteinSections} />
        </WorkSliderContextProvider>

        <div className={styles.content}>
          <div className="glass__white"></div>

          <section
            id="section--0"
            className={`wrapper--inner ${styles.sectionOne}`} >
            <SubHeading text="Overview"/>
            <WorkOverview
              timeline="MAY - JUN 2023"
              role="Design & Develop"
              tech="REACT.JS SASS FIREBASE" />
            <div className={styles.txtContainer}>
              <p>
                Daily Protein is a user-friendly Single Page Application that helps users in monitoring their daily protein intake. With Daily Protein, users can effortlessly calculate their required protein amount for each day and set targets to track their progress by logging meals on the app.
              </p>
              <p>
                To get started, users simply need to create an account and input their profile information. Then they can search foods to get detailed nutrition info and add them to their daily protein tracker. The app automatically sum up the total protein amount, providing users with up to date progress towards their goal.
              </p>
            </div>
            <div className={styles.imgContainer}>
              <img src={overviewImg} alt="Shots of Daily Protein App" />
            </div>
          </section>

          <section
            id="section--1"
            className={`wrapper--inner ${styles.sectionTwo}`} >
            <SubHeading text="Components"/>
            <div className={styles.contentContainerOne}>
              <div className={styles.txtContainer}>
                <h4>Components and Routes</h4>
                <p>
                  To initiate the project, the view pages are established and components are created separately for each page. This approach ensures that the app functions as a single-page application, providing seamless user experience and enhancing reusability during development process.
                </p>
                <p>
                  Given that the app requires multiple pages, React Router Dom is utilized to enable dynamic routing within the app. This allows the app to fetch content based on the URL without the need for page refreshing.
                </p>
              </div>
              <div className={styles.imgContainer}>
                <img src={componentImg} alt="Components of Daily Protein App" />
              </div>
            </div>
            <div className={styles.contentContainerTwo}>
              <div className={styles.txtContainer}>
                <h4>Controlled Components</h4>
                <p>
                  Forms are utilized to handle user input values. Instead of managing the component values directly, React State is used to control their value. This approach makes it easier to track, validate, and modify the input as needed, which is also beneficial for future reference purposes when integrating with Firebase.
                </p>
              </div>
              <div className={styles.vidContainer}>
                <video playsInline autoPlay muted loop>
                  <source src={componentVid} type="video/mp4" />
                </video>
              </div>
            </div>
          </section>

          <section
            id="section--2"
            className={`wrapper--inner ${styles.sectionThree}`} >
            <SubHeading text="Fetch API"/>
            <div className={styles.contentContainer}>
              <div className={styles.txtContainer}>
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
              <div className={styles.codeContainer}>
                <CodeSnippet language="javascript" code={codeFetchApi}/>
              </div>
            </div>
          </section>

          <section
            id="section--3"
            className={`wrapper--inner ${styles.sectionFour}`} >
            <SubHeading text="Connect Firebase"/>
            <div className={styles.contentContainer}>

              <div className={styles.txtContainer}>
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
              <div className={styles.codeContainer}>
                <CodeSnippet language="javascript" code={codeFirebase}/>
              </div>
            </div>
          </section>

          <section
            id="section--4"
            className={`wrapper--inner ${styles.sectionFive}`} >
            <SubHeading text="Auth"/>
            <div className={styles.contentContainerOne}>
              <div className={styles.txtContainer}>
                <p>
                  After successfully connecting to the database, Firebase Auth is integrated to ensure that the user exists and to display associated data based on the user's uid information.
                </p>
                <p>
                  To handle multiple states of the user's authentication status, the useReducer hook is utilized to manage state transitions based on dispatched actions.
                </p>
              </div>
              <div className={styles.vidContainer}>
                <video playsInline autoPlay muted loop>
                  <source src={authVid} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className={styles.contentContainerTwo}>
              <div className={styles.txtContainer}>
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
              <div className={styles.codeContainer}>
                <CodeSnippet language="javascript" code={codeAuth}/>
              </div>
            </div>
          </section>

          <section
            id="section--5"
            className={`wrapper--inner ${styles.sectionSix}`} >
            <SubHeading text="Takeaways"/>
            <div className={styles.contentContainer}>
              <p>
                Firebase has proven to be an efficient development platform for handling data communication without the need for a separate server. Through the integration of various functions with Firebase, I had the opportunity to practice and utilize different React hooks, such as Context and Reducer.  Handling errors and providing appropriate affordance aligned 
              </p>
              <p>
                with user behaviour took more time and details than I initially expected.  Additionally, I encountered some code duplication when communicating with the database, which prompted me to find ways to make the code more DRY.  Overall, it has been a rewarding project that has allowed me to deepen my understanding and proficiency in React development.
              </p>
            </div>
          </section>
        </div>
      </div>
      <WorkNavigation />
    </>
  )
}
