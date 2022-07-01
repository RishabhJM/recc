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
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.vhv.rs%2Fdpng%2Fd%2F614-6143056_hulu-white-logo-png-transparent-png.png&imgrefurl=https%3A%2F%2Fwww.vhv.rs%2Fviewpic%2FTTJiiRw_hulu-white-logo-png-transparent-png%2F&tbnid=xyV6iVkBNMvRZM&vet=12ahUKEwifr4fXmaTzAhVC0nMBHTrTAWkQMygGegUIARC6AQ..i&docid=UYws8ArK5kWQ8M&w=860&h=323&q=hulu%20logo%20white&ved=2ahUKEwifr4fXmaTzAhVC0nMBHTrTAWkQMygGegUIARC6AQ" alt="" />
            
            
        </div>
    )
}

export default Header;
