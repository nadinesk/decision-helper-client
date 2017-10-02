import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
         <Router>
            <div> 
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
            </div> 
    
          </Router>

    );
  }
}

export default App;
