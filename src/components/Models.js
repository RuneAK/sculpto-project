import React from 'react';
import {userService} from '../services/UserService';

class Models extends React.Component {
    constructor(){
        super();
        this.state = {
            models: '',
            token: userService.getToken()
        };
    }

    async componentDidMount (){
        var token = this.state.token;
        if(token){
            var models = await this.getModels(token);
            this.setState({
            models: models
            });
        }
    }

    getModels(token) {
        var proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
        const requestOptions = {
            method: 'GET',
            headers: {'Authorization': 'Token '+token},
        };
    
        return fetch(proxyUrl+'https://api.sculpto.dk/rest/models/?page=1', requestOptions)
        .then(function(response) {
            return response.json();
          }).then(function(data) {
            return data;
          });
    }

    render(){
        return(
            <div>
                <h2>Models</h2>
                {this.state.token ? null : <p>You must login to access the models</p>}
                <pre>
                {this.state.token ? JSON.stringify(this.state.models, null, 2) : null}
                </pre> 
            </div>
        )
    }
}

export default Models;