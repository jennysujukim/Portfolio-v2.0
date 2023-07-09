import { useLocation } from 'react-router-dom'
import { ProjectContextProvider } from '../../context/ProjectContext'

// styles
// import styles from './Work.module.scss'

// components
import All from './All'
import MyNotes from './MyNotes'
import DailyProtein from './DailyProtein'
import ItWasAwesome from './ItWasAwesome'
import Jade from './Jade'
import LinkOn from './LinkOn'
import TypaType from './TypaType/TypaType'


export default function Work() {

  let location = useLocation()
  const path = location.pathname

  return (
    <ProjectContextProvider>
      <main> 
        {path === "/work/all" ? <All /> : null }
        {path === "/work/daily-protein" ? <DailyProtein /> : null }
        {path === "/work/it-was-awesome" ? <ItWasAwesome /> : null }    
        {path === "/work/linkon" ? <LinkOn /> : null } 
        {path === "/work/typa-type" ? <TypaType /> : null } 
        {path === "/work/my-notes" ? <MyNotes /> : null }
        {path === "/work/jade-bookmark-manager" ? <Jade /> : null } 
      </main>
    </ProjectContextProvider>
  )
}
