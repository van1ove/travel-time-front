import React, { useState } from 'react'
import loginpic from '../Pictures/Login.png'
import '../CSS/Auth.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { REGISTARTION_ROUTE } from '../Store/Consts';
import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap'
import axios from 'axios';

const Auth = () => {
  const [login, loginChange] = useState("");
  const [password, passwordChange] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let authObj = {login, password};
    console.log(authObj);
    //axios.post("http://localhost:3000/TravelTime/login", authObj)

    // fetch("http://localhost:8080/TravelTime/login", {
    //   method: "POST",
    //   body: JSON.stringify(authObj),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  }

  return (
      <div class="Auth">
          <Image src={loginpic} style={{position: 'absolute', width: 1180, height: 975, left: 740}}></Image>
          <text style={{position:'absolute', width: 750, height:220, top: 450, left: 1090,
            font: 'Inter', fontSize: 120, fontStyle: 'normal', fontFamily: 'Times New Roman' , color: 'ivory'}}>
              TravelTime
          </text>
        <Form style={{position: 'absolute', width: 420, top: 260, left: 120}}>
          <h1 style={{fontSize: 120, font: 'Inter', fontStyle: 'normal', fontFamily: 'Times New Roman' , 
            color: 'black'}}>Sign In</h1>
          <Form.Group className="mb-3" controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control value={login} onChange={e => loginChange(e.target.value)} 
              type="login" placeholder="Enter login"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={e => passwordChange(e.target.value)} 
              type="password" placeholder="Password"/>
          </Form.Group>

          <Button className="mt-3 align-self-end" variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <NavLink to={REGISTARTION_ROUTE} style={{position: "relative", left: 200}}>
            Create account
          </NavLink>
        </Form>
       </div>
  );
}

export default Auth;
