import { auth, db } from '../../config/Firebase'
import { storage } from '../../config/Firebase'
import { LOGIN_USER, LOGOUT_USER, LOGIN_REST, SIGNUP_REST, LOGOUT_REST } from '../../constants/Types'

export const signupUser = (data, setSignupState) => async (dispatch) => {
    try {
        setSignupState(true)
        let res = await auth.createUserWithEmailAndPassword(data.email, data.password)
        await db.collection('users').add(data)

        if (res) {
            let user = res.user
            dispatch({
                type: LOGIN_USER,
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
                type: LOGIN_USER,
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

export const reLoginUser = (setReloginState) => async (dispatch) => {
    try {
        setReloginState(true)
        await auth.onAuthStateChanged((user) => {

            if (user) {
                dispatch({
                    type: LOGIN_USER,
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
            type: LOGOUT_USER,
            payload: null
        })

    } catch (error) {
        console.log("Error from logoutUser action", error);

    } finally {
        setLogoutState(false)
    }
}

// Restaurant Actions

export const signupRest = (data, restImage, setSignupState) => async (dispatch) => {
    try {
        setSignupState(true);
        let res = await auth.createUserWithEmailAndPassword(data.restEmail, data.restPassword)

        const uploadTask = storage.ref('restaurant images/').child(`${restImage.name}`).put(restImage);
        uploadTask.on(
            "state changed",
            (snapshot) => { },
            (error) => {
                console.log("Error", error);
            },
            async () => {
                storage
                    .ref('restaurant images/')
                    .child(`${restImage.name}`)
                    .getDownloadURL()
                    .then(async (url) => {
                        let user = res.user
                        var obj = {
                            ...data,
                            user,
                            restImage: url
                        }
                        var newData = {
                            ...data,
                            restImage: url
                        }

                        await db.collection('restaurants').add(newData)
                        dispatch({
                            type: SIGNUP_REST,
                            payload: obj
                        })
                    });
            }
        );

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('This user already have an account')
        }

    } finally {
        setSignupState(false)
    }
}

export const loginRest = (data, setLoginState) => async (dispatch) => {
    try {
        setLoginState(true)
        let res = await auth.signInWithEmailAndPassword(data.email, data.password)

        if (res) {
            let user = res.user
            dispatch({
                type: LOGIN_REST,
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

export const reLoginRest = (setReloginState) => async (dispatch) => {
    try {
        setReloginState(true)
        await auth.onAuthStateChanged((user) => {

            if (user) {
                dispatch({
                    type: LOGIN_REST,
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

export const logoutRest = (setLogoutState) => async (dispatch) => {
    try {
        setLogoutState(true)
        await auth.signOut()

        dispatch({
            type: LOGOUT_REST,
            payload: null
        })

    } catch (error) {
        console.log("Error from logoutUser action", error);

    } finally {
        setLogoutState(false)
    }
}