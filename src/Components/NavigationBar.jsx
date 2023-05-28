import React, { useContext } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from ".."
import { NavLink } from "react-router-dom"
import { LOGIN_ROUTE, MAP_ROUTE } from "../Store/Consts"

const NavigationBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar style={{position: "fixed", width: "101%", top: 20, fontSize: 26}} bg="dark" variant="dark">
            <Container>
            <Navbar.Brand style={{color: 'greenyellow', fontSize: 26}}>TravelTime</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href={LOGIN_ROUTE}>Sign In</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
            
    );
}

export default NavigationBar;
