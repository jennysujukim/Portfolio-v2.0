// styles
import styles from './Heading.module.scss'

export default function Heading({ text }) {
  return (
      <h2 className={styles.heading}>{text}</h2>
  )
}
 