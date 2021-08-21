import React from 'react'
import useLogout from './useLogout'
import { Button, CircularProgress } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default function Logout() {
    const [logoutHandler, logoutState] = useLogout()

    return (
        <div>
            <div style={styles.textDiv}>
                <h1 style={styles.text}><b><i>LOGOUT</i></b></h1>
            </div>
            {
                logoutState ? <center><CircularProgress style={{ color: "#ee5c23", marginTop: 10 }} size={50} /></center> :

                    <center>
                        <Button style={{ color: "red", marginTop: 10 }} onClick={logoutHandler} ><ExitToAppIcon />Logout</Button>
                    </center>
            }
        </div>
    )
}

const styles = {
    text: {
        color: '#ee5c23',
        textAlign: 'center'
    },
    textDiv: {
        marginTop: 20,
        marginBottom: 50,
        borderBottom: 'ridge',
        backgroudColor: "white"
    },
}