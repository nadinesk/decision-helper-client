import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {  
  Redirect
} from 'react-router-dom'
import { Form, FormGroup, ControlLabel, Col, FormControl, Button, Grid, Row } from 'react-bootstrap'
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

  componentDidMount() {
      
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
    if (this.props.user.redirect) {
    	return  <Redirect to = '/login' /> 
    } else if (this.props.user.error) {
      return (
      <Grid>
        <Row>  
         <Col md={3} /> 
        <Col md={6}>
        <h2> Sign Up </h2> 
        <h3 className="errorText"> Duplicate User Name </h3> 
        <form onSubmit={this.handleSubmit}>
        
          <FormGroup >
            <label className="error_box">              
              <Col sm={10}>
                <FormControl label="Username" type="text" value={this.state.value} placeholder="Enter Username" onChange={this.handleChange} />
              </Col>
            </label>
          </FormGroup>
          <FormGroup>
          
            
              <Button type="submit">
                Sign in
              </Button>
            
          </FormGroup>
        
        </form> 
         </Col>
        <Col md={3} /> 
      </Row> 
      </Grid> 
    );      
    } else

    return (
       <Grid>
       <Row>  
        <Col md={3} /> 
        <Col md={6}>
        
        <h2> Sign Up </h2> 
        
       <form onSubmit={this.handleSubmit}>
        
          <FormGroup bsSize="large">
            
                <FormControl label="Username" type="text" value={this.state.value} placeholder="Enter Username" onChange={this.handleChange} />
            
            
          </FormGroup>
          
          <FormGroup>
            
              <Button type="submit">
                Sign in
              </Button>
            
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
  return {actions: bindActionCreators(signupUser, dispatch)}
}

function mapStateToProps(state){
  
  return { user: state.user }
}

Signup = connect(mapStateToProps, mapDispatchToProps)(Signup)


export default Signup

