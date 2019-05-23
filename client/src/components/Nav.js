import React from 'react';

export default function Nav() {

  return (

    <div>

      

      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="# "><span className="glyphicon glyphicon-headphones">WebSiteName</span></a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="# "><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="# "><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
}

