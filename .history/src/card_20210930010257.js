import React from 'react'
import "./Card.css"
import TextTruncate from "react-text-truncate";

const base_url = "https://image.tmdb.org/t/p/original/";

function Card({movie}) {
    return (
        <div className="card">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="Movie Poster" /> 
            <TextTruncate line={1} element="p" truncateText="..." text={movie.overview} /> 
            <h2>{movie.title || movie.original_name}</h2>
            <p>{movie.vote_count}</p>
        </div>
    )
}

export default Card
