import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  
  Redirect
} from 'react-router-dom'
import { signupUser } from '../actions/userActions.js'


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', 
				  redirect: false
				  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log('this.props.user.redirect', this.props.user.redirect)

    if (this.props.user.redirect) {
    	return  <Redirect to = '/login' /> 
    } else if (this.props.user.error) {
      return (
      <div> 
        <h3 className="errorText"> Duplicate User Name </h3> 
      <form onSubmit={this.handleSubmit}>
        <label className="error_box">
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div> 
    );      
    } else

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(signupUser, dispatch)}
}

function mapStateToProps(state){
  
  return { user: state.user }
}

Signup = connect(mapStateToProps, mapDispatchToProps)(Signup)


export default Signup

