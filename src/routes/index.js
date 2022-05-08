// import styles from './Routes.module.scss'
import Toggle from '../components/Toggle/index'
import Tab from '../components/Tab/index'
import Slider from '../components/Slider'
import Input from '../components/Input/index'
import Dropdown from '../components/Dropdown/index'

function App() {
  return (
    <div>
      <h1>1. Toggle.js</h1>
      <Toggle />
      <h1>2. Tab.js</h1>
      <Tab />
      <h1>3. Slider.js</h1>
      <Slider />
      <h1>4. Input.js</h1>
      <Input />
      <h1>5. Dropdown.js</h1>
      <Dropdown />
    </div>
  )
}

export default App
