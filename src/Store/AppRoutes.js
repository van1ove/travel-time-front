import Admin from '../Pages/Admin'
import Country from "../Pages/Country"
import EuropeMap from "../Pages/EuropeMap"
import Sight from '../Pages/Sight'
import Auth from '../Pages/Auth'
import { ADMIN_ROUTE, COUNTRY_ROUTE, LOGIN_ROUTE, MAP_ROUTE, REGISTARTION_ROUTE, SIGHT_ROUTE, FORM_ROUTE } 
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
        Component: Auth
    }
]
