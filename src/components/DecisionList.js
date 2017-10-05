
import React, { Component } from 'react'
import Items from './Items'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {  
   BrowserRouter as Router,
  Route,
  Link, 
  render
} from 'react-router-dom'

import { deleteDecision } from '../actions/decisionActions.js'

class DecisionList extends Component {


 constructor(props) {
        super(props)

         this.state = {
          currentDecision: ''
        }
    }

    componentDidMount() {
    	this.setCurrentDecision()
    }	

    setCurrentDecision() {
        this.setState({
            currentDecision: this.props.decisions[0]
        })
    }

    setDecision(id) {
        const currentDecision = this.props.decisions.filter(decision => decision.id === id)[0]
        this.setState({
            currentDecision
        })
    }

     handleClick(decision) {
        
        this.props.deleteDecision(this.props.currentUser.id, decision)
        
    }


 	render() {
  	
		const decisions_map = this.props.decisions.map((decision) => (
        
            <div>
              <p key={decision.id} onClick={() => this.setDecision(decision.id)} >
                <Link to={`/decisions/${decision.id}`} > {decision.title}  </Link> 
                <button type="submit" onClick={() => this.handleClick(decision)}>Delete</button>                    
              </p>   
            </div>   
        ))    
  
  	return (
    <div><br />
    	
    	
    				{decisions_map} 
                    
                   
                      
    	
    </div>
  )
  }
}

function mapDispatchToProps(dispatch){
  return {deleteDecision: bindActionCreators(deleteDecision, dispatch)}
}


DecisionList = connect(null, mapDispatchToProps)(DecisionList)



export default DecisionList



