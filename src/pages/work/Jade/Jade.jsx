import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'

// styles
// import styles from './Jade.module.scss'

// components
import WorkBanner from '../../../components/WorkBanner'

export default function Jade() {

  const { setProjectId } = useContext(ProjectContext)

  useEffect(() => {
    setProjectId("006")
  }, [setProjectId])

  return (
    <>
      <WorkBanner />
    </>
  )
}
