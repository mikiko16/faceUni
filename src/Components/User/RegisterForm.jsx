import React, { Component } from 'react';
import '../../styles/login.css'
import { NavLink } from 'react-router-dom'
import requester from '../../infrastructure/requester'
import observer from '../../infrastructure/observer'

class Register extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: null,
            password: null,
        }
    }

    register = ev => {
        ev.preventDefault()
        requester.post('user', '', 'basic', this.state)
        .then(res => {
            sessionStorage.setItem('authtoken', res._kmd.authtoken)
            sessionStorage.setItem('username', res.username)
            sessionStorage.setItem('id', res._id);
            observer.trigger(observer.events.loginUser, res.username)
            this.props.history.push('/createUser');
        })
    }

    setParams = ev => {
        ev.preventDefault()
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value
        this.setState({[fieldName]: fieldValue})
    }
    
    render = () => {
        return (
            <div>
            <title>FaceUni Register Form</title>
            <form className="login" onSubmit={this.register.bind(this)}>
            <h1>Please Register</h1>
            <h1>Enter Email</h1>
            <input type="text" name="username" onChange={this.setParams} className="login-input"/>
            <h1>Enter Password</h1>
            <input type="password" name="password" onChange={this.setParams} className="login-input"/>
            <input type="submit" value="Register" className="login-submit" />    
            <h1>or</h1>
            <NavLink to='/'>Login</NavLink>    
            </form>
            </div>
        )
    }  
}

export default Register;