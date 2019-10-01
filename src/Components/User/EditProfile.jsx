import React, {Component} from 'react';
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer';

class EditProfile extends Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            day: '',
            month: '',
            year: '',
            sex: '',
            grade: '',
            url: ''
        }

        const idItem = '';
    }

    Update = (ev) => {
        ev.preventDefault();
        console.log(this.idItem)
        requester.update('appdata', `info/${this.idItem}`, 'kinvey', this.state)
        this.props.history.push('/Navigation')
    }

    componentDidMount = () => {
        console.log(this.props)
        let idUser = sessionStorage.getItem('id')
        requester.get('appdata', `info?query={"_acl.creator":"${idUser}"}`, 'kinvey')
        .then(res => this.idItem = res[0]._id)
    }

    handleChange = (ev) => {
        ev.preventDefault();
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;
        this.setState({[fieldName]: fieldValue})
    }

    render = () => {
        return (
            <div onSubmit={this.Update}>
                <form>
                First Name:
                <input className="login" name="firstName" onChange={this.handleChange}>
                </input>
                Last Name:
                <input className="login" name="lastName" onChange={this.handleChange}>
                </input>
                Day:
                <input className="login" name="day" onChange={this.handleChange}>
                </input>
                Month:
                <input className="login" name="month" onChange={this.handleChange}>
                </input>
                Year:
                <input className="login" name="year" onChange={this.handleChange}>
                </input>
                Grade:
                <input className="login" name="grade" onChange={this.handleChange}>
                </input>
                Sex:
                <input className="login" name="sex" onChange={this.handleChange}>
                </input>
                Username
                <input className="login" name="username" onChange={this.handleChange}>
                </input>
                Url
                <input className="login" name="url" onChange={this.handleChange}>
                </input>
                <input type="submit" value="UPDATE" className="login-submit" />
                </form>
            </div>
        )
    }
}

export default EditProfile;