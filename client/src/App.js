import React from 'react';
import Button from "./Components/Button";
import Jumbotron from "./Components/Jumbotron";
import Nav from "./Components/Nav"
import "./style.css";
import ValidatedLoginForm from "./Components/ValidatedLoginForm"

//Get our fontawesome



function App() {
  return (
    <div className="App">
      <Nav/>
      <Jumbotron/> 
      <ValidatedLoginForm/>
      <Button/>
    </div>
  );
}

export default App;
