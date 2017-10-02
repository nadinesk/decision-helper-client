import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Link, 
  Redirect

} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import LinkPage from './components/LinkPage'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { current_user: ''};
    
  }
  
  componentDidMount() {
    const current_user_string = localStorage.getItem('current_user')
    const current_user = JSON.parse(current_user_string)
    
    this.setState({
      current_user: current_user
    })
  }

  render() {
    const current_user = this.state.current_user
    console.log('this.state', this.state)
    
    return (
         <Router>
          <div> 
            <Route path = "/" render={() => ( 
              this.state.current_user ? (
                <Redirect to="/home" /> 
                ) : (
                <Redirect to = "/linkpage" /> 
                )
              
            )} /> 
            
              <Route path="/signup" component= {Signup}  />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/linkpage" component={LinkPage} />
            </div> 
    
          </Router>

    );
  }
}

export default App;
