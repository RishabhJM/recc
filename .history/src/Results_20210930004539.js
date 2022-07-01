import React,{useEffect,useState} from 'react';
import Card from "./Card";
import "./Results.css";
import axios from "./axios";
import requests from "./requests"

function Results() {
    const [movies,setMovies] = useState([]);

    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(requests.fetchActionMovies);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[])



    return (
        <div className="results">
            {movies.map((movie) => (<Card movie={movie}/>))}

        </div>
    )
}

export default Results
