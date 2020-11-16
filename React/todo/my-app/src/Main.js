import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container, Row, Col,Button} from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {  Register,Login} from '../src';
// import Register from "../src/component/Register"
class Main extends Component {
    render() {
      
      return (
        <Router>
        <Route exact path='/' component={Login}/>
        <Route path='/Register' component={Register}/>

        </Router>
     
      );
    }
  }
  
export default Main;