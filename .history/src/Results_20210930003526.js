import React,{useState} from 'react';
import Card from "./Card";
import "./Results.css";
import axios from "./axios";

function Results() {
    const [movies,setMovies] = useState([]);

    useEffect(()=> {
        async function fetchdata(){
            const request = await
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
