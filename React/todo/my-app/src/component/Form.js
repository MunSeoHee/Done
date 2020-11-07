import React from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div >
      <Button onClick={onCreate} variant="primary"> 추가</Button>{'     '}
 
      </div>
    </div>
  );
};

export default Form;