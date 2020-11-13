import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';




export { default as Main } from './Main';
export { default as Login } from './Login';
export { default as Register } from './Register';



ReactDOM.render(
  
    <Main/>,
 
  document.getElementById('root')
);
