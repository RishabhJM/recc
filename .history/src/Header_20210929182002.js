import React from 'react'
import "./Header.css"
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <HomeIcon />
            <FlashOnIcon />
            <LiveTvIcon />
            <VideoLibraryIcon />
            <SearchIcon />
            <PersonOutlineIcon />


            </div>
            <img src="https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png" alt="" />
            
            
        </div>
    )
}

export default Header;
