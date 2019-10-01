import React, { Component } from 'react';
import observer from '../../infrastructure/observer'
import { Link } from 'react-router-dom'
import '../../styles/login.css'
import userService from '../../services/userService';

class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: null
        }
        observer.subscribe(observer.events.loginUser, this.userLoggedIn)
    }

    userLoggedIn = username => {
        this.setState({ username })
    }   

    checkForAdmin() {
        if(userService.isAdmin(sessionStorage.getItem('username'))) {
            return true;
        }
        else {
            return false;
        }
    }

    render = () => {
        const loggedInSection = 
        <div className='login'>
          <span id='username'>Hello, {sessionStorage.getItem('username')}</span><Link to='/logout' >Logout</Link>
        </div> 
        const adminSection = 
                <div className='login'>
                    You are Admin
                </div>
        return (
            <header>
                {sessionStorage.getItem('username') ? loggedInSection : null}
                {!this.checkForAdmin ? adminSection : null}
            </header> 
                )       
    }
}

export default Header;