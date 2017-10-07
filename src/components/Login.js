import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Redirect
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { Form, FormGroup, ControlLabel, Col, FormControl, Button, Grid, Row } from 'react-bootstrap'
import { loginUser } from '../actions/userActions.js'


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', redirect: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      if (typeof localStorage === 'object') {        
          try {         
    const currentUser = localStorage.getItem('current_user')
    
    this.setState({
      currentUser: currentUser
    })  

          } catch (e) {
        alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
          }
        }
        

  
    document.body.style.backgroundColor = "#e5ffe5";
  
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
      return  <Redirect to = '/' /> 
    } else 
    return (
      <Grid>
        <Row> 
          <Col md={3} /> 
          <Col md={6}>
	         <h2> Login </h2>         
	           <form onSubmit={this.handleSubmit}>
	          <FormGroup bsSize="large">
	          <FormControl type="text" value={this.state.value} placeholder="Username" onChange={this.handleChange} />
	          </FormGroup>
            <FormGroup>
	        <Button type="submit">Login </Button>
          </FormGroup>
          
	      </form>
        </Col> 
          <Col md={3} /> 
          </Row> 
	 </Grid>
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

