import React from 'react'

function Card(props) {
    return (
        <div>
            <img src={props.src} alt="" />
            <p>{props.description}</p>
            <h2>{props.title}</h2>
            <p>{props.rating}</p>
        </div>
    )
}

export default Card
