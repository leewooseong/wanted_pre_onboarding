import { MouseEvent, useState } from 'react'
import cx from 'classnames'
import styles from './tab.module.scss'

const ARRAY_LIST = ['감자', '고구마', '카레라이스']

const Tab = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveIndex(Number(e.currentTarget.dataset.index))
  }

  return (
    <nav className={styles.tabCont}>
      <div className={styles.activeItem} style={{ '--tab-index': activeIndex } as React.CSSProperties} />
      {ARRAY_LIST.map((value, index) => (
        <button
          type='button'
          key={`tab-${index}`}
          className={cx(styles.tabButton, { [styles.active]: activeIndex === index })}
          data-index={index}
          onClick={handleClick}
        >
          {value}
        </button>
      ))}
    </nav>
  )
}

export default Tab
