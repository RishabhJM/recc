import React from 'react'
import "./Header.css"
import HomeIcon from '@mui/icons-material/Home';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <HomeIcon />
            </div>
            <div className="header__right">
            <h1>HULU CLONE HERE</h1>
            </div>
            
            
        </div>
    )
}

export default Header
