import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'
import { WorkSliderContextProvider } from '../../../context/WorkSliderContext'

// styles
import styles from './ReFine.module.scss'

// components
import WorkBanner from '../../../components/WorkBanner'
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import WorkNavigation from '../../../components/WorkNavigation'

export default function ReFine() {

    const { setProjectId } = useContext(ProjectContext)

    useEffect(() => {
        setProjectId("002")
    }, [setProjectId])

    const ReFineSections = [ "Overview", "Serverside Envrionment", "OpenAI API", "Clientside Display", "Takeaways" ]

  return (
    <>
        <WorkBanner />
        <div className={`wrapper ${styles.container}`}>
            <WorkSliderContextProvider>
            <WorkSlider sections={ReFineSections} />
            </WorkSliderContextProvider>

            <div className={styles.content}>
                <div className="glass__white"></div>

                <section
                id="section--0"
                className={`wrapper--inner ${styles.sectionOne}`}>
                    <SubHeading text="Overview"/>
                    <WorkOverview
                        timeline="JUL 2023"
                        role="Design & Develop"
                        tech="JavaScript  Node.js  Express.js  OpenAI" />
                </section>
                <section
                id="section--1"
                className={`wrapper--inner ${styles.sectionTwo}`}>
                    <SubHeading text="Server-side Environment"/>
                </section>
                <section
                id="section--2"
                className={`wrapper--inner ${styles.sectionThree}`}>
                    <SubHeading text="Open AI API"/>
                </section>
                <section
                id="section--3"
                className={`wrapper--inner ${styles.sectionFour}`}>
                    <SubHeading text="Client-side Display"/>
                </section>
                <section
                id="section--4"
                className={`wrapper--inner ${styles.sectionFive}`}>
                    <SubHeading text="Takeaways"/>
                </section>
            </div>
        </div>
        <WorkNavigation />
    </>
  )
}
