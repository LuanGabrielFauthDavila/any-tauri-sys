import React from "react";
import { 
    createBrowserRouter,
    RouterProvider,
    Route,
    Link 
} from "react-router-dom";

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';


const Routes = createBrowserRouter([
    {
        path: '/',
        element: (<Login></Login>)
    },
    {
        path: '/home',
        element: (<Home></Home>)
    },
    {
        path: '/dashboard',
        element: (<Dashboard></Dashboard>)
    }
])
export default Routes;