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
            <img src="https://spng.pngfind.com/pngs/s/108-1082152_hulu-logo-on-black-hd-png-download.png" alt="" />
            
            
        </div>
    )
}

export default Header;
