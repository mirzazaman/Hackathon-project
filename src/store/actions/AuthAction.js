import { auth, db } from '../../config/Firebase'
import { LOGIN, LOGOUT } from '../../constants/Types'

export const signupUser = (data, setSignupState) => async (dispatch) => {
    try {
        setSignupState(true)
        let res = await auth.createUserWithEmailAndPassword(data.email, data.password)
        await db.collection('Users').add(data)

        if (res) {
            let user = res.user
            dispatch({
                type: LOGIN,
                payload: user
            })
        }

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('This user already have an account')
        }

    } finally {
        setSignupState(false)
    }
}

export const loginUser = (data, setLoginState) => async (dispatch) => {
    try {
        setLoginState(true)
        let res = await auth.signInWithEmailAndPassword(data.email, data.password)

        if (res) {
            let user = res.user
            dispatch({
                type: LOGIN,
                payload: user
            })
        }

    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            alert('Wrong Password')
        }

    } finally {
        setLoginState(false)
    }
}

export const reLogin = (setReloginState) => async (dispatch) => {
    try {
        setReloginState(true)
        await auth.onAuthStateChanged((user) => {

            if (user) {
                dispatch({
                    type: LOGIN,
                    payload: user
                })
            }
        })

    } catch (error) {
        console.log('Error in relogin', error.code);

    } finally {
        setReloginState(false)
    }
}

export const logoutUser = (setLogoutState) => async (dispatch) => {
    try {
        setLogoutState(true)
        await auth.signOut()

        dispatch({
            type: LOGOUT,
            payload: null
        })

    } catch (error) {
        console.log("Error from logoutUser action", error);

    } finally {
        setLogoutState(false)
    }
}