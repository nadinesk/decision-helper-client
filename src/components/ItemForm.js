import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItem } from '../actions/itemActions.js'
import {
 Route,
 Redirect
} from 'react-router-dom'
import  Items  from './Items'
import { FormErrors } from './FormErrors';



class AddItem extends Component {

    constructor(props) {
        super(props)
           this.state = {          
            category: 'pro', 
            formErrors: {description: ''},
            descriptionValid: false,
            weightValid: false,
            categoryValid: false,
            formValid: false, 
            description: '', 
            weight: ''
           
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
        }, () => { this.validateField(name, value) });
    }

    handleOnSubmit(event){
      event.preventDefault()            
      let item = Object.assign({}, this.state)
      
      this.props.addItem(this.state.currentUser.id, this.props.decision, item)

    
      this.setState({
        weight: 0, 
        descrption: '', 
        formValid: false
      })

        event.target.reset()

     

   }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let descriptionValid = this.state.descriptionValid;
      let weightValid = this.state.weightValid;
      let categoryValid = this.state.categoryValid;
    
      switch(fieldName) {
        case 'description':
          descriptionValid = value.length > 0; 
          fieldValidationErrors.description = descriptionValid ? '' : ' must include a description';
          
         case 'weight':
          weightValid = value > 0; 
          fieldValidationErrors.weight = weightValid ? '' : ' must include a weight';
         
       
        default:
          
    }
      this.setState({formErrors: fieldValidationErrors,
        descriptionValid: descriptionValid,  
        weightValid: weightValid,            
        categoryValid: categoryValid,      
      }, this.validateForm);
  }

    validateForm() {
     
       var vStatus = (this.state.weightValid == false || this.state.descriptionValid == false) ? false : true
       console.log('this.state.weightValid', !this.state.weightValid)
       console.log('this.state.descriptionValid', !this.state.descriptionValid)
       console.log(vStatus)

      this.setState({formValid: vStatus, 

            });
    }

    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }


    render() {
         
         
        return (
          <div>
                 <FormErrors formErrors={this.state.formErrors} />
                  <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <input
                      type="text"
                      name="description"
                      onChange={(event) => this.handleInputChange(event)}              
                      placeholder="Description"/>

                     <input
                      type="number"
                      name="weight"
                      onChange={(event) => this.handleInputChange(event)}              
                      placeholder="Weight"/>

                      <select name="category" value = {this.state.category} onChange={(event) => this.handleInputChange(event)} >
          <option value="pro">pro</option>
          <option value="con">con</option>
        </select>
                    
                  
                  <button type="submit" disabled={!this.state.formValid}>Submit </button>
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







