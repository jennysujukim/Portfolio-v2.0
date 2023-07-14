import { useLocation } from 'react-router-dom'
import { ProjectContextProvider } from '../../context/ProjectContext'

// components
import All from './All'
import MyNotes from './MyNotes'
import DailyProtein from './DailyProtein'
import TypaType from './TypaType'
import ReFine from './ReFine'
import PortfolioBuild from './PortfolioBuild'
import PageTransition from '../../hooks/usePageTransition'


export default function Work() {

  let location = useLocation()
  const path = location.pathname

  const WrappedContent = PageTransition(() => (
    <main> 
      {path === "/work/all" ? <All /> : null }
      {path === "/work/daily-protein" ? <DailyProtein /> : null }
      {path === "/work/typa-type" ? <TypaType /> : null } 
      {path === "/work/my-notes" ? <MyNotes /> : null }
      {path === "/work/re-fine" ? <ReFine /> : null }
      {path === "/work/portfolio-build" ? <PortfolioBuild /> : null }
    </main>
  ))

  return (
    <ProjectContextProvider>
          <WrappedContent />
    </ProjectContextProvider>
  )
}

