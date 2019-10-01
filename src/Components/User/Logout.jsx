import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import requester from '../../infrastructure/requester'
import observer from '../../infrastructure/observer';

class Logout extends Component {
    
    logout = () => {
        requester.post('user', '_logout', 'kinvey')
        observer.trigger(observer.events.notification, { type: '', message: "" })
        sessionStorage.clear()
    }

    render = () => {
        this.logout()
        return <Redirect to='/' />
    }
}

export default Logout;