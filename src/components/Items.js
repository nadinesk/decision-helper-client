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
		
    const proItems = this.props.items.filter(function(item) {
      return item.category == 'pro'
    })

     const conItems = this.props.items.filter(function(item) {
      return item.category == 'con'
    })

     const proWeights = proItems.map(item => item.weight)   

     var proWeightsNum = proWeights.map(function(weight) {
      return parseFloat(weight)
    })

    var proWeightsSum =   proWeightsNum.reduce(function(a,b) {    
      return a + b;}, 0)

     const conWeights = conItems.map(item => item.weight)   

     var conWeightsNum = conWeights.map(function(weight) {
      return parseFloat(weight)
    })

    var conWeightsSum =   conWeightsNum.reduce(function(a,b) {    
      return a + b;}, 0)

    var adviceGiven = proWeightsSum > conWeightsSum ? "Do it!" : "Don't do it!"

  	return (
          <div> 
          <h3>Items </h3> 
             <AddItem decision = {this.state.currentDecisionId} /> 
            <br />                           
            <div> 
             {this.props.items.length > 0 ? <ItemList items={this.props.items} currentUser={this.state.currentUser} currentDecisionId={this.state.currentDecisionId} /> : <h4>Nothing yet...</h4>}  
            </div>   
             
        <h3> Pros: {proWeightsSum} </h3>                                             
        <h3> Cons: {conWeightsSum} </h3>    
        <h3> Advice: {adviceGiven} </h3>                                             
          
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