import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import requester from '../../infrastructure/requester'

class Post extends Component {

    constructor(props){
        super(props)

        this.state = {
            newState: this.props
            }
    }

    likeButton = (ev) => {
        ev.preventDefault()
        let jasper = Object.assign({}, this.state.newState); 
        jasper.likes++
        this.updateLikes(jasper);
    }

    updateLikes(data) {
        requester.update('appdata', 'posts/' + this.props._id, 'kinvey', data)
        .then(res => this.setState({newState: res}))
    }

    render = () => {
            return (
            <article >
            <div className="login">
                <Link to={`/details/${this.props._acl.creator}`} className="login-submit">{this.props.firstName} {this.props.lastName} </Link> is feeling {this.props.feel} in {this.props.location}
            </div>
            <a href={this.props.url}>
                    <img alt='login' src={this.props.image}/>
            </a>
            <div className="textarea">
            <div className="submit-login">
            <button className="login" value={this.props.likes} onClick={this.likeButton}> {this.state.newState.likes} Likes</button>
            </div>
            </div>
            </article>
        )
    }
}

export default Post