import { useState } from 'react'
import cx from 'classnames'
import styles from './Input.module.scss'
import { EmailCheckImage, PWHideImage, PWShowImage } from '../../assets/svgs'

function Input() {
  const [emailValid, setEmailValid] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showPW, setShowPW] = useState(false)

  // email 유효성 검사 함수
  const validateEmail = (input) => {
    const emailRule = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
    return emailRule.test(input)
  }

  // email input DOM의 이벤트 핸들러
  const handleChange = (e) => {
    if (e.target.value === '') {
      setShowAlert(false)
    } else if (validateEmail(e.target.value)) {
      setShowAlert(false)
      setEmailValid(true)
    } else if (!validateEmail(e.target.value)) {
      setEmailValid(false)
    }
  }

  const handleBlur = (e) => {
    // emailValid가 false일 때 포커스 아웃된 경우
    if (e.target.value !== '' && !emailValid && e.currentTarget === e.target) {
      setShowAlert(true)
    }
  }

  const handlePWImgClick = (e) => {
    setShowPW((preState) => {
      return !preState
    })
  }

  // rendering 함수
  return (
    <form className={styles.inputCont}>
      <div className='emailWrapper'>
        <label htmlFor='email-inp'>E-mail</label>
        <input
          type='email'
          maxLength={50}
          name='email'
          id='email-inp'
          placeholder='E-mail'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <EmailCheckImage className={cx(styles.valid, { [styles.fillColor]: emailValid })} />
      </div>
      <p className={cx({ [styles.blind]: !showAlert })}>Invalid e-mail address.</p>

      <div className={styles.pwWrapper}>
        <label htmlFor='password-inp'>Password</label>
        <input type={showPW ? 'text' : 'password'} name='password' id='password-inp' placeholder='Password' />
        <button type='button' onClick={handlePWImgClick}>
          {showPW ? <PWShowImage /> : <PWHideImage />}
        </button>
      </div>
    </form>
  )
}

export default Input
