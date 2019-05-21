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
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1>Mood Groove</h1>
                <h5>RHYTHM TO FEED YOUR SOUL</h5>
            </div>
        </div>
      
    </div>

  );

}
