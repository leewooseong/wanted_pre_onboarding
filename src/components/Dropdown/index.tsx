import { useState, useRef } from 'react'
import cx from 'classnames'
import styles from './dropdown.module.scss'
import { DropdownArrow } from '../../assets/svgs'

const Dropdown = () => {
  //   const menuData = [
  //     'ESPRESSO',
  //     'ESPRESSO DOPPIO',
  //     'RISTRETTO',
  //     'LUNGO',
  //     'CAFE MACCHIATO',
  //     'CAFE CREME',
  //     'CAFE NOISETTE',
  //     'CAFE CORTADO',
  //     'CAPPUCCINO',
  //     'DRY CAPPUCCINO',
  //     'CAFFE AMERICANO',
  //     'CAFE CON HIELO',
  //     'BREVE',
  //     'MOCHA BREVE',
  //     'MOCHA',
  //     'CAFFE AFFOGATO',
  //     'VIENNOIS',
  //     'CON PANNA',
  //     'FLAT WHITE',
  //     'BLACK EYE',
  //     'CAFFE LATTE',
  //     'CAFFE AU LAIT',
  //     'CAFE CON LECHE',
  //   ]
  //   const [menuList, setMenuList] = useState([...menuData])
  //   const [chosenMenu, setChosenMenu] = useState('Choose Menu')
  //   const [showMenuList, setShowMenuList] = useState(false)
  //   const searchRef = useRef(null)

  //   const showDropdownList = (e) => {
  //     if (showMenuList) {
  //       searchRef.current.value = ''
  //       setMenuList(menuData)
  //     }
  //     setShowMenuList(!showMenuList)
  //   }
  //   const chooseMenu = (e) => {
  //     searchRef.current.value = ''
  //     setMenuList(menuData)
  //     setChosenMenu(e.target.innerText)
  //     setShowMenuList(false)
  //   }
  //   const filterMenu = (e) => {
  //     setMenuList(menuData.filter((value) => value.includes(e.target.value.toUpperCase())))
  //   }

  return (
    <div className={styles.dropdownCont}>
      {/* <button className={styles.choosedMenuButton} type='button' onClick={showDropdownList}>
        <p>{chosenMenu}</p>
        <DropdownArrow className={styles.dropdownArrow} />
      </button>
      <ul
        className={cx(styles.menuList, { [styles.blind]: !showMenuList, [styles.showBorderBottom]: menuList.length })}
      >
        <li>
          <input type='text' name='' id='' placeholder='Search Menu' onChange={filterMenu} ref={searchRef} />
        </li>
        {menuList.map((value, index) => (
          <li key={index}>
            <button type='button' onClick={chooseMenu}>
              {value}
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default Dropdown
