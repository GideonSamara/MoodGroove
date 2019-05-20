import React from 'react';
import Navbar from "./Components/Navbar";
import Jumbotron from './Components/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Components/Button';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Jumbotron/>
    <Button/>
    </div>
  );
}

export default App;
