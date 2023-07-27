import SlideTransition from '../../hooks/useSlideTransition'

import Profile from "./Profile"
import Skills from "./Skills"
import Stories from './Stories'

export default function About() {

  // Wrap content for FM page transition
  const WrappedContent = SlideTransition(() => (
    <main>
      <Profile />
      <Skills />
      <Stories />
    </main> 
  ))

  return ( 
    <WrappedContent />
  )
}
