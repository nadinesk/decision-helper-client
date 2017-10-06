import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Navigation extends Component {

  constructor(props) {
    super(props)

	this.state = {
		currentUser: '', 
		loggedin: false
}
    this.handleLogout = this.handleLogout.bind(this)
  }


 handleLogout() {
	   localStorage.removeItem('current_user')
	   this.props.loggedin = false

  }

  render() {
    console.log('this.props navbar', this.props)
    return (
        <Navbar>
          <Navbar.Header> 
            <Navbar.Brand> 
              <a href="/">Decide</a>
            </Navbar.Brand> 
          </Navbar.Header> 
         
          {
            this.props.loggedin ?          
               <Nav> 
                <NavItem href="/decisions"> Decisions </NavItem>
                <NavItem href="/user"> {this.props.currentUser.username}</NavItem>
                <NavItem href="/" onClick={this.handleLogout}>Log Out</NavItem>
              </Nav>
            :
              <Nav>
                <NavItem href="/signup">Signup</NavItem>
                <NavItem href="/login">Login</NavItem>
              </Nav>  
          }
          
        </Navbar>
    )
  }
}

export default Navigation

