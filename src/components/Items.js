import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchItems } from '../actions/itemActions.js'
import { Form, FormGroup, ControlLabel, Col, FormControl, Button, Grid, Row } from 'react-bootstrap'
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

           document.body.style.backgroundColor = "#e5ffe5";
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
          <Grid> 
            <Row> 
              <Col md={1}/>
              <Col md={10}>
                <h3>Items </h3> 
                <AddItem decision = {this.state.currentDecisionId} /> 
                <br />                                         
                
                {this.props.items.length > 0 ? <ItemList items={this.props.items}  proItems={proItems} conItems={conItems} currentUser={this.state.currentUser} currentDecisionId={this.state.currentDecisionId} /> : <h4>Nothing yet...</h4>}  
                
              </Col> 
              <Col md={1}/>
             </Row>
             <Row > 
              <Col md={2}/>
              <Col  md={4}>             
                <h3> Pros Weight Total: {proWeightsSum} </h3>                                             

              </Col>

              <Col  md={4}>             
                <h3> Cons Weight Total: {conWeightsSum} </h3>    
              </Col>
              <Col md={2}/>
              </Row>
              <Row> 
                <Col md={2}/>
                <Col className="item-list" md={8}>
                  <h3> Advice: {adviceGiven} </h3>                                             
                </Col> 
                <Col md={2}/>
              </Row>

        </Grid>
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