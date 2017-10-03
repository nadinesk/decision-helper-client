
import React, { Component } from 'react'

export default class Items extends Component {


 constructor(props) {
        super(props)

       
    }

    componentDidMount() {
    	this.setCurrentDecision()
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
