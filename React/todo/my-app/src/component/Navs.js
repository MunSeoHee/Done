import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import './Nav.css';
class Navs extends Component {
    render() {
      
      return (
       
<Nav defaultActiveKey="/home" className="flex-column nav">
  <Nav.Link href="/home">Main</Nav.Link>
  <Nav.Link eventKey="link-1">오늘의 Todo</Nav.Link>
  <Nav.Link eventKey="link-2">이번주 Todo</Nav.Link>
  <Nav.Link eventKey="link-3">완료한 Todo</Nav.Link>
  <Nav.Link eventKey="link-4" className="downmy">마이페이지</Nav.Link>
  <Nav.Link eventKey="link-5" className="down">로그아웃</Nav.Link>
</Nav>
     
      );
    }
  }
  
export default Navs;