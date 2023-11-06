import { useSelector, useDispatch } from 'react-redux'
import styles from './NavigationBar.module.scss'
import { setPages, setTotalPages } from 'store/reducers/pagination'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import classNames from 'classnames'

export default function NavigationBar({ times, pageActive }) {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.pages)
  const elements = []
  let limit = 10

  if (pageActive >= limit) {
    limit = pageActive + 3
  }

  for (let i = 1; i <= times; i++) {
    if (i <= limit) {
      elements.push(
        <span
          key={i}
          className={classNames({ [styles.active]: i === pageActive })}
          onClick={() => dispatch(setPages(i))}
          // onFocus={}
        >
          {i}
        </span>,
      )
    }
  }
  return (
    <div className={styles.container_pages}>
      <button
        onClick={() => dispatch(setPages(Math.max(page - 1, 1)))}
        disabled={page === 1}
      >
        <AiOutlineLeft />
      </button>
      <div className={styles.pagination}>{elements}</div>
      <button
        onClick={() => dispatch(setPages(page + 1))}
        disabled={times <= page}
      >
        <AiOutlineRight />
      </button>
    </div>
  )
}
