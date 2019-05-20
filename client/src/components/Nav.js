import React from 'react';

export default function Nav() {

  return (

    <div>

        <nav className ='navbar navbar-expand-sm' style = {{background: 'rgba(255, 178, 78, 0.883)'}}>

            <ul className ="navbar-nav justify-content-center">

                <li className ="nav-item">

                    <a className ="nav-link" href="#"><button style = {{backgroundColor:'rgb(97, 95, 95)'}}>Home</button></a>

                </li>

                <li className ="nav-item">

                    <a className ="nav-link" href="#"><button style = {{backgroundColor:'rgb(97, 95, 95)'}}>Explore</button></a>

                </li>

                <li className ="nav-item">

                    <a className ="nav-link" href="#"><button style = {{backgroundColor:'rgb(97, 95, 95)'}}>Search</button></a>

                </li>

            </ul>
          
        </nav>
      
    </div>
  );
}
