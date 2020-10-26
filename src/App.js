import React, { Component } from 'react';
import './App.css';
import Add from './components/add';
import ToDOList from './components/to-do list'

export default class App extends Component {
  render() {
    return (<div className="app">
      <Add/>
      <ToDOList/> 
    </div>);
  }
}

