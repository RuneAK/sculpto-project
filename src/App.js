import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Models from './components/Models';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <ul>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/logout">
                <Button>Logout</Button>
              </Link>
              <Link to="/models">
                <Button>Models</Button>
              </Link>
            </ul>

            <Switch>
              <Route exact path="/">
                <Login/>
              </Route>
              <Route path="/login">
                <Login/>            
              </Route>
              <Route path="/logout">
                <Logout/>    
              </Route>
              <Route path="/models">
                <Models/>            
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
