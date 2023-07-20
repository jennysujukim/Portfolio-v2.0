// components
import TerminalItem from '../../components/TerminalItem'
import SlideTransition from '../../hooks/useSlideTransition'

export default function Terminal() {

  const WrappedContent = SlideTransition(() => (
    <div>
      <TerminalItem />
    </div>
  ))

  return (
    <WrappedContent />
  )
}
