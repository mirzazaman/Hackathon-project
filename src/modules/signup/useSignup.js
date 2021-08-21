import { useState } from "react"
import { useDispatch } from "react-redux"
import { signupUser } from '../../store/actions/AuthAction'


export default function useSignup() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const [signupState, setSignupState] = useState(false)

    const enterHandle = (e) => {
        if (e.charCode === 13) {
            signupHandler()
        }
    }

    const signupHandler = () => {
        if (email.length === 0 || password.length === 0 || username.length === 0) {
            return

        } else if (password === confirmPassword && password.length >= 6) {

            let data = {
                username,
                email,
                password
            }
            dispatch(signupUser(data, setSignupState))

            setEmail('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');

        } else {
            alert('Password Wrong')
        }

    }


    return [enterHandle, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, username, setUsername, signupHandler, signupState]
}