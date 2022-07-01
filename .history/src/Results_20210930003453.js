import React,{useState} from 'react'
import Card from "./Card"
import "./Results.css"

function Results() {
    const [movies,setMovies] = useState([]);

    useEffect(()=> {
        async function fetchdata(){

        }
        fetchData();
    },[])



    return (
        <div className="results">
            {movies.map((movie) => (<Card />))}

        </div>
    )
}

export default Results
