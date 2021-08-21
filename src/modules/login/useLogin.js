import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../../store/actions/AuthAction"


export default function useLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const [loginState, setLoginState] = useState(false)

    const enterHandle = (e) => {
        if (e.charCode === 13) {
            loginHandler()
        }
    }

    const loginHandler = () => {
        if (email.length === 0 || password.length === 0) {
            return

        } else if (password.length >= 6) {
            let data = {
                email,
                password
            }
            dispatch(loginUser(data, setLoginState))

            setEmail('');
            setPassword('');

        } else {
            alert("Wrong password")
        }
    }


    return [enterHandle, email, setEmail, password, setPassword, loginHandler, loginState]
}