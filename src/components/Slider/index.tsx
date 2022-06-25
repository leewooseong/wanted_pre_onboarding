import { ChangeEvent, MouseEvent, useState } from 'react'
import cx from 'classnames'
import styles from './slider.module.scss'

const Slider = () => {
  const rangeData = [1, 25, 50, 75, 100]
  const [sliderValue, setSliderValue] = useState(1)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value))
  }
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // setSliderValue()
  }

  return (
    <form>
      <div className={styles.rangeValueCont}>
        <p>
          {sliderValue}
          <span>%</span>
        </p>
      </div>
      <input type='range' min='1' max='100' value={sliderValue} onChange={handleChange} />
      <ul className={styles.percentMarkList}>
        {rangeData.map((value, index) => (
          <li key={`slider-${index}`}>
            <button type='button' onClick={handleClick}>
              <span>{value}</span>%
            </button>
          </li>
        ))}
      </ul>
    </form>
  )
}

export default Slider
