import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signupUser } from '../actions/userActions.js'


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};

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
  return {actions: bindActionCreators(signupUser, dispatch)}
}

function mapStateToProps(state){
  return { redirect: state.redirect}
}

Signup = connect(mapStateToProps, mapDispatchToProps)(Signup)


export default Signup

