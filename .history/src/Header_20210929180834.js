import React from 'react'
import "./Header.css"
import HomeIcon from '@mui/icons-material/Home';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <HomeIcon />
            </div>
            <img src="https://www.nicepng.com/png/detail/242-2424140_hulu-png-logo-hulu-logo-white-png.png" alt="" />
            
            
        </div>
    )
}

export default Header
