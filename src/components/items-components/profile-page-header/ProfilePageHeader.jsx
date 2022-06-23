import React from 'react'
import BackButton from '../../page-components/back-button/BackButton'
import DownloadButton from '../../page-components/download-button/DownloadButton'
import profileHeaderUser from '../../../assets/profile-page-header-images/profile-header-user.svg'
import profileHeaderGithub from '../../../assets/profile-page-header-images/profile-header-github.svg'
import profileHeaderLinkedin from '../../../assets/profile-page-header-images/profile-header-linkedin.svg'
import profileHeaderMetamask from '../../../assets/profile-page-header-images/profile-header-metamask.svg'
import profileHeaderEthereum from '../../../assets/profile-page-header-images/profile-header-ethereum.svg'
import profileHeaderDetails from '../../../assets/profile-page-header-images/profile-header-details.svg'
import './ProfilePageHeader.scss'

const ProfilePageHeader = () => {
   return (
      <div className='container-wrapper'>
         <BackButton />
         <div className='profile-header-container'>
            <div className='profile-header-content'>
               <div className='content-user-block'>
                  <img src={profileHeaderUser} alt="" />
                  <div className='user-info-block'>
                     <span className='info-name'>MetaMask</span>
                     <span className='info-username'>@metaMask</span>
                     <span className='info-description'>MetaMask brings Ethereum to your web browser</span>
                  </div>
                  <div className='user-social-link'>
                     <img src={profileHeaderGithub} alt="" />
                     <img src={profileHeaderLinkedin} alt="" />
                     <img src={profileHeaderMetamask} alt="" />
                     <img src={profileHeaderEthereum} alt="" />
                  </div>
               </div>
               <div className='content-functionality-block'>
                  <div className='functionality-load-block'>
                     <div className='load-block-header'>
                        <span>6/8 Organizations</span>
                        <img src={profileHeaderDetails} alt="" />
                     </div>
                     <div className='load-bar'>
                        <div className='bar-active'></div>
                     </div>
                  </div>
                  <div className='functionality-button'>
                     <div className='button-title'><span>4K</span> Followers</div>
                     <button>Follow</button>
                  </div>
               </div>
            </div>
         </div>
         <DownloadButton url='/files/profile-page-header.zip' />
      </div>
   )
}

export default ProfilePageHeader