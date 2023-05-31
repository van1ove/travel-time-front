import React, { useContext } from "react";
import { Routes, Route} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../Store/AppRoutes";
import { Context } from "..";
import Europe from '../Components/Europe'
import { MAP_ROUTE } from "../Store/Consts";

const AppRouter = () => {
    const {user} = useContext(Context)
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