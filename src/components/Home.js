import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Col, FormControl, Button, Grid, Row } from 'react-bootstrap'


class Home extends React.Component {
  constructor(props) {
   super(props);
     this.state = {currentUser: '', 
				  
				  };


   this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  componentDidMount() {
	  	const current_user_string = localStorage.getItem('current_user')
	    const currentUser = JSON.parse(current_user_string)
	    
	    this.setState({
	      currentUser: currentUser
	    })  
       document.body.style.backgroundColor = "#e5ffe5";
	}
  
  handleOnClick() {
  	  localStorage.removeItem('current_user')


  }
  
  render() {
  	  
      return (
      <Grid> 
        <Row> 
          <Col md={4}/>
          <Col md={4}>
            <h1 class="mainTitle"> DECIDER </h1> 
          </Col>
          <Col md={4}/>
        </Row>
       </Grid> 
  
    );
  }
}



export default Home

