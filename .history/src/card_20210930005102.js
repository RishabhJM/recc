import React from 'react'
import "./Card.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Card({movie}) {
    return (
        <div className="card">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="Movie Poster" /> 
            <p>{movie.overview}</p>
            <h2>{props.title}</h2>
            <p>{props.rating}</p>
        </div>
    )
}

export default Card
