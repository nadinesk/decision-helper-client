import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchItems } from '../actions/itemActions.js'
import ItemList from './ItemList'
import  AddItem  from './ItemForm'

class Items extends Component {


 constructor(props) {
        super(props)

        this.state = { 
    				currentDecision: '', 
    				currentUser: ''
                  };

       
    }

    componentDidMount() {
    	
      const current_user_string = localStorage.getItem('current_user')
      var currentUser = JSON.parse(current_user_string)
    	const currentDecisionId = parseInt(this.props.match.params.id)
      
  		this.setState({
          	currentUser: currentUser, 
          	currentDecisionId: currentDecisionId,         	
          }) 
      
        this.props.actions(currentUser.id, currentDecisionId)


    }	

    
 	render() {
		console.log('currenddecisionid', this.state.currentDecisionId)
  	return (
          <div> 
          <h3>Items </h3> 

            <br />                           
            <div> 
             {this.props.items ? <ItemList items={this.props.items} /> : <h4>Nothing yet...</h4>}  
            </div>   
              <AddItem decision = {this.state.currentDecisionId} /> 
                                             
          
        </div>
  )
  }
}


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(fetchItems, dispatch)}
}

function mapStateToProps(state){
  
  return { items: state.items}
}

Items = connect(mapStateToProps, mapDispatchToProps)(Items)


export default Items