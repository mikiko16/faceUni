import React, { Component } from 'react';
import '../../styles/login.css'
import requester from '../../infrastructure/requester'

class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            image: null,
            feel: null,
            location: null,
            likes: 0
        }
    }

    componentDidMount() {
        requester.get('appdata', 'info', 'kinvey')
        .then(res => {
            for(let i of res){
                if(i._acl.creator === sessionStorage.getItem('id')){
                    this.setState({firstName: i.firstName, lastName: i.lastName})
                }
            }
        }).then(console.log(this.state))
    }

    handleChange = (ev) => {
        ev.preventDefault()
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;
        this.setState({[fieldName]: fieldValue})
    }
    
    CreatePost = (ev) => {
        ev.preventDefault();        
        requester.post('appdata', 'posts', 'kinvey', this.state).then(this.props.history.push('/navigation'))
    }

    render = () => {
        return (
            <form id="login" className="login" onSubmit={this.CreatePost}>
                <label>Picture</label>
                <input name="image" className="login" onChange={this.handleChange} type="text" />
                <label>How do you Feel ?</label>
                <input name="feel" className="login" onChange={this.handleChange} type="text" />
                <label>Where are you ?</label>
                <textarea name="location" className="login" onChange={this.handleChange}></textarea>
                <input id="btnSubmitPost" className="loginBtn" value="POST" type="submit" />
            </form>
        )
    }
}

export default CreatePost