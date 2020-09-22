import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {userService} from '../services/UserService';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
                [name]: value
            }
        );
    }

    async handleSubmit(event) {
        event.preventDefault();

        var res = await userService.login(this.state.username, this.state.password);
        
        this.setState({
            message: res ? 'Success' : 'Failed to login'
        });
        

    }

    render(){
        const { username, password } = this.state;
        return(
            <div>
                <h2>Login</h2>
                <p>{this.state.message}</p>
                {this.state.message === 'Success' ? <Redirect to='/models'/> : null}
                <form>
                    <div>
                        <TextField
                        label = "Username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <br/>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;