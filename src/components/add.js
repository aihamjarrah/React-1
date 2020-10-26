import React, { Component } from 'react';
import ToDOList from './to-do list';

export default class Add extends Component {
  render() {
    return (
      <div className="add">
        <input type="text" placeholder="Add here" />
        <button className="addButton">Add</button>
        <ToDOList/> 
        
      </div>
    );
  }
}
