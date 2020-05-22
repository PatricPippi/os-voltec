import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteAdmin = ({component: Component, ...rest}) => {
    
    const token = localStorage.getItem('token')

    const id = localStorage.getItem('id')

    const isAdmin = localStorage.getItem('isAdmin')

    return (
        <Route
            {...rest}
            render={() => token && id && isAdmin == true
                ? <Component {...rest} />
                : <Redirect to="/" />
            }
        />
    )
}

export default PrivateRoute