import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  
  Redirect
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchDecisions } from '../actions/decisionActions.js'
import DecisionList from './DecisionList.js'
import AddDecision from './DecisionForm.js'
import { Form, FormGroup, ControlLabel, Col, FormControl, Button, Grid, Row } from 'react-bootstrap'


class Decision extends React.Component {
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
      this.props.actions(currentUser.id) 
          } catch (e) {
        alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
          }
        }
        
    
      
        document.body.style.backgroundColor = "#e5ffe5";
  }
  
  render() {
      
      return (
        <Grid> 
          <Row> 
            <Col md={3} /> 
            <Col md={6}>
              <h3>Questions </h3> 
              <AddDecision currentUser={this.state.currentUser} />                                           
            <br />                           
             <ul>
              {this.props.decisions.length > 0 ? <DecisionList decisions={this.props.decisions} currentUser={this.state.currentUser} /> : <h4>Nothing yet...</h4>}  
             </ul> 
            </Col> 
            <Col md={3} /> 
          </Row>
           
        </Grid>
      )   
    }
   
  }


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(fetchDecisions, dispatch)}
}

function mapStateToProps(state){
  
  return { decisions: state.decisions}
}

Decision = connect(mapStateToProps, mapDispatchToProps)(Decision)


export default Decision

