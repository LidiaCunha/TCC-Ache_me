import React from 'react';

import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Login from "./pages/Login_cadastro/index.js";
import Sobre from "./pages/sobre";
import AreaInformativa from "./pages/Area_Informativa";
import Home from "./pages/home";
import UserInfo from "./pages/user_info";
import { isSignedIn } from './services/security';

const PrivateRoute = ({ children, location, ...rest }) => {
    return isSignedIn() ? (
        <Route {...rest}> {children} </Route>
    ):(
        <Redirect 
        to={{pathname: "/", state: {from: location},}}
        />
    );
};
    
function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <UserInfo/>
            </Route>
            <Route path="/sobre">
                <Sobre/>
            </Route>
            <Route path="/area-informativa">
                <AreaInformativa/>
            </Route>
            <PrivateRoute path="/home">
                <Home/>
            </PrivateRoute>
        </Switch>
    </BrowserRouter>
  )
}

export default Routes;