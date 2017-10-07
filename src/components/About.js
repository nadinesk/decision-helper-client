import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Col, FormControl, Button, Grid, Row } from 'react-bootstrap'


class Home extends React.Component {
 componentDidMount() {
    	
     
           document.body.style.backgroundColor = "#e5ffe5";
    }	



render() {
  	  
      return (
  
  
      <Grid> 
        <Row> 
          <Col md={2}/>
          <Col md={8}>
            <h1> About </h1> 
          </Col>
          <Col md={2}/>
        </Row>
        <Row> 
        <Col md={2} /> 
        <Col md={8}>
        <h3> Who </h3>
        The Decider is for anyone who needs help making a tough decision, or several of them, and/or anyone who just wants to keep track of their decisions. 
        <h3>What </h3> 
        <div> The Decider helps you make those hard decisions. You can enter pros and cons to a question you have to decide, and weight each item. </div> 
        <h3>When </h3>
        <div> The Decider can be used any time you have a tough decision to make. If you have entered the pros and cons to a previous decison on the Decider, you can also login to the app and see what led you to make the decision(s) you made. 
        </div>
        <h3> How </h3> 
        <div>
        Sign up with a username, login, and enter a question you need help deciding, and then click on that decision and start entering pros and cons. The Decider will provide advice based on all items entered, as you go along. 
        The Decider uses the magic of Javascript filter and maps to sum the pro and con weights entered, to provide advice on what to do. 
        </div>
        <div>
        <h3> Why </h3> 
        <div> I created the Decider because I need help making decisions. I can't be alone, right?  </div> 

        
        <h3> Tech  </h3> 
        <h4> Backend </h4> 
        <div>I created a Ruby on Rails Backend API for this app. The repo is <a href="https://github.com/nadinesk/decision-helper-api">here</a> . </div>

        <h4> Frontend </h4> 
        <div>I created the front-end with React and Redux. I used react-bootstrap for the design. The repo for the front-end is <a href="https://github.com/nadinesk/decision-helper-client">here </a> </div>

        
        <h4>Other </h4> 
        <div> I wrote about two previous iterations of this app I made <a href="https://nadinesk.github.io/react,/redux,/javascript,/coding/2017/09/25/decision-react-redux.html">here</a>, both building on the other. The first one uses only React; the second one uses React and Redux; this one uses React and Redux and persists the data with the backend API I created. 
        </div> 

        </div>

        </Col>
        <Col md={2} /> 
        </Row> 
       </Grid> 
  
)
  }


}

export default Home

