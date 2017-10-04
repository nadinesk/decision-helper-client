import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItem } from '../actions/itemActions.js'
import {
 Route,
 Redirect
} from 'react-router-dom'
import  Items  from './Items'



class AddItem extends Component {

    constructor(props) {
        super(props)
          this.state = {          
            

        }
    }

    componentDidMount() {
    
      const current_user_string = localStorage.getItem('current_user')
      var currentUser = JSON.parse(current_user_string)
      if (currentUser) {
        this.setState({
        currentUser: currentUser,     
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
      let item = Object.assign({}, this.state)
      debugger
      this.props.addItem(this.state.currentUser.id, this.props.decision, item)
      
   }


    render() {
         
         
        return (
          <div>
          
                  <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <input
                      type="text"
                      name="description"
                      onChange={(event) => this.handleInputChange(event)}              
                      placeholder="Description"/>

                     <input
                      type="numeric"
                      name="weight"
                      onChange={(event) => this.handleInputChange(event)}              
                      placeholder="Weight"/>

                      <input
                      type="text"
                      name="category"
                      onChange={(event) => this.handleInputChange(event)}              
                      placeholder="Category"/>
                    
                  
                  <button type="submit" >Submit </button>
                </form>      

                


              
        </div>
      )

    }
}



function mapDispatchToProps(dispatch){
  return {addItem: bindActionCreators(addItem, dispatch)}
}

function mapStateToProps(state){
  
  return { items: state.items}
}

AddItem = connect(mapStateToProps, mapDispatchToProps)(AddItem)


export default AddItem







