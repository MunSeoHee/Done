import React, { Component } from 'react';
import Todaydoitem from './Todaydoitem';

class Todaydoitemlist extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <Todaydoitem text="안녕"/>
        <Todaydoitem text="리액트"/>
        <Todaydoitem text="반가워"/> 
      </div>
    );
  }
}

export default Todaydoitemlist;