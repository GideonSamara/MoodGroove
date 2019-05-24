import React from 'react';
import Button from "./components/Button";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav"
import "./style.css";
import ValidatedLoginForm from "./components/ValidatedLoginForm"



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
