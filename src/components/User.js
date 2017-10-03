import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  
  Redirect
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions/userActions.js'
import Decision from './Decision.js'


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    				currentUser: '', 
                  	loggedin: false
                  };

    
  }

  componentDidMount() {
	const current_user_string = localStorage.getItem('current_user')
    var currentUser = JSON.parse(current_user_string)
   
    if (currentUser) {
      this.setState({
      	currentUser: currentUser, 
      	loggedin: true
      }) 
    } 
  }
  
  render() {
    if (!this.state.currentUser) {
      return  (
      	<div> 
      		<h3> You must be logged in to see this page </h3> 
      	</div>
      	)
    } else 
    return (
      <div>
        <h1> {this.state.currentUser.username} </h1> 
        <div> 
          <Decision /> 
        </div> 

	  </div>
        
	      
    );
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(loginUser, dispatch)}
}

function mapStateToProps(state){
  return { currentUser: state.user.current_user}
}

User = connect(mapStateToProps, mapDispatchToProps)(User)


export default User
