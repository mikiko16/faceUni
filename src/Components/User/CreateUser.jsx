import React, { Component } from 'react';
import '../../styles/home.css'
import requester from '../../infrastructure/requester'

class CreateUser extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: sessionStorage.getItem('username'),
            firstName: '',
            lastName: '',
            day: '',
            month: '',
            year: '',
            sex: '',
            grade: '',
            url: ''
        }
    }

    setProps = ev => {
        ev.preventDefault();
        this.setState({username: sessionStorage.getItem('username')})
        requester.post('appdata', 'info', 'kinvey', this.state).then(res => {
            console.log(res)
            sessionStorage.setItem('postId', res._id)
            sessionStorage.setItem('firstName', res.firstName)
            sessionStorage.setItem('lastName', res.lastName)
            this.props.history.push('/Navigation')
        })
    }

    handleChange = ev => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;
        this.setState({[fieldName]: fieldValue})
    }

    render = () => {
        return(
<div id="contentwrapper" onSubmit={this.setProps}>
    <div id="content">      
      <div id="leftbod">                            
      </div>   
      <form>    
      <div id="rightbod">
        <div className="formbox">
        <div className="bday">Enter your name</div>
        <input type="text" className="inputbody in1" name="firstName" placeholder="First name" onChange={this.handleChange}/>
        <input type="text" className="inputbody in1 fr"  name="lastName" placeholder="Last name" onChange={this.handleChange}/>
        </div>
        <div className="formbox">
          <span data-type="selectors">
          <div className="formbox">
            <div className="bday">Your Birthday</div>
            <input type="number" className="inputbody in1" placeholder="Day" name="day" onChange={this.handleChange}/>
            <input type="number" className="inputbody in1" placeholder="Month" name="month" onChange={this.handleChange}/>
            <input type="number" className="inputbody in1" placeholder="Year" name="year" onChange={this.handleChange}/>
            </div>
            </span>
            </div>
            <div className="formbox mt1">
            <div className="bday">Enter your current sex</div>
            <select name="sex" className="selectbody" onChange={this.handleChange}>
            <option value="Male" selected="1">Male</option>
            <option value="Female" selected="2">Female</option>
            <option value="Gender" selected="3">Gender</option>
            </select>
            <div className="formbox">
            <div className="bday">Enter your current grade</div>
            <input type="text" className="inputbody in1" placeholder="Grade" name="grade" onChange={this.handleChange}/>
            </div>
            <div className="formbox">
            <div className="bday">Profile picture</div>
            <input type="text" className="inputbody in1" placeholder="URL" name="url" onChange={this.handleChange}/>
            </div>
            </div>
            <input type="submit" value="UPDATE" className="login-submit" />
      </div>
      </form>
     </div>
    </div>
        )
    }
}

export default CreateUser