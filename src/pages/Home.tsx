import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import './Home.scss';
import { HOME } from '../routes';

class Home extends Component<RouteComponentProps> {

    componentDidMount() {
        if (this.props.location.pathname !== HOME) {
            this.props.history.push(HOME);
        }
    }


    render() {
        return (
            <div id="wrapper" className="home">
                Home works !
            </div>
        );
    }
}

export default withRouter(Home);
