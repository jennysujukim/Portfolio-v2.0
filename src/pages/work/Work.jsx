import { Outlet } from 'react-router-dom'
import { ProjectContextProvider } from '../../context/ProjectContext'
import { WorkSliderContextProvider } from '../../context/WorkSliderContext'
import PageTransition from '../../hooks/usePageTransition'


export default function Work() {

  const WrappedContent = PageTransition(() => (
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

