import React from "react";
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Card from "./Card"

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Card src="" description="" title="" rating="" />
      <Card src="" description="" title="" rating="" />
      <Card src="" description="" title="" rating="" />
    </div>
  );
}

export default App;
