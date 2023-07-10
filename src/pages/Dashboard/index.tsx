//DEFAULTS
import React from 'react';
//ROUTES
import {
    Route,
    Link 
} from 'react-router-dom';
//COMPONENTS
import { Card } from '../../components/Card';


export function Dashboard () {

    return (
        <Card>
            <p>Dashboard</p>
            <Link to={'/'}>Teste</Link>
        </Card>
    )
}
