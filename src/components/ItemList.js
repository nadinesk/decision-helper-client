
import React, { Component } from 'react'


class ItemList extends Component {


 constructor(props) {
        super(props)

        
    }

    componentDidMount() {
    	
    }	

    
 	render() {
	
		const items_map = this.props.items.map((item) => (
            <div>
            	    <p key={item.id} >
                    {item.description}  | {item.category } | {item.weight}

                    
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

export default ItemList