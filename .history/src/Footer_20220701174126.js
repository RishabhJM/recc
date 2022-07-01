import React from 'react'
import "./Footer.css"

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='footer'>
        Copyright ©{year}
        All rights reserved by RJM. 
    </div>
  )
}

export default Footer