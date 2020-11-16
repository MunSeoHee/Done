import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container, Row, Col,Button} from 'react-bootstrap';
import './Login.css';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Register } from './';


class Login extends Component {
    render() {
      
      return (
        
   
            
       <Container>
         <Row>
        <Row></Row>
          <Col></Col>

          <Col  xs={5} className="main">
          <h1>Done</h1>

          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>아이디</Form.Label>
    <Form.Control type="text" placeholder="ID" />
  
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>비밀번호</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">

    <Form.Check type="checkbox" label="아이디 기억하기" />
  </Form.Group>
<Row >
  <Col> 
  
  <Link to="/Register">
   <Button size="lg"variant="primary" type="button" className="bt">
   회원가입
  </Button> </Link>
  
   </Col>
  <Col> 

   <Button  size="lg" variant="primary" type="submit" className="bt">
   로그인
  </Button>
  
  </Col>
</Row>



</Form>
          </Col>

          <Col></Col>

         </Row>

       </Container>
      

     
      );
    }
  }
  
export default Login;