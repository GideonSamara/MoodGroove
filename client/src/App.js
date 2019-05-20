import React from 'react';
import Nav from "./Components/Nav";
import Jumbotron from './Components/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Components/Button';


function App() {
  return (
    <div className="App">
    <Nav/>
    <Jumbotron/>
    <Button/>
    </div>
  );
}

export default App;
