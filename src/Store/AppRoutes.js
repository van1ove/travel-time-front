import Admin from '../Pages/Admin'
import Country from "../Components/Country"
import EuropeMap from "../Components/Europe"
import Sight from '../Components/Sight'
import Auth from '../Pages/Аuth'
import Registr from '../Pages/Registration'

import { ADMIN_ROUTE, COUNTRY_ROUTE, MAP_ROUTE, SIGHT_ROUTE, LOGIN_ROUTE, FORM_ROUTE, REGISTARTION_ROUTE } 
    from "./Consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FORM_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: MAP_ROUTE,
        Component: EuropeMap
    },
    {
        path: COUNTRY_ROUTE,
        Component: Country
    },
    {
        path: SIGHT_ROUTE,
        Component: Sight
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTARTION_ROUTE,
        Component: Registr
    }
]
