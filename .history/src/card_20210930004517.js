import React from 'react'
import "./Card.css"

function Card({movie}) {
    return (
        <div className="card">
            <img src={props.src}/> 
            <p>{props.description}</p>
            <h2>{props.title}</h2>
            <p>{props.rating}</p>
        </div>
    )
}

export default Card
