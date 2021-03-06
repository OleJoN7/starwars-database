import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({user,component:Component,...rest}) => {
    return (
        <Route {...rest} render={props => {
            return (
                user ? <Component user={user} {...props}/>
                : <Redirect to='/signin'/> 
            )
          }}
        /> 
    )
}

export default PrivateRoute;