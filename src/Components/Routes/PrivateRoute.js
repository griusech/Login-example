import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useUsersState } from '../../context/UserContext'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { currentUser } = useUsersState()

    return (
        <Route {...rest}
            component={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
        />
    )
}

export default PrivateRoute
