import { useEffect, useContext } from "react"
import { ProjectContext } from "../../../context/ProjectContext"

// styles
// import styles from './ItWasAwesome.module.scss'

// components
import WorkBanner from "../../../components/WorkBanner"

export default function ItWasAwesome() {
  const { setProjectId } = useContext(ProjectContext)

  useEffect(() => {
    setProjectId("002")
  }, [setProjectId])

  return (
    <>
      <WorkBanner />
    </>
  )
}
