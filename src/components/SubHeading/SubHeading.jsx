// styles
import styles from './SubHeading.module.scss'

export default function SubHeading({ text }) {
  return (
    <>
      <h3 className={styles.subHeading}>
        {text}
      </h3>
      <div className={styles.border}></div>
    </>
  )
}
