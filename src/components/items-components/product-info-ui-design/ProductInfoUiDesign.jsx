import React from 'react'
import BackButton from '../../page-components/back-button/BackButton'
import DownloadButton from '../../page-components/download-button/DownloadButton'
import razerHeadphones from '../../../assets/product-info-ui-design-images/razer-headphones.svg'
import greenIconCircle from '../../../assets/product-info-ui-design-images/green-icon-circle.svg'
import comparisonIcon from '../../../assets/product-info-ui-design-images/comparison-icon.svg'
import whiteHeartIcon from '../../../assets/product-info-ui-design-images/white-heart-icon.svg'
import './ProductInfoUiDesign.scss'

const ProductInfoUiDesign = () => {
   return (
      <div className='container-wrapper'>
         <BackButton />
            <div className='product-ui-container'>
               <div className='product-ui-content'>
                  <div className='content-image-block'>
                     <img src={razerHeadphones} alt="" />
                  </div>
                  <div className='content-text-block'>
                     <button className='text-free-shopping'>Free shipping</button>
                     <span className='text-title'>Razer Kraken Kitty Edt Gaming Headset Quartz</span>
                     <div className='text-price-block'>
                        <span className='price-discount'>1 599</span>
                        <span className='price-current'>799</span>
                        <span className='price-alert'>The offer is valid until April 3 or as long as stock lasts!</span>
                     </div>
                     <button className='content-button-add'>Add to card</button>
                     <div className='content-additional-information'>
                        <img src={greenIconCircle} alt="" />
                        <span>50+ pcs. in stock.</span>
                     </div>
                     <div className='content-buttons-block'>
                        <button className='buttons-add-to-cart'>
                           <img src={comparisonIcon} alt="" />
                           Add to cart
                        </button>
                        <button className='buttons-add-to-wishllist'>
                           <img src={whiteHeartIcon} alt="" />
                           Add to wishlist
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         <DownloadButton url='/files/product-info-ui-design.zip' />
      </div>
   )
}

export default ProductInfoUiDesign