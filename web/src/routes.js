import React from 'react';

import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Login from "./pages/Login_cadastro/index.js";
import Sobre from "./pages/sobre";
import AreaInformativa from "./pages/Area_Informativa";
// import Home from "./pages/home";
import UserInfo from "./pages/user_info";
import Post from "./pages/post";
import Seen from './pages/form_visto';
import Found from './pages/form_encontrado';
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
                <Login/>
            </Route>
            <Route path="/sobre">
                <Sobre/>
            </Route>
            <Route path="/area-informativa">
                <AreaInformativa/>
            </Route>
            <PrivateRoute path="/post">
                <Post/>
            </PrivateRoute>
            <PrivateRoute path="/user_info">
                <UserInfo/>
            </PrivateRoute>
            <PrivateRoute path="/seen">
                <Seen />
            </PrivateRoute>
            <PrivateRoute path="/found">
                <Found />
            </PrivateRoute>
        </Switch>
    </BrowserRouter>
  )
}

export default Routes;