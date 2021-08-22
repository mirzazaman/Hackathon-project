import React from 'react'
import useLogin from './useUserLogin'
import { Button, CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Login() {
    const [enterHandle, email, setEmail, password, setPassword, loginHandler, loginState] = useLogin()

    return (
        <div>
            <div style={styles.textDiv}>
                <h1 style={styles.text}><b><i>LOGIN</i></b></h1>
            </div>
            {
                loginState ? <center><CircularProgress style={{ color: "#030504" }} size={50} /></center> :

                    <div style={styles.formDiv}>
                        <input
                            style={styles.input}
                            type="email"
                            placeholder="Email"
                            required
                            autoFocus
                            autoComplete="on"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            onKeyPress={(e) => { enterHandle(e) }}
                        />
                        <input
                            style={styles.input}
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            onKeyPress={(e) => { enterHandle(e) }}
                        />
                        <Button style={{ color: '#030504', marginTop: 40 }} onClick={loginHandler} >Login</Button>
                        <h5>or</h5>
                        <Button style={{ color: '#030504', marginTop: 5 }} ><Link to='/userSignup'>Signup</Link></Button>
                    </div>
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
        marginBottom: 40,
        borderBottom: 'ridge',
        backgroudColor: "white"
    },
    formDiv: {
        display: 'grid',
        width: '200px',
        margin: "auto",
        textAlign: 'center'
    },
    input: {
        border: 'none',
        borderBottom: 'ridge',
        fontSize: 15,
        padding: 7,
        marginTop: 20
    }
}