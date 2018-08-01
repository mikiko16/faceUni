import React, { Component } from 'react';
import requester from '../../infrastructure/requester';

class HomeUser extends Component {

    constructor(props){
        super(props);

        this.state = {
            name:''
        }
    }

    componentDidMount () {
        requester.get('appdata', 'info/' + sessionStorage.getItem('postId'), 'kinvey').then(res => {
            this.setState({name: res.firstName})
            console.log(res)
        })
    }

    render = () => {
        return (
            <div>
                <div className="bday">Name</div>
                <div>{this.state.name}</div>
            </div>
        )
    }
}

export default HomeUser;