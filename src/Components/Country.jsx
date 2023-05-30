import React from "react";
import '../CSS/Country.css';
import '../CSS/CountryClass.module.css'
import { NavLink } from "react-router-dom";
import { Container, Image } from 'react-bootstrap'
import bel_land from '../Pictures/Belarus_land.jpg'
import bel_flag from '../Pictures/Belarus_Flag.jpg'

const Country = () =>{
    const countryItem = {id: 1, name: "Belarus", pic: bel_land, flag: bel_flag}
    console.log(countryItem)
    return(
        <div style={{position: 'absolute', width: 2020, height: 975,
             left: -100, background: 'initial', backgroundColor: 'ivory'}} >
            <Image src={countryItem.pic} width={1250} height={800} style={{position: 'absolute', top: 120, left: 150}}/>
            <Image src={countryItem.flag} width={350} height={200} style={{position: 'absolute', top: 120, left: 1550}}/>
        </div>
    )
}

export default Country;
