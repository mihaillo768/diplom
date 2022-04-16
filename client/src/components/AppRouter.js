//import React from "react";
import {Switch, Route, Routes, Redirect, Router} from 'react-router-dom'
import {authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const isAuth = false
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {isAuth && publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
        </Switch>
    );
};

export default AppRouter;