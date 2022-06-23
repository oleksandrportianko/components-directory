import React, { useState } from 'react'
import BackButton from '../../page-components/back-button/BackButton'
import DownloadButton from '../../page-components/download-button/DownloadButton'
import closeIcon from '../../../assets/filtering-modal-images/close-icon.svg'
import searchLoop from '../../../assets/filtering-modal-images/search-loop.svg'
import filterViewCircle from '../../../assets/filtering-modal-images/filter-view-circle.svg'
import filterViewCircleActive from '../../../assets/filtering-modal-images/filter-view-circle-active.svg'
import filterIncludeToggle from '../../../assets/filtering-modal-images/filter-include-toggle.svg'
import './FilterModal.scss'

const FilterModal = () => {
   const [activeView, setActiveView] = useState(2);
   const [includeActive, setIncludeActive] = useState(false)

   return (
      <div className='container-wrapper'>
         <BackButton />
            <div className='filter-modal-container'>
               <div className='filter-modal-content'>
                  <div className='filter-block-background'></div>
                  <div className='filter-content-info'>
                     <div className='content-title'>
                        <span>Filter</span>
                        <img src={closeIcon} alt="" />
                     </div>
                     <span className='content-label-search'>Search by keyword</span>
                     <div className='content-search-block'>
                        <img src={searchLoop} alt="" />
                        <input placeholder='Search jobs' className='search-input' type="text" />
                     </div>
                     <div className='content-view-block'>
                        <span className='view-title'>View</span>
                        <div className='view-field'>
                           <img src={activeView === 0 ? filterViewCircleActive : filterViewCircle} onClick={() => setActiveView(0)} alt="" />
                           <span className='view-field-text'>All job posts</span>
                        </div>
                        <div className='view-field'>
                           <img src={activeView === 1 ? filterViewCircleActive : filterViewCircle} onClick={() => setActiveView(1)} alt="" />
                           <span className='view-field-text'>Active job posts</span>
                        </div>
                        <div className='view-field'>
                           <img src={activeView === 2 ? filterViewCircleActive : filterViewCircle}  onClick={() => setActiveView(2)} alt="" />
                           <span className='view-field-text'>Archived job posts</span>
                        </div>
                     </div>
                     <div className='content-include'>
                        <span className='include-title'>Include</span>
                        <div className='include-toggle-block'>
                           <div onClick={() => setIncludeActive(!includeActive)} className='include-image'  style={{backgroundColor: `${includeActive ? '#BCBACF' : ''}`}}>
                              <img src={filterIncludeToggle} alt="" />
                           </div>
                           <span>Jobs shared with me</span>
                        </div>
                     </div>
                     <button className='content-button'>
                        Save changes
                     </button>
                  </div>
               </div>
            </div>
         <DownloadButton url='/files/filter-modal.zip' />
      </div>
   )
}

export default FilterModal