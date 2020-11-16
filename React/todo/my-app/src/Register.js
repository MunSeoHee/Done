import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Form,Button} from 'react-bootstrap';
import axios from 'axios';
import './Register.css';




class Register extends Component {
  //  data = {email:email, password : password, username : username};
  //  add_user = await axios('54.162.5.29/users/create/', {
  //       method : 'POST',
  //       headers: new Headers(),
  //       data : data
  // })
    render() {
      

      let form = new FormData()
form.append('email', this.email)
form.append('username',this.username)
form.append('password',this.password)


axios.post(`https://54.162.5.29/users/create`, form)
.then( response => { console.log('response : ', 
JSON.stringify(response, null, 10)) })
.catch( error => { console.log('failed', error) })


  // const data = { id : id, password : password, name : name, birthday : birthday, sex : sex, email : email };
  // const add_user = await axios('/add/user', {
  //       method : 'POST',
  //       headers: new Headers(),
  //       data : data
  // })
      
      return (
       <Container>
         <Row className="main1">

        <Col>
        <h1>회원가입</h1>
        
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>이름</Form.Label>
    <Form.Control type="text" name="email"placeholder="고객님 성함" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>아이디</Form.Label>
    <Form.Control type="email" name="username" placeholder="이메일" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>비밀번호</Form.Label>
    <Form.Control type="password" name="password"placeholder="비밀번호" />
  </Form.Group>



  <Button variant="secondary" size="lg" block type="submit">
    제출
  </Button>
</Form>





        </Col>
        
        <Col className="right">
        내용 설명
        </Col>

         </Row>

       </Container>

     
      );
    }
  }
  
export default Register;