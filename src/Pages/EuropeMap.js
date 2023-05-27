import React from "react";
import EuropeJPG from '../Pictures/Europe.jpg' 
import '../CSS/Europe.css'

const EuropeMap = () => {
    return (
        <img src={EuropeJPG}>
            {/* <svg viewBox="0 0 1920 1080">
                {countries.map(country => console.log(country.reference))}
            </svg> */}
        </img>
    );
}

export default EuropeMap;