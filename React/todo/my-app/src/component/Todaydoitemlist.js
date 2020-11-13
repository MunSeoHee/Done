import React, { Component } from 'react';
import Todaydoitem from './Todaydoitem';



class Todaydoitemlist extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id, text, checked}) => (
        <Todaydoitem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
        {todoList}    
      </div>
    );
  }
}

export default Todaydoitemlist;


// import React, { Component } from 'react';
// import Todaydoitem from './Todaydoitem';

// class Todaydoitemlist extends Component {

//   shouldComponentUpdate(nextProps, nextState) {
//     return this.props.todos !== nextProps.todos;
//   }

//   render() {
//     const { todos, onToggle, onRemove } = this.props;

//     const todoList = todos.map(
//       ({id, text, checked}) => (
//         <Todaydoitem
//           id={id}
//           text={text}
//           checked={checked}
//           onToggle={onToggle}
//           onRemove={onRemove}
//           key={id}
//         />
//       )
//     );

//     return (
//       <div>
//         {todoList}    
//       </div>
//     );
//   }
// }

// export default Todaydoitemlist;