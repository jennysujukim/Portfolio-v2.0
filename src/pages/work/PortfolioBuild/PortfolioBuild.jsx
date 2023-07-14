import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'
import { WorkSliderContextProvider } from '../../../context/WorkSliderContext'

// styles
import styles from './PortfolioBuild.module.scss'

// components
import WorkBanner from '../../../components/WorkBanner'
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'

export default function PortfolioBuild() {

  const { setProjectId } = useContext(ProjectContext)

  const PortfolioSections = [ "Overview", "Components", "Fetch API", "Connect Firebase", "Auth", "Takeaways" ]

  useEffect(() => {
    setProjectId("004")
  }, [setProjectId])

  return (
    <>
      <WorkBanner />
      <div className={`wrapper ${styles.container}`}>
        <WorkSliderContextProvider>
          <WorkSlider sections={PortfolioSections} />
        </WorkSliderContextProvider>

        <div className={styles.content}>
          <section
            id="section--0"
            className={`wrapper--inner ${styles.sectionOne}`}>
            <SubHeading text="Overview"/>
            <WorkOverview
              timeline="Ongoling"
              role="Design & Develop"
              tech="PHP  JavaScript  React.js  SASS" />
          </section>
        </div>
      </div>
    </>
  )
}
