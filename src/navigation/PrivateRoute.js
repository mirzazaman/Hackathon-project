import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, loginState, ...rest }) {
    return (
        <Route {...rest} render={() => loginState ?  <Component /> : <Redirect to={"/login"} />} />
    )
}
