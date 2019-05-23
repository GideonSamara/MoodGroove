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

        <div className = 'jumbotron jumbotron-fluid' style = {{background: 'rgb(97, 95, 95)'}}>

            <h1 className = "font-weight-bold"> Mood<span className="glyphicon glyphicon-fire"></span>Groove</h1>

            <h4 className = {styles.jumbotron}>  RHYTHM TO FEED YOUR SOUL </h4>

        </div>
      
    </div>

  );

}
