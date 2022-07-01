import React,{useEffect,useState} from 'react';
import Card from "./Card";
import "./Results.css";
import axios from "./axios";
import requests from "./requests"
import FlipMove from 'react-flip-move';

function Results({selectedOption}) {
    const [movies,setMovies] = useState([]);

    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[selectedOption])



    return (
        <div className="results">
            <FlipMove>
            {movies.slice(0,18).map((movie) => (<Card key={movie.id} movie={movie}/>))}
            </FlipMove>
        </div>
    )
}

export default Results
