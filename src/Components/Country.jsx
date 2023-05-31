import React from "react";
import '../CSS/Country.css';
import '../CSS/CountryClass.module.css'
import { NavLink, useNavigate } from "react-router-dom"
import { Container, Image, ListGroup } from 'react-bootstrap'
import bel_land from '../Pictures/Belarus_land.jpg'
import bel_flag from '../Pictures/Belarus_Flag.jpg'
import { SIGHT_ROUTE } from "../Store/Consts";

const Country = () =>{
    const countryItem = {id: 1, name: "Belarus", pic: bel_land, flag: bel_flag}
    console.log(countryItem)

    const navigate = useNavigate();
    return(
        <div style={{position: 'absolute', width: 2020, height: 975,
             left: -100, background: 'initial', backgroundColor: 'ivory'}} >
            <Image src={countryItem.pic} width={1250} height={800} 
                style={{position: 'absolute', top: 120, left: 150}}/>
                
            <Image src={countryItem.flag} 
                style={{position: 'absolute', top: 120, left: 1500, width: 420, height: 200}}/>

            <ListGroup style={{position: 'absolute', width: 420, left: 1500, top: 600}}>
                <ListGroup.Item action onClick={() => navigate(SIGHT_ROUTE)}>
                    Brest fortress</ListGroup.Item>
                <ListGroup.Item action onClick={() => navigate(SIGHT_ROUTE)}>
                    Naroch Lake</ListGroup.Item>
                <ListGroup.Item action onClick={() => navigate(SIGHT_ROUTE)}>
                    Braslav Lakes</ListGroup.Item>
            </ListGroup>

        </div>
    )
}

export default Country;
