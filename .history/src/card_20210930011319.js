import React from 'react'
import "./Card.css"
import TextTruncate from "react-text-truncate";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const base_url = "https://image.tmdb.org/t/p/original/";

function Card({movie}) {
    return (
        <div className="card">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="Movie Poster" /> 
            <TextTruncate line={1} element="p" truncateText="..." text={movie.overview} /> 
            <h2>{movie.title || movie.original_name}</h2>
            <p className="card__stats">{movie.media_type && `${movie.media_type}`} {movie.release_date || movie.first_air_date}• <ThumbUpOffAltIcon/> {movie.vote_count} </p>
        </div>
    )
}

export default Card
