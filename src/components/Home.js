import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Col, FormControl, Button, Grid, Row } from 'react-bootstrap'


class Home extends React.Component {
  constructor(props) {
   super(props);
     this.state = {currentUser: '', 
				  
				  };


   
  }
  
  componentDidMount() {
	  	const current_user_string = localStorage.getItem('current_user')
	    
	    
	  
       document.body.style.backgroundColor = "#e5ffe5";
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

