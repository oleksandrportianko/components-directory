import React from 'react'
import MainComponent from '../components/page-components/main-component/MainComponent'
import { DATA_COMPONENTS } from '../data/data'
import './MainPage.scss'

const MainPage = () => {
   return (
      <div className='main-container'>
         {
            DATA_COMPONENTS.map((element) => (
               <MainComponent key={element.id} element={element} />
            ))
         }
      </div>
   )
}

export default MainPage