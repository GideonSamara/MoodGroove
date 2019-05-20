import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components//Nav';

import Jumbotron from './components/Jumbotron';


function App() {

  return (

    <div className="App">

      <Nav/>

      <Jumbotron/>

      <button className = 'btn btn-primary'>Submit</button>

    </div>

  );

}

export default App;
