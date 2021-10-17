import React from 'react';
import { Redirect, Route } from "react-router"
import useAuth from "../../../hooks/useAuth"
import Login from '../Login';

const PrivateRoute =({ children, ...rest }) => {
    const {user} = useAuth();
    console.log(user);
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
}
export default PrivateRoute;