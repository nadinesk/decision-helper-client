import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import NavBar from './components/NavBar'
import LinkPage from './components/LinkPage'
import User from './components/User'
import Decision from './components/Decision'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: '', 
                  loggedin: false};
    
  }
  
  componentDidMount() {
  
    const current_user_string = localStorage.getItem('current_user')
    var currentUser = JSON.parse(current_user_string)

    console.log('currentUser componentdidmoutn', currentUser)
    if (currentUser) {
      this.setState({
      currentUser: currentUser, 
      loggedin: true
    }) 
    } 
    
    
  }

  render() {
    const cu = (!this.props.currentUser) ? this.state.currentUser : this.props.currentUser
    const logs = (this.state.currentUser || this.props.currentUser ) ?  true : false

    
    console.log('this.state', this.state)
    console.log('cu', cu)
    console.log('logs', logs)
    
    return (
         <Router>
          <div> 
            <NavBar loggedin ={logs} currentUser = {cu} /> 
          

            
              <Route path="/signup" component= {Signup}  />
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
              <Route path="/linkpage" component={LinkPage} />
              <Route path="/user" component={User} />
              <Route path="/decision" component={Decision} />
            </div> 
    
          </Router>

    );
  }
}


function mapStateToProps(state){
  return { currentUser: state.user.current_user}
}

App = connect(mapStateToProps, null)(App)

export default App;
