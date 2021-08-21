import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Tasks from '../modules/tasks/Tasks'
import Header from '../components/header/Header'
import NotFound from '../modules/notFound/NotFound'
import AddTasks from '../modules/addTasks/AddTasks'
import Login from '../modules/login/Login'
import Logout from '../modules/logout/Logout'
import Signup from '../modules/signup/Signup'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { useSelector } from 'react-redux'
import useNavigation from './useNavigation'
import { CircularProgress } from '@material-ui/core'


function Navigation() {
    const [reloginState] = useNavigation()
    const loginState = useSelector(store => store.AuthReducer.isUserLogin);

    return (
        <>
            <BrowserRouter>
                <Header />
                {
                    reloginState ?
                        <div style={{
                            width: '100%',
                            height: '80vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <CircularProgress style={{ color: '#ee5c23' }} size={100} />
                        </div>
                        :
                        <Switch>
                            <PublicRoute component={Signup} loginState={loginState} path="/signup" />
                            <PublicRoute component={Login} loginState={loginState} path="/login" />

                            <PrivateRoute component={Logout} loginState={loginState} path="/logout" />
                            <PrivateRoute component={AddTasks} loginState={loginState} path="/addtask" />
                            <PrivateRoute component={Tasks} loginState={loginState} path="/" exact />

                            <Route component={NotFound} />
                        </Switch>
                }
            </BrowserRouter>
        </>
    )
}

export default Navigation;