import React from 'react'
import "./Nav.css"
import requests from "./requests"

function Nav({setSelectedOption}) {
    return (
        <div className="nav">
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h1>
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Top Rated</h1>
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Action</h1>
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Comedy</h1>
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Horror</h1>
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Romance</h1>
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Mystery</h1>
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Sci-Fi</h1>
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Western</h1>
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>Animation</h1>
             <h1 onClick={() => setSelectedOption(requests.fetchTrending)}>TV Movie</h1>
        </div>
    )
}

export default Nav
