import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/login.css'

class Navigation extends Component {

    render = () => {
        return (
            <div id="menu">
            <div className="login">Navigation</div>
            <NavLink className="signbut" to='/myPosts' activeClassName="active">All Posts</NavLink>
            <NavLink className="signbut" to='/create' activeClassName="active">New Post</NavLink>
        </div>
        )
    }
}

export default Navigation