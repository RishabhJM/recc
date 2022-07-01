import React,{useState} from 'react';
import Card from "./Card";
import "./Results.css";
import axios from "./axios";
import requests from "./requests"

function Results() {
    const [movies,setMovies] = useState([]);

    useEffect(()=> {
        async function fetchdata(){
            const request = await axios.get(requests)
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
