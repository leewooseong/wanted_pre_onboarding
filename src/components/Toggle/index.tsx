import { MouseEvent, useState } from 'react'
import cx from 'classnames'
import styles from './toggle.module.scss'

const ARRAY_LIST = ['기본', '상세']

const Toggle = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveIndex(Number(e.currentTarget.dataset.index))
  }

  return (
    <div className={styles.toggleCont}>
      <div className={styles.activeItem} style={{ '--toggle-index': activeIndex } as React.CSSProperties} />
      {ARRAY_LIST.map((value, index) => (
        <button
          type='button'
          key={`toggle-${index}`}
          className={cx(styles.toggleButton, { [styles.active]: activeIndex === index })}
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
