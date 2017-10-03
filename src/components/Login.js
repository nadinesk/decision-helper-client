import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  
  Redirect
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions/userActions.js'


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', redirect: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const currentUser = localStorage.getItem('current_user')
    
    this.setState({
      currentUser: currentUser
    })  
  }
  

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
   event.preventDefault()            
    let username = Object.assign({}, this.state)    
    this.props.actions(username)
  }

  render() {
    if (this.state.currentUser || this.props.currentUser) {
      return  <Redirect to = '/home' /> 
    } else 
    return (
      <div>
	      <h1> Login page </h1> 
        
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          Name:
	          <input type="text" value={this.state.value} onChange={this.handleChange} />
	        </label>
	        <input type="submit" value="Submit" />
	      </form>
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

Signup = connect(mapStateToProps, mapDispatchToProps)(Signup)


export default Signup

