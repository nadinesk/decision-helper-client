import React, { Component } from 'react';


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
	}
  
  handleOnClick() {
  	  localStorage.removeItem('current_user')


  }
  
  render() {
  	  console.log('home currentUser', this.state)	
      return (
      <div> 
        <h3 className="errorText"> Welcome </h3> 
        
       </div> 
  
    );
  }
}



export default Home

