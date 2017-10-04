
import React, { Component } from 'react'


class ItemList extends Component {


 constructor(props) {
        super(props)

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
    	
    }	

    handleOnClick() {
        
    }

    
 	render() {
	   
		const items_map = this.props.items.map((item) => (
            <div>
            	    <p key={item.id} >
                    {item.description}  | {item.category } | {item.weight}
                    <button onClick={this.handleOnClick}>Delete</button> 
                    
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