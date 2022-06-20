import React from 'react'
import { Link } from 'react-router-dom'
import './DownloadButton.scss'

const DownloadButton = ({ url }) => {
   return (
      <div className='downowload-button-block'>
         <span>
            <Link className='downowload-button' to={url} target="_blank" download>Download code</Link>
         </span>
      </div>
   )
}

export default DownloadButton