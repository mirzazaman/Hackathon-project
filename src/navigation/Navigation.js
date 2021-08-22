import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import NotFound from '../modules/notFound/NotFound'
import UserLogin from '../modules/userLogin/UserLogin'
import UserLogout from '../modules/userLogout/UserLogout'
import UserSignup from '../modules/userSignup/UserSignup'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { useSelector } from 'react-redux'
import useNavigation from './useNavigation'
import { CircularProgress } from '@material-ui/core'
import Restaurants from '../modules/restaurants/Restaurants'
import RestaurantLogin from '../modules/restaurantLogin/RestaurantLogin'
import RestaurantLogout from '../modules/restaurantLogout/RestaurantLogout'
import RestaurantSignup from '../modules/restaurantSignup/RestaurantSignup'
import AddDish from '../modules/addDish/AddDish'


function Navigation() {
    const [reloginState] = useNavigation()
    const isUserLogin = useSelector(store => store.AuthReducer.isUserLogin);
    const isRestLogin = useSelector(store => store.AuthReducer.isRestLogin);

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
                            <CircularProgress style={{ color: '#030504' }} size={100} />
                        </div>
                        :
                        <Switch>
                            <PublicRoute component={RestaurantSignup} loginState={isRestLogin} path="/restaurantSignup" />
                            <PublicRoute component={RestaurantLogin} loginState={isRestLogin} path="/restaurantLogin" />
                            <PublicRoute component={UserSignup} loginState={isUserLogin} path="/userSignup" />
                            <PublicRoute component={UserLogin} loginState={isUserLogin} path="/userLogin" />

                            <PrivateRoute component={UserLogout} loginState={isUserLogin} path="/userLogout" />
                            <PrivateRoute component={RestaurantLogout} loginState={isRestLogin} path="/restaurantLogout" />
                            <PrivateRoute component={AddDish} loginState={isRestLogin} path="/addDish" />

                            <Route component={Restaurants} path="/" exact />
                            <Route component={NotFound} />
                        </Switch>
                }
            </BrowserRouter>
        </>
    )
}

export default Navigation;