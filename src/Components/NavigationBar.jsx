import React, { useContext } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from ".."
import { NavLink } from "react-router-dom"
import { FORM_ROUTE, LOGIN_ROUTE, MAP_ROUTE } from "../Store/Consts"
import {observer} from 'mobx-react-lite'

const NavigationBar = observer(() => {
    const {user} = useContext(Context)
        return (
            <Navbar style={{position: "fixed", width: "101%", top: 20, fontSize: 30}} bg="dark" variant="dark">
                <Container>
                <NavLink style={{color: 'white', fontSize: 30}} to={MAP_ROUTE}>TravelTime</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <NavLink to={FORM_ROUTE} style={{color: 'white'}}>Form</NavLink>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <NavLink to={LOGIN_ROUTE} style={{color: 'white'}}>Sign In</NavLink>
                        {/* <Nav.Link href={REGISTARTION_ROUTE}>Sign Up</Nav.Link> */}
                    </Nav>
                }
                </Container>
            </Navbar>
        );    
})


export default NavigationBar;
