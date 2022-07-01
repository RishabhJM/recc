import React from 'react'
import Card from "./Card"
import "./Results.css"

function Results() {
    const [movies,setMovies] = useState([]);
    return (
        <div className="results">
            {movies.map((movie) => (<Card />))}

        </div>
    )
}

export default Results
