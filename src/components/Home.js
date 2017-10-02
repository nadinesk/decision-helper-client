import React, { Component } from 'react';


class Home extends React.Component {
  constructor(props) {
   super(props);
     this.state = {current_user: '', 
				  
				  };


   this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  componentDidMount() {
	  	const current_user_string = localStorage.getItem('current_user')
	    const current_user = JSON.parse(current_user_string)
	    
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
        <h3 className="errorText"> Welcome, {this.state.current_user.username} </h3> 
        <button onClick={this.handleOnClick}> Logout </button> 
       </div> 
  
    );
  }
}



export default Home

