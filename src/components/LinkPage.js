import React, { Component } from 'react';
import {
  
  Link

} from 'react-router-dom'


class LinkPage extends React.Component {
  constructor(props) {
   super(props);
     this.state = {current_user: '', 
				  
				  };


   this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  componentDidMount() {
  	const current_user = localStorage.getItem('current_user')

  	this.setState({
  		current_user: current_user
  	})
  	
  }
  handleOnClick() {
  	  localStorage.removeItem('current_user')


  }
  
  render() {
  
      return (
      <div> 
        
        <ul> 
          <li> <Link to ="/signup"> Signup  </Link>  </li>
          <li><Link to ="/login"> Login </Link>  </li> 
        </ul> 
       </div> 
  
    );
  }
}



export default LinkPage

