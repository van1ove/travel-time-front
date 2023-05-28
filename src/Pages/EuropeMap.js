import React from "react";
import Image from 'react-bootstrap/Image'
import EuropeJPG from '../Pictures/Europe.jpg' 
import '../CSS/Europe.css'
import countries from '../Store/CountriesStore'
import NavigationBar from "../Components/NavigationBar";
import Europe from "../Components/Europe";
import '../CSS/Europe.css'

const EuropeMap = () => {
    return (
        <div>

            <Europe/>
            <NavigationBar/>
         </div>
    );
}

export default EuropeMap;