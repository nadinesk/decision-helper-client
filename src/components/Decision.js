import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  
  Redirect
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchDecisions } from '../actions/decisionActions.js'
import DecisionList from './DecisionList.js'
import AddDecision from './DecisionForm.js'


class Decision extends React.Component {
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

      this.props.actions(currentUser.id)
  }
  
  render() {
      
      return (
        <div> 
          <h3>Decisions </h3> 

            <br />                           
            <div> 
             {this.props.decisions.length > 0 ? <DecisionList decisions={this.props.decisions} /> : <h4>Nothing yet...</h4>}  
            </div>   

             <AddDecision currentUser={this.state.currentUser} />                                 
          
        </div>
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

