import React from 'react';
import {userService} from '../services/UserService';
import {Redirect} from 'react-router-dom';

class Logout extends React.Component {

    render() {
        var wasLoggedIn = userService.logout();
        console.log(wasLoggedIn)
        return (
            <div>
                <h2>Logout</h2>
                {wasLoggedIn ? <p>You have been logged out</p> : <Redirect to='/'/>}               
            </div>
        );
    }
}

export default Logout;