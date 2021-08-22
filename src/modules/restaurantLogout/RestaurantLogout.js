import React from 'react'
import useRestaurantLogout from './useRestaurantLogout'
import { Button, CircularProgress } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default function RestaurantLogout() {
    const [logoutHandler, logoutState] = useRestaurantLogout()

    return (
        <div>
            <div style={styles.textDiv}>
                <h1 style={styles.text}><b><i>RESTAURANT LOGOUT</i></b></h1>
            </div>
            {
                logoutState ? <center><CircularProgress style={{ color: "#030504", marginTop: 10 }} size={50} /></center> :

                    <center>
                        <Button style={{ color: "red", marginTop: 10 }} onClick={logoutHandler} ><ExitToAppIcon />Logout</Button>
                    </center>
            }
        </div>
    )
}

const styles = {
    text: {
        color: '#030504',
        textAlign: 'center'
    },
    textDiv: {
        marginTop: 100,
        marginBottom: 50,
        borderBottom: 'ridge',
        backgroudColor: "white"
    },
}