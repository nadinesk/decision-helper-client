import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteItem } from '../actions/itemActions.js'



class ItemList extends Component {


 constructor(props) {
        super(props)

        
    }

   
    handleClick(item) {
        
        this.props.deleteItem(this.props.currentUser.id, this.props.currentDecisionId, item)
        
    }

    
 	render() {
	   
		const items_map = this.props.items.map((item) => (
            <div>
            	    <p key={item.id} >
                    {item.description}  | {item.category } | {item.weight}
                    <button type="submit" onClick={() => this.handleClick(item)}>Delete</button>
                    </p>
                        
                
            </div> 
        ))    
  
  	return (
    <div><br />
    	
    	
    				{items_map} 
    	
    </div>
  )
  }
}


function mapDispatchToProps(dispatch){
  return {deleteItem: bindActionCreators(deleteItem, dispatch)}
}



ItemList = connect(null, mapDispatchToProps)(ItemList)



export default ItemList


