import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDecision } from '../actions/decisionActions.js'
import {
 Redirect
} from 'react-router-dom'




class AddDecision extends Component {

    constructor(props) {
        super(props)
          this.state = {          
            


        }
    }

    componentDidMount() {
    
    const current_user_string = localStorage.getItem('current_user')
    var currentUser = JSON.parse(current_user_string)

    console.log('currentUser componentdidmoutn', currentUser)
    if (currentUser) {
      this.setState({
      currentUser: currentUser, 
      loggedin: true
    }) 
    } 
  }

    handleInputChange(event) {

        const { value, name } = event.target

        this.setState({
            [name]: value,
        });
    }

    handleOnSubmit(event){
      event.preventDefault()            
      let decision = Object.assign({}, this.state)
      this.props.addDecision(this.state.currentUser.id, decision)
      
   }


    render() {
         console.log('submitsuccess', this.props.decisions.submitSuccess)

         if (this.props.decisions.submitSuccess) {
      		return  <Redirect to = '/decisions' /> 
    	 } else 
  

        return (
          <div>
          
                  <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <input
                      type="text"
                      name="title"
                      onChange={(event) => this.handleInputChange(event)}              
                      placeholder="Title"/>
                    
                  
                  <button type="submit" >Submit </button>
                </form>      

              

                


              
        </div>
      )

    }
}



function mapDispatchToProps(dispatch){
  return {addDecision: bindActionCreators(addDecision, dispatch)}
}

function mapStateToProps(state){
  
  return { decisions: state.decisions}
}

AddDecision = connect(mapStateToProps, mapDispatchToProps)(AddDecision)


export default AddDecision






