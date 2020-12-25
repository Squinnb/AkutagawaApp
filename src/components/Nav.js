import React from 'react';
import { NavLink } from "react-router-dom"
import '../nav.css';


export default function Nav(props) {
    
    return (

       <nav id="navigation">
            <ul id="navList">
                <li className="navli"><NavLink  exact activeClassName="currentLink" className="nl" to="/"> <button>Home</button> </NavLink></li>
                <li className="navli"><NavLink  exact activeClassName="currentLink" className="nl" to="/About"> <button>About</button> </NavLink></li>
            </ul>
            
       </nav>
    )
}