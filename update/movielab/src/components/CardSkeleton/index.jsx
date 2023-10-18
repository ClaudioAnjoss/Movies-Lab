import styles from './CardSkeleton.module.scss'

export default function CardSkeleton() {
  return (
    <div className={styles['card-skeleton']}>
      <div className={styles['img-skeleton']} />

      <span className={styles['date-skeleton']} />

      <span className={styles['date-skeleton']} />
    </div>
  )
}
