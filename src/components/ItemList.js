import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {  Col, FormControl, Button, Grid, Row, Table} from 'react-bootstrap'
import { deleteItem } from '../actions/itemActions.js'



class ItemList extends Component {


 constructor(props) {
        super(props)

        
    }

   
    handleClick(item) {
        
        this.props.deleteItem(this.props.currentUser.id, this.props.currentDecisionId, item)
        
    }

    
 	render() {
	   
		const pro_items_map = this.props.proItems.map((item) => (
            
            	    <tr key={item.id} >
                    <td> {item.description}  </td>
                    <td> {item.weight} </td>                     
                    <Button bsSize="xsmall"  className="item-list-delete" onClick={() => this.handleClick(item)}>Delete</Button>
                    </tr>
                    
                        
                
            
        ))    
                const con_items_map = this.props.conItems.map((item) => (
            
                    <tr key={item.id} >
                    <td> {item.description}  </td>
                    <td> {item.weight} </td>                     
                    <Button bsSize="xsmall" className="item-list-delete"  onClick={() => this.handleClick(item)}>Delete</Button>
                    </tr>
                    
                        
                
            
        ))    
  
  	return (
        
        <Row >
            
            <Col md={12}>
            <h3> Pros </h3>
            <Table condensed hover>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
    				{pro_items_map} 
                </tbody>
            </Table>
            </Col>
            
            <Col md={12}>
            <h3> Cons </h3>
            <Table  condensed hover>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                    {con_items_map} 
                </tbody>
                </Table>
            </Col>

            
    	
    </Row>
  )
  }
}


function mapDispatchToProps(dispatch){
  return {deleteItem: bindActionCreators(deleteItem, dispatch)}
}



ItemList = connect(null, mapDispatchToProps)(ItemList)



export default ItemList


