import React, { useState } from 'react'
import BackButton from '../../page-components/back-button/BackButton'
import DownloadButton from '../../page-components/download-button/DownloadButton'
import privicyPlus from '../../../assets/cookie-preferences-modal-images/privicy-plus.svg'
import './CookiePreferencesModal.scss'

const CookiePreferencesModal = () => {
   const [functionalCookieToggle, setFunctionalCookieToggle] = useState(false);
   const [performanceCookieToggle, setPerformanceCookieToggle] = useState(true);
   const [personalizedCookieToggle, setPersonalizedCookieToggle] = useState(false);

   const handleFunctionalCookie = () => {
      setFunctionalCookieToggle(!functionalCookieToggle);
   }

   const handlePerformanceCookie = () => {
      setPerformanceCookieToggle(!performanceCookieToggle);
   }

   const handlePersonalizedCookie = () => {
      setPersonalizedCookieToggle(!personalizedCookieToggle);
   }

   return (
      <div className='container-wrapper'>
         <BackButton />
         <div className='cookie-preferences-container'>
            <div className='cookie-preferences-content'>
               <div className='content-background-block'></div>
               <div className='content-block-info'>
                  <div className='info-allow-block'>
                     <span>About Your Privacy</span>
                     <p>
                        We process your data to deliver content or advertisements and measure the delivery of such 
                        content or advertisements to extract insights about our website. We share this information 
                        with our partners on the basis of consent and legitimate interest. 
                        You may exercise your right to consent or object to a legitimate interest, 
                        based on a specific purpose below or at a partner level in the link under each purpose. 
                        These choices will be signaled to our vendors.
                     </p>
                     <button>Allow All</button>
                  </div>
                  <div className='info-preferences-block'>
                     <span className='preferences-title'>Manage Consent Preferences</span>
                     <div className='preference-items'>
                        <div className='item-stricktly'>
                           <img src={privicyPlus} alt="" />
                           <span className='item-settings'>Strictly Necessary Cookies</span>
                           <span className='item-value'>Always Active</span>
                        </div>
                        <div className='item-functional'>
                           <img src={privicyPlus} alt="" />
                           <span className='item-settings-big'>Functional Cookies</span>
                           <div onClick={handleFunctionalCookie} className={ functionalCookieToggle ? 'item-toggle-active' : 'item-toggle'}>
                              <span className='toggle-circle'></span>
                           </div>
                        </div>
                        <div className='item-performance'>
                           <img src={privicyPlus} alt="" />
                           <span className='item-settings-big'>Performance Cookies</span>
                           <div onClick={handlePerformanceCookie} className={ performanceCookieToggle ? 'item-toggle-active' : 'item-toggle'}>
                              <span className='toggle-circle'></span>
                           </div>
                        </div>
                        <div className='item-personalized'>
                           <img src={privicyPlus} alt="" />
                           <span className='item-settings-big'>Personalised ads and content measurement, audience insights and product development</span>
                           <div onClick={handlePersonalizedCookie} className={ personalizedCookieToggle ? 'item-toggle-active' : 'item-toggle'}>
                              <span className='toggle-circle'></span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='buttons-block'>
                     <button className='button-reject'>Reject all</button>
                     <button className='button-submit'>Submit My Choice</button>
                  </div>
               </div>
            </div>
         </div>
         <DownloadButton url='/files/cookie-preferences-modal.zip' />
      </div>
   )
}

export default CookiePreferencesModal