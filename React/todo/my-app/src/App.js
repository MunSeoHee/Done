import React, { Component } from 'react';
import Todaydo from './component/Todaydo';
import Form from './component/Form';
import Todaydoitemlist from './component/Todaydoitemlist';
import Navs from './component/Navs';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


class App extends Component {

 



  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 자바공부', checked: false },
      { id: 1, text: ' 리눅스', checked: true },
      { id: 2, text: '디비 영미 살인', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }


  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;

    return (
      <Container fluid className="main">
        <Row >
        <Col className="left">
      <Navs ></Navs>
      </Col>
      <Col  xs={9}>
      <Container ClassName="middle">
      <Todaydo form={(
   
   <Form 
   
     value={input}
     onKeyPress={handleKeyPress}
     onChange={handleChange}
     onCreate={handleCreate}
   />
 )}>
   <DragDropContext onDragEnd={this.onDragEnd}>
   <Todaydoitemlist todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
   </DragDropContext>



 </Todaydo>
      </Container>
      </Col>
           <Col className="rigt">
          <Container></Container>
          </Col>

      </Row>
      </Container>
      
    );
  }
}

export default App;