import React, { Component } from 'react';
import '../../styles/login.css'
import { Link } from 'react-router-dom'
import requester from '../../infrastructure/requester'

class ShowProfiles extends Component{

    delete = (ev) => {
        ev.preventDefault()
        requester.remove('appdata', `info/${this.props._id}`, 'kinvey')
        requester.remove('appdata', `posts/?query={"_acl.creator":"${this.props._acl.creator}"}`, 'kinvey')
        requester.remove('user', `${this.props._acl.creator}`, 'kinvey')
        .then(res => window.location.reload())        
    }
 
    render = () => {
        const deleteProfile = 
        <div className="login">
        <Link to='/allUsers' onClick={this.delete}>DELETE</Link>
        </div>
        return (
            <div>
                <div className="login">
                <Link to={`/details/${this.props._acl.creator}`}>
                {this.props.firstName} {this.props.lastName}
                </Link>
                </div>
                <img alt='login' src={this.props.url}/>
                {sessionStorage.getItem('username') === 'admin16@abv.bg' ? deleteProfile : null}
            </div>
        )
    }
}

export default ShowProfiles