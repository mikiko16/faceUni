import React, { Component } from 'react';
import ShowProfiles from './ShowProfiles'
import requester from '../../infrastructure/requester'

class AllUsers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profiles:[]
        }
    }

    getProfiles = () => {
        requester.get('appdata', 'info', 'kinvey').then(res => this.setState({ profiles: res }))
    }

    componentDidMount() {
        this.getProfiles()
    }

    render = () => {
        console.log(this.state.profiles)
        return(
            <section id="viewCatalog">
                {this.state.profiles.map(p => <ShowProfiles key={p._id} {...p} />)}
            </section>
        )
    }
}

export default AllUsers