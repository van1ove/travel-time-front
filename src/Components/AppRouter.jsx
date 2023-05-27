import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from "../Store/AppRoutes";
import { MAP_ROUTE } from "../Store/Consts";
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

            <Route key={'/'} path={'/'} element={MAP_ROUTE} exact/>
        </Routes>
    );
}

export default AppRouter;   