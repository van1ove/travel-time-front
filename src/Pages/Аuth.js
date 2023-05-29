import React, {useContext} from 'react'
import {Context} from '..'
import login from '../Pictures/Login.png'
import '../CSS/Auth.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { observer } from 'mobx-react-lite';
import { REGISTARTION_ROUTE } from '../Store/Consts';
import { NavLink } from 'react-router-dom';

const Auth = () => {
  const {user} = useContext(Context)
  return (
      <div class="Auth">
          <img src={login} style={{position: 'absolute', width: 1180, height: 975, left: 740}}></img>
          <text style={{position:'absolute', width: 750, height:220, top: 450, left: 1090,
            font: 'Inter', fontSize: 120, fontStyle: 'normal', fontFamily: 'Times New Roman' , color: 'ivory'}}>
              TravelTime
          </text>
        <Form style={{position: 'absolute', width: 420, top: 260, left: 120}}>
          <h1 style={{fontSize: 120, font: 'Inter', fontStyle: 'normal', fontFamily: 'Times New Roman' , 
            color: 'black'}}>Sign In</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button className="mt-3 align-self-end" variant="primary" onClick={() => user.setIsAuth(true)}>
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
