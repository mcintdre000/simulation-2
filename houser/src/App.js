import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';

import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';


class App extends Component {

  render() {
    
    return (
      <div className="App">
        
        { router }
      </div>
    );
  }
}



export default App;
