import React from 'react'
import useSignup from './useSignup'
import { Button, CircularProgress } from '@material-ui/core'

export default function Signup() {
    const [enterHandle, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, username, setUsername, signupHandler, signupState] = useSignup()

    return (
        <div>
            <div style={styles.textDiv}>
                <h1 style={styles.text}><b><i>SIGNUP</i></b></h1>
            </div>
            {
                signupState ? <center> <CircularProgress style={{ color: "#ee5c23" }} size={50} /> </center> :

                    <div style={styles.formDiv}>
                        <input
                            style={styles.input}
                            type="username"
                            placeholder="Username"
                            required
                            autoFocus
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }}
                            onKeyPress={(e) => { enterHandle(e) }}
                        />
                        <input
                            style={styles.input}
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            onKeyPress={(e) => { enterHandle(e) }}
                        />
                        <input
                            style={styles.input}
                            type="password"
                            placeholder="New Password"
                            required
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            onKeyPress={(e) => { enterHandle(e) }}
                        />
                        <input
                            style={styles.input}
                            type="password"
                            placeholder="Confirm Password"
                            required
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                            onKeyPress={(e) => { enterHandle(e) }}
                        />
                        <Button style={{ color: '#ee5c23', marginTop: 40 }} onClick={signupHandler} >Signup</Button>
                    </div>
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
        marginBottom: 40,
        borderBottom: 'ridge',
        backgroudColor: "white"
    },
    formDiv: {
        display: 'grid',
        width: '200px',
        margin: "auto"
    },
    input: {
        border: 'none',
        borderBottom: 'ridge',
        fontSize: 15,
        padding: 7,
        marginTop: 20
    }
}