import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'
import { codePropDrilling, codeReactRouter, codePagespeed } from '../CodeData'

// styles
import styles from '../Work.module.scss'

// components
import WorkBanner from '../../../components/WorkBanner'
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import WorkNavigation from '../../../components/WorkNavigation'
import overviewImg from '../../../assets/images/work/portfolio-build/overview.jpg'
import initialImg from '../../../assets/images/work/portfolio-build/initial-version.jpg'
import CodeSnippet from '../../../components/CodeSnippet'
import CtaButton from '../../../components/CtaButton'

export default function PortfolioBuild() {

  // Match project data
  const { setProjectId } = useContext(ProjectContext)

  useEffect(() => {
    setProjectId("006")
  }, [setProjectId])

  // Set slider's labels
  const PortfolioSections = [ "Overview", "Initial Version", "Problems & Solutions", "Challenges", "Next Plan" ]

  return (
    <>
      <WorkBanner />
      <div className={`wrapper ${styles.container}`}>
        <WorkSlider sections={PortfolioSections} />
        <div className={styles.content}> 
          <section
            id="section--0"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Overview"/>
            <WorkOverview
              timeline="Ongoing"
              role="Design & Develop"
              tech="PHP  JavaScript  React.js  SASS"
            />
            <div className={styles.overviewTxtContainer}>
              <p className="grid-col-6">
                I have improved my portfolio by incorporating different tech stacks, and it has been incredibly helpful in practicing and applying coding knowledges to substantial projects. So I have documented my development learning journey based on agile approach.
              </p>
              <p className="grid-col-6">
                The portfolio has been developed in two different versions. Not only has the design changed, but the tech stacks have also been transitioned from PHP to React.js for various reasons. If you click the "Live Site" button above, you can check out the live demo of the initial version of the portfolio.
              </p>
            </div>
            <div className={styles.imgContainer}>
              <img 
                src={overviewImg} 
                alt="Overview of Portfolio Build"
              />
            </div>
          </section>
          <section
            id="section--1"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Initial Version"/>
            <div className={styles.contentContainer}>
              <div className={`grid-col-6 order-2 ${styles.txtContainer}`}>
                <p>
                  For the first iteration of the site, I utilized PHP, JavaScript, and CSS. By implementing PHP's class and object, I was able to organize the code by encapsulating data handling, and create reusable partials to iterate the data within HTML using PHP as required. This approach not only reduces the script size but also eliminates repetitive lines of code.
                </p>
                <p>
                  To enhance the site's dynamic animation and interactivity for users, I incorporated various JavaScript libraries by using a CDN. GSAP was used for creating diverse scroll trigger animations. LottieFiles was also utilized to load 3D graphics efficiently in a JSON format with low file sizes.
                </p>
                <p>
                  For styling, I made partial CSS files that are loaded in associated with the respective page URLs which helped to reduce the script size.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.imgContainer}`}>
                <img 
                  src={initialImg} 
                  alt="Initial version of portfolio"
                />
              </div>
            </div>
          </section>
          <section
            id="section--2"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Problems & Solutions"/>
            <div className={styles.contentContainer}>
              <div className={`grid-col-6 ${styles.textContainer}`}>
                <h4>Problems</h4>
                <ul>
                  <li>
                    <p>&gt; Difficult to incorporate and compile JavaScript libraries seamlessly into a workflow. </p>
                  </li>
                  <li>
                    <p>&gt; Folder structure becomes complex as the project grows.</p>
                  </li>
                  <li>
                    <p>&gt; A personal need to practice JavaScript libraries/frameworks for building static websites instead of relying on server-side languages.</p>
                  </li>
                  <li>
                    <p>&gt; Duplication of code between CSS partials.</p>
                  </li>
                  <li>
                    <p>&gt; Challenging to manage class naming conventions as the project expands.</p>
                  </li>
                  <li>
                    <p>&gt; Writing long lines of code to accommodate responsive design with @media queries.</p>
                  </li>
                </ul>
              </div>
              <div className={`grid-col-6 ${styles.textContainer}`}>
                <h4>Solutions</h4>
                <div>
                  <p>
                    I researched various libraries and frameworks to meet my requirements, and I discovered that React.js is one of the most popular modern JavaScript libraries, which is also accessible for junior frontend developers.
                  </p>
                  <p>
                    I chose to rebuild portfolio with React.js because it enables the design of single-page applications and utilizes routes to display only the associated components. This feature is perfect for maintaining repetitive elements and file structures. Additionally, React.js allows easy integration of various libraries, efficient dependency management, and straightforward compilation processes.
                  </p>
                  <p>
                    To further enhance my development experience, I decided to use SASS instead of CSS. SASS provides a wide range of functions, such as mixins and variables, which significantly reduce the number of code lines required.
                  </p>
                </div>
              </div>
            </div>

          </section>
          <section
            id="section--3"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Challenges"/>
            <div className={styles.subContentContainer}>
              <div className={`grid-col-6 ${styles.txtContainer}`}>
                <h4>Issue with React Router</h4>
                <p>
                  React router allows client side rendering which causes the issue when users refresh the page or manually typed url. Since my portfolio app is hosted on an Apache webserver, I added .htaccess file to route all requests to the index.html file. 
                </p>
              </div>
              <div className={`grid-col-6 ${styles.codeContainer}`}>
                <CodeSnippet 
                  language="javascript"
                  code={codeReactRouter}
                />
              </div>
            </div>
            <div className={styles.subContentContainer}>
              <div className={`grid-col-6 order-2 ${styles.txtContainer}`}>
                <h4>Prop Drilling</h4>
                <p>
                  Since I created reusable components and state, there was challenges to pass data down to nested children and different view pages such as handling project data. So I use useContext hook to pass data and state without having to pass props down manually through nested component and use context globally.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.codeContainer}`}>
                <CodeSnippet 
                  language="javascript"
                  code={codePropDrilling}
                />
              </div>
            </div>
            <div className={styles.subContentContainer}>
              <div className={`grid-col-6 ${styles.txtContainer}`}>
                <h4>Lower PageSpeed</h4>
                <p>
                  During the initial rendering of my portfolio,  the page speed appears lower compared to the first version. This might be due to the client-side rendering, where the JavaScript bundle needs to be downloaded and executed before the initial content is rendered. To address this, I applied code splitting using React.lazy and suspense . Additionally, I reduced scripts and implemented image lazy loading with IntersectionObserver. While these efforts have improved performance, they have not fully optimized performance yet. As a result, I am now planning for the next steps to further enhance my portfolio.
                </p>
              </div>
              <div className={`grid-col-6 ${styles.codeContainer}`}>
                <CodeSnippet 
                  language="javascript" 
                  code={codePagespeed}
                />
              </div>
            </div>
          </section>
          <section
            id="section--4"
            className={`wrapper--inner ${styles.section}`}
          >
            <SubHeading text="Next Plan"/>
            <div className={styles.contentContainer}>
              <p className="grid-col-12">
                For the next iteration, I am considering applying Next.js, a framework for building server-rendered React applications. It allows the pre-rendering of components on the server before sending them to the client. Additionally, it automatically performs code splitting, leading to faster initial page loads and optimized performance. Overall, the process of building my portfolio has provided me with valuable practice in applying the tech stacks that I am interested in.
              </p>
            </div>
            <div className={`grid-col-12 ${styles.ctaContainer}`}>
              <CtaButton 
              text="Ver1. Live Site"
              link="https://portfolio-v1.seojeongkim.com/"
              />
              <CtaButton 
              text="View Code"
              link="https://github.com/jennysujukim/Portfolio-v1.0"
              />
            </div>
          </section>
        </div>
      </div>
      <WorkNavigation />
    </>
  )
}
