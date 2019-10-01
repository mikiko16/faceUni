import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './Components/User/LoginForm';
import Register from './Components/User/RegisterForm';
import CreateUser from './Components/User/CreateUser'
import HomeUser from './Components/User/HomeUser'
import Header from './Components/common/Header'
import Logout from './Components/User/Logout'
import Navigation from './Components/common/Navigation'
import Create from './Components/posts/CreatePost'
import PostList from './Components/posts/PostList';
import Details from './Components/User/Details';
import AllUsers from './Components/common/AllUsers'
import EditProfile from './Components/User/EditProfile';
import Notification from './Components/common/Notifications';
import Geolocation from './Components/common/Geolocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="content">
          <Notification />
          <Header />
          <Route path='/' exact component={Login}/> 
          <Route path='/register' component={Register}/>
          <Route path='/logout' component={Logout} />
          <Route path='/createUser' component={CreateUser} />     
          <Route path='/homeUser' component={HomeUser} />      
          <Route path='/navigation' component={Navigation} />
          <Route path='/create' component={Create} />
          <Route path='/myPosts' component={PostList} />
          <Route path='/details/:id' component={Details}/>
          <Route path='/allUsers' component={AllUsers} />
          <Route path='/editProfile' component={EditProfile} />
          <Route path='/geolocation' component={Geolocation}/>
        </main>
      </div>
    );
  }
}

export default App;
