import React from 'react';

const styles = {

    jumbotron: {
    
        textAlign: 'center',
        fontFamily: "'Poiret One', cursive",
        color: 'rgba(170, 130, 0, 0.883)',
    
    }

}

export default function Jumbotron() {

  return (

    <div>

      <div className = 'jumbotron jumbotron-fluid' style = {{background: ' rgb(158, 158, 158)'}}>

        <h1 className = "font-weight-bold"> Mood <i className ="fas fa-headphones"></i> Groove</h1>

        <h5 className = {styles.jumbotron}>  RHYTHM TO FEED YOUR SOUL </h5>

      </div>
      
    </div>

  );

}
