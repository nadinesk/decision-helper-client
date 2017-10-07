import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Navigation from './components/Navigation'
import LinkPage from './components/LinkPage'
import User from './components/User'
import Decision from './components/Decision'
import AddDecision from './components/DecisionForm'
import Items from './components/Items'
import About from './components/About'
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
  
    if (typeof localStorage === 'object') {        
          try {         
    const current_user_string = localStorage.getItem('current_user')
      var currentUser = JSON.parse(current_user_string)
     
      if (currentUser) {
        this.setState({
          currentUser: currentUser, 
          loggedin: true
        }) 
      } 
          } catch (e) {
        alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
          }
        }
    console.log('currentUser componentdidmoutn', currentUser)
  
    
    
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
            <Navigation loggedin ={logs} currentUser = {cu} /> 
          

            
              <Route exact path="/signup" component= {Signup}  />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route exact path="/linkpage" component={LinkPage} />
              <Route exact path="/user" component={User} />
              <Route exact path="/decisions" component={Decision} />
              <Route path="/decisions/:id" component={Items} />
              <Route exact path="/decision/new" component={AddDecision} />
              <Route exact path="/about" component={About} />
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
