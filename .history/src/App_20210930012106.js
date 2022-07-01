import React,{useState} from "react";
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Card from "./Card"
import Results from "./Results";
import { useState } from "react";

function App() {
  const [selectedOption,setSelectedOption] = useState();
    <div className="App">
      <Header />
      <Nav />
      <Results />

    </div>
  );
}

export default App;
