
import React, { Component } from 'react'
import Items from './Items'
import {  
   BrowserRouter as Router,
  Route,
  Link, 
  render
} from 'react-router-dom'

export default class DecisionList extends Component {


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

 	render() {
  	
		const decisions_map = this.props.decisions.map((decision) => (
        
            <div>
            	    <p key={decision.id} onClick={() => this.setDecision(decision.id)} >
                    <Link to={`/decisions/${decision.id}`} > {decision.title}  </Link> 
                    
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
