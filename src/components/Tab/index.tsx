import { useState } from 'react'
import cx from 'classnames'
import styles from './Tab.module.scss'

const ARRAY_LIST = ['감자', '고구마', '카레라이스']

const Tab = () => {
  //   const [activeIndex, setActiveIndex] = useState(0)

  //   const handleClick = (e) => {
  //     console.log(e.currentTarget.dataset.index)
  //     setActiveIndex(e.currentTarget.dataset.index)
  //     console.log('activeIndex', activeIndex)
  //   }
  // rendering 함수
  return (
    <nav className={styles.tabCont}>
      {/* <div className={styles.activeItem} style={{ transform: `translateX(${activeIndex * 140}px)` }} />
      {ARRAY_LIST.map((value, index) => (
        <button
          button
          type='button'
          key={`tab${index}`}
          className={cx(styles.tabButton, { [styles.active]: activeIndex == index })}
          data-index={index}
          onClick={handleClick}
        >
          {value}
        </button>
      ))} */}
    </nav>
  )
}

export default Tab
