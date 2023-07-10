//DEFAULTS
import { useState, useEffect, createContext } from "react";
//ROUTES
import { RouterProvider } from "react-router-dom";
import Routes from './routes';
//CONTEXTS
import { AuthProvider } from './contexts/AuthContext';



export default function App() {
    return ( 
        <AuthProvider>
            <RouterProvider router={Routes} />
        </AuthProvider>      
    );
}