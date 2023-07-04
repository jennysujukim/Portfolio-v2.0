import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'
import { WorkSliderContextProvider } from '../../../context/WorkSliderContext'

// styles
import styles from './DailyProtein.module.scss'

// components
import WorkBanner from "../../../components/WorkBanner"
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'

export default function DailyProtein() {

  const { setProjectId } = useContext(ProjectContext)

  const DailyProteinSections = [ "Overview", "Components", "Fetch API", "Connect Firebase", "Authentication", "Takeaways" ]

  useEffect(() => {
    setProjectId("001")
  }, [setProjectId])

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
            className="wrapper--inner" >
            <SubHeading text="Overview"/>
          </section>

          <section
            id="section--1"
            className="wrapper--inner" >
            <SubHeading text="Components"/>
          </section>

          <section
            id="section--2"
            className="wrapper--inner" >
            <SubHeading text="Fetch API"/>
          </section>

          <section
            id="section--3"
            className="wrapper--inner" >
            <SubHeading text="Connect Firebase"/>
          </section>

          <section
            id="section--4"
            className="wrapper--inner" >
            <SubHeading text="Authentication"/>
          </section>

          <section
            id="section--5"
            className="wrapper--inner" >
            <SubHeading text="Takeaways"/>
          </section>

        </div>

      </div>
    </>
  )
}
