import React, { Component } from 'react';
import requester from '../../infrastructure/requester'

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: [] 
        }
    }

    showInfo = () => {
        fetch(`https://baas.kinvey.com/appdata/kid_HkSr36xQm/info?query={"_acl.creator":"${this.props.match.params.id}"}&sort={"_kmd.ect": -1}`,
        {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' + sessionStorage.getItem('authtoken')
            }
        }).then(res => {return res.json()}).then(result => this.setState({profile: result[0]}))
    }

    componentDidMount = () => this.showInfo()

    render() {
        console.log(this.state.profile)
        return (
            <div >
                <img alt='login' src={this.state.profile.url}/>
                <div className="login">
                First Name: {this.state.profile.firstName}
                </div>
                <div className="login">
                Last Name: {this.state.profile.lastName}
                </div>
                <div className="login">
                Born on: {this.state.profile.day}.{this.state.profile.month}.{this.state.profile.year}
                </div>
                <div className="login">
                Grade: {this.state.profile.grade}
                </div>
                <div className="login">
                Sex: {this.state.profile.sex}
                </div>
                <div className="login">
                username: {this.state.profile.username}
                </div>
            </div>
        )
    }
}

export default Details;