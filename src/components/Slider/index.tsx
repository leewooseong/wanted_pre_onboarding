import { useState } from 'react'
import cx from 'classnames'
import styles from './Slider.module.scss'

const Slider = () => {
  //   const rangeData = [1, 25, 50, 75, 100]
  //   const [sliderValue, setSliderValue] = useState(1)
  //   const handleChange = (e) => {
  //     setSliderValue(e.target.value)
  //   }
  //   const handleClick = (e, value) => {
  //     setSliderValue(value)
  //   }

  return (
    <form>
      {/* <div className={styles.rangeValue}>
        <p>
          {sliderValue}
          <span>%</span>
        </p>
      </div>
      <input type='range' min='1' max='100' value={sliderValue} onChange={handleChange} />
      <ul className={styles.percentMarkList}>
        {rangeData.map((value, index) => (
          <li key={index}>
            <button type='button' onClick={(e) => handleClick(e, value)}>
              <span>{value}</span>%
            </button>
          </li>
        ))}
      </ul> */}
    </form>
  )
}

export default Slider
