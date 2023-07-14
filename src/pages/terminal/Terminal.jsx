// components
import TerminalItem from '../../components/TerminalItem'
import PageTransition from '../../hooks/usePageTransition'

export default function Terminal() {

  const WrappedContent = PageTransition(() => (
    <div>
      <TerminalItem />
    </div>
  ))

  return (
    <WrappedContent />
  )
}
