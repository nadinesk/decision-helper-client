import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDecision } from '../actions/decisionActions.js'
import {
 Redirect
} from 'react-router-dom'
import { Form, FormGroup, ControlLabel, Col, FormControl, Button, Grid, Row } from 'react-bootstrap'



class AddDecision extends Component {

    constructor(props) {
        super(props)
          this.state = {          
            
                        formErrors: {title: ''},
            titleValid: false,
            formValid: false

        }
    }

    componentDidMount() {
      
       document.body.style.backgroundColor = "#e5ffe5";
    }

   

    handleInputChange(event) {

        const { value, name } = event.target

        this.setState({
            [name]: value,
        }, () => { this.validateField(name, value) });
    }

    handleOnSubmit(event){
      event.preventDefault()            
      let decision = Object.assign({}, this.state)
      this.props.addDecision(this.props.currentUser.id, decision)
      this.setState({
        title: '', 
         
         formValid: false
      })
      event.target.reset()
      
   }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let titleValid = this.state.titleValid;
    
      switch(fieldName) {
        case 'title':
          titleValid = value.length !== ''; 
          fieldValidationErrors.title = titleValid ? '' : ' must include a book title';
          break;      
        default:
          break;
    }
      this.setState({formErrors: fieldValidationErrors,
        titleValid: titleValid,        
      }, this.validateForm);
  }

    validateForm() {
      this.setState({formValid: this.state.titleValid});
    }

    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }



    render() {
        
        return (
          
          <div> 
              <form onSubmit={this.handleOnSubmit.bind(this)}>
                <FormGroup>
                <FormControl
                  type="text"
                  name="title"
                  onChange={(event) => this.handleInputChange(event)}              
                  placeholder="Enter a question"/>
                </FormGroup>
                  <Button type="submit" disabled={!this.state.formValid} >Submit </Button>
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







