import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/Button';
import './MainComponent.scss'

const MainComponent = ({ element }) => {
   const { imageUrl, name, linkTo } = element;
   const navigate = useNavigate();

   console.log(linkTo)

   const navigationToComponentPage = () => {
      console.log('in func')
      navigate(`/component/${linkTo}`)  
   }

   return (
      <div className='main-component-container'>
         <img className='component-image' src={imageUrl} alt={name} />
         <div className='component-block'>
            <span>{name}</span>
            <span onClick={navigationToComponentPage}>
               <Button>View component</Button>
            </span>
         </div>
      </div>
   )
}

export default MainComponent