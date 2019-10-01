import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/login.css';
import observer from '../../infrastructure/observer'

class Navigation extends Component {

    componentWillUnmount = () => {
        observer.trigger(observer.events.notification, { type: '', message: "" })
    }

    render = () => {
        return (
            <div id="menu">
            <div className="login">Navigation</div>
            <NavLink className="signbut" to='/myPosts' activeClassName="active">All Posts</NavLink>
            <NavLink className="signbut" to='/create' activeClassName="active">New Post</NavLink>
            <NavLink className="signbut" to='/editProfile' activeClassName="active">Edit My Profile</NavLink>
        </div>
        )
    }
}

export default Navigation