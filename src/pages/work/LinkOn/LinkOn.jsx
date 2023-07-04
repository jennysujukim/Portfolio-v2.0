import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'

// styles
// import styles from './LinkOn.module.scss'


// components
import WorkBanner from '../../../components/WorkBanner'


export default function LinkOn() {

    const { setProjectId } = useContext(ProjectContext)

    useEffect(() => {
      setProjectId("003")
    }, [setProjectId])


    return (
        <>
            <WorkBanner />
        </>
    )
}
