import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import requester from '../../infrastructure/requester'

class Logout extends Component {
    componentDidMount() {
        sessionStorage.clear()
        requester.post('user', '_logout', 'kinvey')
        .then(res => this.props.history.push('/'))
        console.log('I am logout')
    }

    render = () => {
        return(
            <Redirect to='/'/>
        )
    }
}

export default Logout;