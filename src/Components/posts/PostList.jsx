import React, { Component } from 'react';
import Post from './Post'
import requester from '../../infrastructure/requester'

class PostList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    getPosts = () => 
    requester.get('appdata', 'posts', 'kinvey')
    .then(res =>{
        this.setState({ posts: res })
    })

    componentDidMount = () => this.getPosts()

    render = () => {
        return (
            <section id="viewCatalog">
                {this.state.posts.map(p => <Post key={p._id} {...p} />)}
            </section>
            )
    }
}

export default PostList