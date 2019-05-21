import React from "react";
import axios from 'axios';



export default function Button(){
function getAPI(){
    axios.get('https://jsonplaceholder.typicode.com/users').then((data)=> {
        console.log(data);
    })
}
    return(
        <div>
            <button className="btn btn-primary" onClick={getAPI}>Submit</button>
        </div>
    )
}