import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PublicRoute({ component: Component, loginState, ...rest }) {
    return (
        <Route {...rest} render={() => loginState ? <Redirect to={'/'} /> : <Component />} />
    )
}
