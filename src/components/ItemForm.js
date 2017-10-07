import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItem } from '../actions/itemActions.js'
import {
 Route,
 Redirect
} from 'react-router-dom'
import { Form, FormGroup, ControlLabel, Col, FormControl, Button, Grid, Row } from 'react-bootstrap'
import  Items  from './Items'
import { FormErrors } from './FormErrors';



class AddItem extends Component {

    constructor(props) {
        super(props)
           this.state = {          
            category: 'pro', 
             
            description: '', 
            weight: '',
            weightValid: false, 
            descriptionValid: false, 
            formValid: false
           
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
        },  () => { this.validateField(name, value) });
    }

    handleOnSubmit(event){
      event.preventDefault()            
      let item = Object.assign({}, this.state)
      
      this.props.addItem(this.state.currentUser.id, this.props.decision, item)

    
        event.target.reset()
        this.setState({
          description: '', 
          weight: 0, 
          formValid: false
        })

   }

    validateField(fieldName, value) {
      
      let descriptionValid = this.state.descriptionValid;
      let weightValid = this.state.weightValid;
    
      switch(fieldName) {
        case 'description':
          descriptionValid = value.length > 0;           
         case 'weight':
          weightValid = value > 0; 
        default:
          
    }
      this.setState({
        descriptionValid: descriptionValid,  
        weightValid: weightValid,
      }, this.validateForm);
  }

   validateForm() {
     
      if (!this.state.descriptionValid  || !this.state.weightValid ) {
        this.setState({
          formValid: false
        });
      } else {
         this.setState({
          formValid: true
        })
      }
    }

    render() {
         
         
        return (
          <div>
                 
                  <form inline onSubmit={this.handleOnSubmit.bind(this)}>
                    <FormGroup >
                      <FormControl                        
                        type="text"
                        name="description"
                        onChange={(event) => this.handleInputChange(event)}              
                        placeholder="Description"/>
                     </FormGroup>     
                 
                     
                     <FormGroup className="item-form-weight">
                     <FormControl                      
                      type="number"
                      name="weight"
                      onChange={(event) => this.handleInputChange(event)}              
                      placeholder="Weight"/>
                      </FormGroup> 
                     <FormGroup className="item-form-category">

                       <FormControl 
                       componentClass="select" 
                        name="category" 
                        value = {this.state.category} 
                        onChange={(event) => this.handleInputChange(event)} >                      
                          <option value="pro">pro</option>
                          <option value="con">con</option>
                      </FormControl>
                        </FormGroup>
                    
                  
    
                
  <Button type="submit" disabled={!this.state.formValid}>Submit </Button>              
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







