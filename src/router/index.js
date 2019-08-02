import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Index from '../components/Index'
import Details from '../components/Details'
import Login from '../components/Login'
import Register from '../components/Register'
import '../font/iconfont.css'
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/details/:id" component={Details} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        );
    }
}

export default Router;