import React, { Component } from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Navs from './Navs';
import SVG from '../static/img/calander.svg';
const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div>
       
       
        <Button variant="outline-primary" /*onClick={달력}*/className=""> <img src="https://simpleicon.com/wp-content/uploads/Calendar-2.svg" className="calander"></img></Button>{''}
        <span className="create-button" onClick={onCreate}>
  
        </span>
      
      
      </div>
    </div>
  );
};

export default Form;