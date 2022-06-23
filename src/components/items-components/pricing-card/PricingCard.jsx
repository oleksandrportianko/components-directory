import React from 'react'
import BackButton from '../../page-components/back-button/BackButton'
import DownloadButton from '../../page-components/download-button/DownloadButton'
import pricingTypeActive from '../../../assets/pricing-card-images/pricing-type-active.svg'
import pricingTypeNotActive from '../../../assets/pricing-card-images/pricing-type-not-active.svg'
import './PricingCard.scss'

const PricingCard = () => {
   return (
      <div className='container-wrapper'>
         <BackButton />
            <div className='pricing-card-container'>
               <div className='pricing-card-content'>
                  <div className='content-header-block'>
                     <span className='header-title'>Try FREE for 4 weeks</span>
                     <span className='header-description'>We uncover the facts around the clock, all over the globe.</span>
                  </div>
                  <div className='content-select'>
                     <div className='select-item'>
                        <img src={pricingTypeActive} alt="" />
                        <div className='item-information'>
                           <span className='information-period'>Monthly</span>
                           <span className='information-free'>4 weeks for free</span>
                           <span className='information-alert'>Then $3 every month for the first year</span>
                        </div>
                     </div>
                     <div className='select-item'>
                        <img src={pricingTypeNotActive} alt="" />
                        <div className='item-information'>
                           <button className='information-best-value'>Best value</button>
                           <span className='information-period'>Yearly</span>
                           <span className='information-free'>4 weeks for free</span>
                           <span className='information-alert'>Then $30 for the first year</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         <DownloadButton url='/files/filter-modal.zip' />
      </div>
   )
}

export default PricingCard