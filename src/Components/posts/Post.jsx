import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import requester from '../../infrastructure/requester';
import Comments from './Comments';

class Post extends Component {

    constructor(props){
        super(props)

        this.state = {
            newState: this.props,
            comment: '',
            comments: []
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

    addComment = (ev) => {
        ev.preventDefault()
        let newObj = new Object();
        newObj.name = sessionStorage.getItem('username');
        newObj.comment = this.state.comment
        let newObject = this.state.newState
        newObject.comments.push(newObj);      
        console.log(newObject)
        this.updateComments(newObject)
    }

    updateComments(data){
        requester.update('appdata', 'posts/' + this.props._id, 'kinvey', data)
        .then(res => this.setState({newState: res}))
    }

    handleChange = (ev) => {
        ev.preventDefault()
        console.log(ev.target.value);
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;
        this.setState({[fieldName]: fieldValue})
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
            <div>
            {this.state.newState.comments.map(p => <Comments key={p._id} {...p} />)}
            </div>
            </div>
            <form id="login" className="login" onSubmit={this.addComment}>
                <input name="comment" onChange={this.handleChange}></input>
                <button type="submit">Add Comment</button>
            </form>
            </div>
            </article>
        )
    }
}

export default Post