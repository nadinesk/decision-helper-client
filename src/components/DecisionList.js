
import React, { Component } from 'react'
import Items from './Items'

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
            	    <p key={decision.id} >
                    {decision.title}  
                    
                    </p>
                        <div> 
                        this.state.currentDecision
                        ?
                        <Items decision={this.state.currentDecision} />
                        :
                        <h4>click a decision to see items</h4>
            </div>   
    			
                
            </div> 
        ))    
  
  	return (
    <div><br />
    	
    	
    				{decisions_map} 
    	
    </div>
  )
  }
}
