import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home';
import { Switch, Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    RENT A GAME
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </Router>
                </header>
            </div>
        );
    }
}

export default App;
