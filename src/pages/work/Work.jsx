import { Outlet } from 'react-router-dom'
import { ProjectContextProvider } from '../../context/ProjectContext'
import { WorkSliderContextProvider } from '../../context/WorkSliderContext'
import FadeTransition from '../../hooks/useFadeTransition'


export default function Work() {

  const WrappedContent = FadeTransition(() => (
    <Outlet />
  ))

  return (
    <ProjectContextProvider>
      <WorkSliderContextProvider>
          <WrappedContent />
      </WorkSliderContextProvider>
    </ProjectContextProvider>
  )
}

