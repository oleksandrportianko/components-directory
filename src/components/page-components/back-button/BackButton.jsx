import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowLeft from '../../../assets/arrow-left.svg'
import './BackButton.scss'

const BackButton = () => {
   let navigate = useNavigate();

   const backToMainNavigation = () => {
      navigate('/')
   }

   return (
      <div className='back-button' onClick={backToMainNavigation}>
         <img className='back-arrow' src={arrowLeft} alt="" />
         <span>Back</span>
      </div>
   )
}

export default BackButton