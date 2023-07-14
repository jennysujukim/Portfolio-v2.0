import PageTransition from '../../hooks/usePageTransition'

import Profile from "./Profile"
import Skills from "./Skills"
import Stories from './Stories'

export default function About() {

  const WrappedContent = PageTransition(() => (
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
