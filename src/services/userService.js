import requester from '../infrastructure/requester';
import observer from '../infrastructure/observer';

const admins = ['admin16@abv.bg'];

function isAdmin(data){
    for(let i = 0; i < admins.length; i++){
        if(data === admins[i]){
            return true;
        }
    }
}

function login (data, props) {
    requester.post('user', 'login', 'basic', data).then(res => {
        sessionStorage.setItem('username', res.username)
        observer.trigger(observer.events.loginUser, res.username);
        observer.trigger(observer.events.notification, { type: 'success', message: "Successs." })
        sessionStorage.setItem('authtoken', res._kmd.authtoken)
        sessionStorage.setItem('id', res._id)
        if(isAdmin(res.username)){
            props.history.push('/allUsers')
        }
        else{
            props.history.push('/Navigation');
        }
        }).catch(err => observer.trigger(observer.events.notification,
             { type: 'error', message: err.responseJSON.description }))
}

function register(data, props){
    requester.post('user', '', 'basic', data)
        .then(res => {
            sessionStorage.setItem('authtoken', res._kmd.authtoken)
            sessionStorage.setItem('username', res.username)
            sessionStorage.setItem('id', res._id);
            observer.trigger(observer.events.loginUser, res.username)
            observer.trigger(observer.events.notification, { type: 'success', message: "Successs." })
            props.history.push('/createUser');
        }).catch(err => observer.trigger(observer.events.notification,
            { type: 'error', message: err.responseJSON.description }))
}

export default{
    login,
    register
}