import React, { useContext } from "react";
import { Routes, Route} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../Store/AppRoutes";
import { LOGIN_ROUTE, MAP_ROUTE } from "../Store/Consts";
import { Context } from "..";

const AppRouter = () => {
    const {user} = useContext(Context)
    //const {countries} = useContext(Context)
    console.log(user)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                 <Route key={path} path={path} Component={Component} exact/>)}
            
            {publicRoutes.map(({path, Component}) =>
                 <Route key={path} path={path} Component={Component} exact/>)}
        </Routes>
    );
}

export default AppRouter;   