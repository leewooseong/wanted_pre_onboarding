import { ChangeEvent, MouseEvent, useState } from 'react'
import cx from 'classnames'
import styles from './slider.module.scss'

const SLIDER_DATA = [1, 25, 50, 75, 100]
const Slider = () => {
  const [rangeValue, setRangeValue] = useState(1)
  const [markStatus, setMarkStatus] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.currentTarget.value))
  }
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setRangeValue(Number(e.currentTarget.dataset.sliderValue))
  }

  const changeToValueToShow = (value: number) => {
    if (value === 1) {
      return '0%'
    }
    return `${value}%`
  }

  const checkMarkStatus = (value: number) => {
    if (rangeValue >= value) {
      return true
    }
    return false
  }

  return (
    <form>
      <div className={styles.rangeValueCont}>
        <p>
          {rangeValue}
          <span>%</span>
        </p>
      </div>
      <div className={styles.sliderCont}>
        <input
          id={styles.sliderInput}
          type='range'
          min='1'
          max='100'
          value={rangeValue}
          onChange={handleChange}
          style={{ '--range-value': `${changeToValueToShow(rangeValue)}` } as React.CSSProperties}
          list='sliderMarkerList'
        />
        <ul className={styles.buttonList}>
          {SLIDER_DATA.map((value, index) => (
            <li className={styles.listItem} key={`mark-${index}`}>
              <button
                type='button'
                data-slider-value={value}
                onClick={handleClick}
                className={cx(styles.markButton, { [styles.active]: checkMarkStatus(value) })}
              >
                {' '}
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.buttonList}>
          {SLIDER_DATA.map((value, index) => (
            <li className={styles.listItem} key={`number-${index}`}>
              <button type='button' data-slider-value={value} onClick={handleClick} className={styles.numberButton}>
                {value}%
              </button>
            </li>
          ))}
        </ul>
      </div>
    </form>
  )
}

export default Slider
