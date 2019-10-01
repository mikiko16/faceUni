import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import userService from '../../services/userService';

class Login extends Component {

  constructor(props){
    super(props)

    this.state = {
      username: null,
      password: null,
    }
  }

  login = (ev) => {
    ev.preventDefault()
    userService.login(this.state, {...this.props})
  }

  setProps = ev => {
    ev.preventDefault();
    let fieldName = ev.target.name;
    let fieldValue = ev.target.value;
    this.setState({[fieldName]: fieldValue})
  }
    
  render = () => {
        return (
          <div>
            <title>FaceUni Login Form</title>
            <form className="login" onSubmit={this.login}>
            <h1>Welcome to FaceUni</h1>
            <h1>Email</h1>
            <input type="email" name="username" onChange={this.setProps} className="login-input" />
            <h1>Password</h1>
            <input type="password" name="password" onChange={this.setProps} className="login-input" placeholder="Password" />
            <input type="submit" value="Login" className="login-submit" />
            <h1>or</h1>
            <NavLink to='/register'>Register</NavLink>
            <h1>or</h1>
            <NavLink to='/geolocation'>Show me Where Am I</NavLink>
            </form>
          </div>
        )
    }  
}

export default Login;