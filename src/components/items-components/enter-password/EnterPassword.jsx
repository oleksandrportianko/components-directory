import React, { useState } from 'react'
import BackButton from '../../page-components/back-button/BackButton'
import userImage from '../../../assets/user-image.svg'
import closeEye from '../../../assets/close-eye-password.svg'
import toggleCircle from '../../../assets/toggle-circle.svg'
import lockInput from '../../../assets/lock-for-password-input.svg'
import './EnterPassword.scss'
import DownloadButton from '../../page-components/download-button/DownloadButton'

const EnterPassword = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [staySignIn, setStaySignIn] = useState(false)

   const handleVisibilityPassword = () => {
      setShowPassword(!showPassword)
   }

   const handleStaySignIn = () => {
      setStaySignIn(!staySignIn)
   }

   return (
      <div className='container-wrapper'>
         <BackButton />
         <div className='enter-password-container'>
            <div className='enter-password-content'>
               <div className='content-block'>
                  <h2 className='content-title'>Enter your password</h2>
                  <div className='content-user-block'>
                     <img className='user-image' src={userImage} alt="" />
                     <div className='user-text-block'>
                        <span className='text-type-account'>Business Account</span>
                        <span className='text-name'>Sarah Bills</span>
                     </div>
                  </div>
                  <div className='content-password-block'>
                     <span className='password-title'>Password</span>
                     <div className='input-block'>
                        <div className='input-wrapper-block'>
                           <img src={lockInput} alt="" />
                           <input className='password-input' type={showPassword ? 'text' : 'password'} />
                        </div>
                        <img onClick={handleVisibilityPassword} src={closeEye} alt="" />
                     </div>
                  </div>
                  <div className='content-continue-block'>
                     <div className='continue-stay-signin'>
                        <div className='stay-signin-toggle' onClick={handleStaySignIn}>
                           <img className={staySignIn ? 'stay-sign-in-active' : ''} src={toggleCircle} alt="" />
                        </div>
                        <span>Stay signed in</span>
                     </div>
                     <button className='continue-button'>Continue</button>
                  </div>
               </div>
               <div className='block-reset-password'>
                  <button className='content-reset-password'>Reset password</button>
               </div>
            </div>
         </div>
         <DownloadButton url='/files/enter-password.zip' />
      </div>
   )
}

export default EnterPassword