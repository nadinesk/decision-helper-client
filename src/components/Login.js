import React, { Component } from 'react';
import { connect } from 'react-redux'
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
    const current_user = localStorage.getItem('current_user')
    
    this.setState({
      current_user: current_user
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
    return (
      <div>
	      <h1> Login page </h1> 
        {this.props.current_user ? <h2>{this.props.current_user.username} </h2> : ''}
        <h3> {this.state.current_user_id} </h3>
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
  return { current_user: state.user.current_user}
}

Signup = connect(mapStateToProps, mapDispatchToProps)(Signup)


export default Signup

