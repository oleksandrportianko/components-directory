import React, { useState } from 'react'
import DownloadButton from '../../page-components/download-button/DownloadButton'
import BackButton from '../../page-components/back-button/BackButton'
import dropdownArrowTop from '../../../assets/dropdown-arrow-top.svg'
import searchLoop from '../../../assets/search-loop.svg'
import './DropdownAndSearch.scss'

const DropdownAndSearch = () => {
   const [dropdownOpen, setDropdownOpen] = useState(false)
   const [currendDropdownItem, setCurrentDropdownItem] = useState('Templates')

   const handleDropdownOpen = () => {
      setDropdownOpen(!dropdownOpen)
   }

   const handleCurrentDropdownItem = (e) => {
      setCurrentDropdownItem(e.target.outerText)
   }

   return (
      <div className='container-wrapper'>
         <BackButton />
         <div className='dropdown-and-search-container'>
            <div className='dropdown-and-search-content'>
               <div className='background-block'></div>
               <div className='content-data-block'>
                  <div className='dropdown-search-block'>
                     <button onClick={handleDropdownOpen} className='dropdown-button'>
                        <span>{currendDropdownItem}</span>
                        <img style={{transform: `${ dropdownOpen ? 'rotate(0deg)' : 'rotate(180deg)' }`}} src={dropdownArrowTop} alt="" />
                     </button>
                     <img src={searchLoop} alt="" />
                     <input type="text" placeholder='Search apps, plugins and more' />
                  </div>
                  { dropdownOpen && 
                     <div className='dropdown-content'>
                        <span onClick={handleCurrentDropdownItem} className={currendDropdownItem === 'All Products' ? 'active' : ''}>All Products</span>
                        <span onClick={handleCurrentDropdownItem} className={currendDropdownItem === 'Photos' ? 'active' : ''}>Photos</span>
                        <span onClick={handleCurrentDropdownItem} className={currendDropdownItem === 'Graphics' ? 'active' : ''}>Graphics</span>
                        <span onClick={handleCurrentDropdownItem} className={currendDropdownItem === 'Templates' ? 'active' : ''}>Templates</span>
                        <span onClick={handleCurrentDropdownItem} className={currendDropdownItem === 'Plugins' ? 'active' : ''}>Plugins</span>
                     </div>
                  }
               </div>
            </div>
         </div>
         <DownloadButton url='/files/dropdown-and-search.zip' />
      </div>
   )
}

export default DropdownAndSearch