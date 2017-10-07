import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  
  Redirect
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions/userActions.js'
import Decision from './Decision.js'
import { Form, FormGroup, ControlLabel, Col, FormControl, Button, Grid, Row } from 'react-bootstrap'


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    				currentUser: '', 
                  	loggedin: false
                  };

    
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
      <Grid>
        <Row>
          <Col md={12}>
            <h2> Welcome, {this.state.currentUser.username} </h2> 
          </Col>
        </Row>
        <Row> 
          <Decision /> 
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

User = connect(mapStateToProps, mapDispatchToProps)(User)


export default User

