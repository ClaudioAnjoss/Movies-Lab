import styles from './CardSkeleton.module.scss'

export default function CardSkeleton({ times }) {
  const elements = []

  for (let i = 0; i < times; i++) {
    elements.push(
      <div key={i} className={styles['card-skeleton']}>
        <div className={styles['img-skeleton']} />
        <span className={styles['date-skeleton']} />
        <span className={styles['date-skeleton']} />
      </div>,
    )
  }
  return <>{elements}</>
}
