import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'
import { WorkSliderContextProvider } from '../../../context/WorkSliderContext'

// styles
import styles from './MyNotes.module.scss'

// components
import WorkBanner from '../../../components/WorkBanner'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import WorkSlider from '../../../components/WorkSlider'
import WorkNavigation from '../../../components/WorkNavigation'
import overviewImg from '../../../assets/images/work/my-notes/overview.jpg'
import dataImg from '../../../assets/images/work/my-notes/database.jpg'
import CodeSnippet from '../../../components/CodeSnippet'

export default function MyNotes() {

  // ---- Fetch MyNotes Data ---- //
  const { setProjectId } = useContext(ProjectContext)
 
  useEffect(() => {
    setProjectId("005")
  }, [setProjectId])

  // ---- Set Sections Title for Slider ---- //
  const MyNotesSections = [ "Overview", "Database Operations", "Functionalities", "Takeaways" ]

  const codeSearch =
`const searchForm = document.querySelector("#search-form");

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchInput = searchForm.querySelector('input');
    const searchQueries = searchInput.value.toLowerCase().trim();
    const noteTitles = document.querySelectorAll(".note-title");
    const error = document.querySelector("#error-msg");

    // store NodeLists as Array
    const articles = Array.from(document.querySelectorAll("article"));
    const searchQuery = Array.from(searchQueries.split(' '));
    const titleValues = Array.from(noteTitles).map((title) => (title.innerText.toLowerCase().split(' ')));

    let foundMatch = false;

    // Find and display articles that match keywords
    articles.forEach((article, index) => {
      if (titleValues[index].some((word) => searchQuery.includes(word))) {
        article.style.display = "block";
        foundMatch = true;
      } else {
        article.style.display = "none";
      }
    });

    // Display error block if no match is found
    if (!foundMatch) {
      error.style.display = "block";
    } else {
      error.style.display = "none";
    };

    searchInput.value = "";

});
`

  const codeSecurity = 
`// A method of CREATE in Note Class
public function create() {
  $sql = "INSERT INTO notes (name, body, course_number, user_id) VALUES ( ?, ?, ?, ? )";

  $stmt = self::$db->prepare($sql);
  $stmt->bind_param('ssii', $this->name, $this->body, $this->course_number, $this->user_id);
  $stmt->execute();

  $result = $stmt->get_result();

  // return results
  return $result;
}

// Clientside validation
$(document).ready(function() {

  $("#sign-up").validate({
    errorClass: 'error-text', 
    rules: {
      email: {
        required: true,
        email: true,
        maxlength: 320
      },
      // ...adding more rules //
    },
    messages: {
      password_confirm: 'Passwords must match.',
    },
    submitHandler: function(form){
      form.submit();
    }
});
`

  return (
    <>
      <WorkBanner />
      <div className={`wrapper ${styles.container}`}>
        <WorkSliderContextProvider>
          <WorkSlider sections={MyNotesSections} />
        </WorkSliderContextProvider>
        <div className={styles.content}>
          <section 
            id="section--0"
            className={`wrapper--inner ${styles.sectionOne}`}>
            <SubHeading text="Overview" />
            <WorkOverview
              timeline="MAR - MAY 2023"
              role="Design & Develop"
              tech="PHP MySQL Bootstrap" />
            <div className={styles.txtContainer}>
              <p> My Notes is an academic project that provides users with a personal dashboard for managing their notes. Users can sign up and log in to create their own accounts on the website. They can easily create, edit, and delete notes once logging in. I've added up search functionality to find specific notes by their titles.</p>
              <p> PHP and MySQL are implemented for CRUD database operations. Bootstrap is employed to style and maintain consistent design. Classes are utilized to manage and manipulate data within the project files. Additionally, jQuery Validation is implemented for client-side validation.</p>
            </div>
            <div className={styles.imgContainer}>
              <img src={overviewImg} alt="Shots of Daily Protein App" />
            </div>
          </section>
          <section 
            id="section--1"
            className={`wrapper--inner ${styles.sectionTwo}`}>
            <SubHeading text="Database Operations" />
            <div className={styles.contentContainer}>
              <div className={styles.txtContainer}>
                <p>
                  In this project, two tables are created in the database. The first table is responsible for managing the NOTE data which has columns of id, title, body, and course_number. The id is used as the primary key to identify each row in the dataset. The second table is used for managing USER data and contains columns for id, email, and password. The id column from the USER data acts as a foreign key in NOTE table, linking the two tables together to manipulate the correct dataset.
                </p>
                <p>
                  In PHP, Classes are created for each table to define the properties and functions required to retrieve and manipulate the data. These classes enable the implementation of CRUD operations. Also, session is applied to maintain user state and store information across multiple pages.
                </p>
              </div>
              <div className={styles.imgContainer}>
                <img src={dataImg} alt="Database structure of My Notes" />
              </div>
            </div>
          </section>
          <section 
            id="section--2"
            className={`wrapper--inner ${styles.sectionThree}`}>
            <SubHeading text="Functionalities" />
            <div className={styles.contentContainerOne}>
              <div className={styles.txtContainer}>
                <h4>Search by Title Keywords</h4>
                <p>
                  Users can search for specific notes by keywords in the note titles, making it easier to find the information. The note titles and the search input words are split and stored as arrays. These arrays are then compared using the 'some' and 'includes' methods to determine if there are any matching values. The user interface for labels is designed using Bootstrap, providing a visually appealing and responsive design. Inside each tab, only the corrected value of the course_number will be displayed in the list.
                </p>
              </div>
              <div className={styles.codeContainer}>
                <CodeSnippet language="javascript" code={codeSearch}/>
              </div>
            </div>
            <div className={styles.contentContainerTwo}>
              <div className={styles.txtContainer}>
                <h4>Validation and Security</h4>
                <p>
                  The user password is hashed using bcrypt algorithm with the built-in PHP function password_hash. This ensures that passwords are securely stored in the database rather than directly add on as a string. To prevent SQL injections and improve parsing efficiency, mysqli_stmt_bind_param function is used to bind variables as parameters to prepared statements. For client-side validation, jQuery Validation is implemented on sign-up / sign-in forms. This ensures that user inputs are checked before they are submitted to the server, providing a better user experience and helping to prevent any potential issues with malicious input.
                </p>
              </div>
              <div className={styles.codeContainer}>
                <CodeSnippet language="javascript" code={codeSecurity}/>
              </div>
            </div>

          </section>
          <section
            id="section--3"
            className={`wrapper--inner ${styles.sectionFour}`}>
            <SubHeading text="Takeaways"/>
            <div className={styles.contentContainer}>
              <p>
                This project was an academic project created for the 'Web Scripting 2' course. It provided excellent practice for understanding PHP's Object-Oriented Programming (OOP) strategy, as well as my first experience with database communication. Implementing CRUD operations intrigued my interest in studying different types of databases beyond relational databases, such as NoSQL and Cloud databases. Additionally, by adding additional search functionality, I was able to practice JavaScript methods.
              </p>
            </div>
          </section>
        </div>
      </div>
      <WorkNavigation />
    </>
  )
}
 