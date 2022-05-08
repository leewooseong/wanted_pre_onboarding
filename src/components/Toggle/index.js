import { useState } from 'react'
import cx from 'classnames'
import styles from './Toggle.module.scss'

const ARRAY_LIST = ['기본', '상세']

function Toggle() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (e) => {
    console.log(e.currentTarget.dataset.index)
    setActiveIndex(e.currentTarget.dataset.index)
    console.log('activeIndex', activeIndex)
  }
  // rendering 함수
  return (
    <div className={styles.toggleCont}>
      <div className={styles.activeItem} style={{ transform: `translateX(${activeIndex * 200}px)` }} />
      {ARRAY_LIST.map((value, index) => (
        <button
          button
          type='button'
          key={`tab${index}`}
          className={cx(styles.togglebutton, { [styles.active]: activeIndex == index })}
          data-index={index}
          onClick={handleClick}
        >
          {value}
        </button>
      ))}
    </div>
  )
}

export default Toggle
