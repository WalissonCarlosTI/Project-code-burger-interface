import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "../containers/Login";
import Register from "../containers/Register";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route Component={Login} path="/login" />
                <Route Component={Register} path="/cadastro" />
            </Switch>
        </Router>
    )

}

export default Routes