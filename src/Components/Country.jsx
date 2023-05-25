import React from "react";
import '../CSS/Country.css';
import '../CSS/CountryClass.module.css'
import { NavLink } from "react-router-dom";


const CountryObject = () =>{
    return(
        <div>
            <div className="CountryClass">
                {/* <button onClick={() => window.open("https://natribu.org/")}> </button> */}
                <nav>
                    <ul>
                        <label for="">Go back</label>
                        <li>Account</li>
                        <li>Home</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default CountryObject;
