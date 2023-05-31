import React, {useContext, useState} from 'react'
import {Context} from '..'
import registr from '../Pictures/Registration.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE } from '../Store/Consts';
import { NavLink } from 'react-router-dom';
import {Image} from 'react-bootstrap'

const Registration = () => {
  const {user} = useContext(Context)

  const [email, emailChange] = useState("");
  const [login, loginChange] = useState("");
  const [password, passwordChange] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let authObj = {email, login, password};
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
      <div class="Registr">
          <Image src={registr} style={{position: 'absolute', width: 1180, height: 975, left: 740}}></Image>
          <p class="text-left" style={{position:'absolute', width: 750, height:220, top: 450, left: 1090,
            font: 'Inter', fontSize: 120, fontStyle: 'normal', fontFamily: 'Times New Roman' , color: 'ivory'}}>
              TravelTime
          </p>
        <Form style={{position: 'absolute', width: 420, top: 260, left: 120}}>
          <h1 style={{fontSize: 120, font: 'Inter', fontStyle: 'normal', fontFamily: 'Times New Roman' , 
            color: 'black'}}>Sign Up</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
              value={email} onChange={e => emailChange(e.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control type="login" placeholder="Enter login" 
              value={login} onChange={e => loginChange(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
              value={password} onChange={e => passwordChange(e.target.value)}/>
            <Form.Text className="text-muted">
              Don't share your password.
            </Form.Text>
          </Form.Group>

          <Button className="mt-3 align-self-end" variant="primary" type="submit" onClick={handleSubmit}> 
            Submit
          </Button>
          <NavLink to={LOGIN_ROUTE} style={{position: "relative", left: 270}}>
            Sign In
          </NavLink>
        </Form>
        </div>
  );
}

export default Registration;