import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Navbar extends Component {

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
        <div>
          {
            this.props.loggedin ?
            <nav>
              <div >
                <ul >
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/" onClick={this.handleLogout}>Log Out</NavLink></li>
                  <li> <NavLink to="/user"> {this.props.currentUser.username}</NavLink></li>
                </ul>
              </div>
              
            </nav>

            :

            <ul >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/signup">Signup</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
          }
        </div>
    )
  }
}

export default Navbar

