
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
import { Col, Button, Grid, Row, ButtonToolbar} from 'react-bootstrap'
import { deleteDecision } from '../actions/decisionActions.js'


class DecisionList extends Component {


    constructor(props) {
        super(props)

        
    }

    componentDidMount() {
      
       document.body.style.backgroundColor = "#e5ffe5";
    }

    
     handleClick(decision) {
        
        this.props.deleteDecision(this.props.currentUser.id, decision)
        
    }


 	render() {
  	
		const decisions_map = this.props.decisions.map((decision) => (
       <li className="decision-list" key={decision.id} > 
            <Row>
              <Col md={7}>
              
                <Link to={`/decisions/${decision.id}`} > {decision.title}  </Link> 
              </Col> 
              <Col md={5}>   
                  <Button className="decision-list-delete" bsSize="xsmall" onClick={() => this.handleClick(decision)}>Delete</Button>                    
              </Col>  
              
            </Row>   
            </li>   
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



