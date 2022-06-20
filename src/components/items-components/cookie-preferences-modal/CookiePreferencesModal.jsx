import React from 'react'
import BackButton from '../../page-components/back-button/BackButton'
import DownloadButton from '../../page-components/download-button/DownloadButton'
import './CookiePreferencesModal.scss'

const CookiePreferencesModal = () => {
   return (
      <div className='container-wrapper'>
         <BackButton />
         <div className='cookie-preferences-container'>
            <div className='cookie-preferences-content'>
               <div className='content-background-block'></div>
               <div className='content-block-info'>
                  
               </div>
            </div>
         </div>
         <DownloadButton url='/files/' />
      </div>
   )
}

export default CookiePreferencesModal