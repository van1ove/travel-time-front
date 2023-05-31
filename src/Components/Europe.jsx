import React, {useState, useContext} from "react"; 
import { useNavigate } from "react-router-dom";
import europe from '../Pictures/Europe.jpg'
import '../CSS/Europe.css';
import { COUNTRY_ROUTE } from "../Store/Consts";
import { Context } from "..";

const Europe = () => {
    const cont = useContext(Context)
    const navigate = useNavigate();

    return(
        <div class="Europe">
            <img src={europe} alt="Европа"/>
            <svg viewBox="0 0 1900 1080">
                {cont.countries.countries.map(country =>
                    <path className="Country" d={country.d} onClick={() => navigate(COUNTRY_ROUTE)}/> )}
            </svg>
        </div>
    )
}

export default Europe;