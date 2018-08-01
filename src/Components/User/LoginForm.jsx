import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import requester from '../../infrastructure/requester'
import observer from '../../infrastructure/observer'

class Login extends Component {

  constructor(props){
    super(props)

    this.state = {
      username: null,
      password: null,
    }
  }

  login = ev => {
    ev.preventDefault()
    console.log(this.state)
    requester.post('user', 'login', 'basic', this.state).then(res => {
      sessionStorage.setItem('authtoken', res._kmd.authtoken);
      sessionStorage.setItem('username', res.username);
      sessionStorage.setItem('id', res._id);
      observer.trigger(observer.events.loginUser, res.username)
      console.log(res);
      if((res._kmd).hasOwnProperty('roles')){
        this.props.history.push('/allUsers')
      }
      else{
        this.props.history.push('/navigation')
      }
    })
  }

  setProps = ev => {
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
            </form>
          </div>
        )
    }  
}

export default Login;