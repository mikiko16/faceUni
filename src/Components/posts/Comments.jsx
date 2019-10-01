import React, { Component } from 'react';
import '../../styles/login.css'

class Comments extends Component{

    render = () => {
        return(
            <div className="login">
                {this.props.name} commented: {this.props.comment}
            </div>
        )
    }
}

export default Comments