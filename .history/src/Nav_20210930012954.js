import React from 'react'
import "./Nav.css"

function Nav({setSelectedOption}) {
    return (
        <div className="nav">
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h1>
             <h1>Top Rated</h1>
             <h1>Action</h1>
             <h1>Comedy</h1>
             <h1>Horror</h1>
             <h1>Romance</h1>
             <h1>Mystery</h1>
             <h1>Sci-Fi</h1>
             <h1>Western</h1>
             <h1>Animation</h1>
             <h1>TV Movie</h1>
        </div>
    )
}

export default Nav
