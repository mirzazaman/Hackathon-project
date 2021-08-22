import { useState } from "react"
import { useDispatch } from "react-redux"
import { signupUser } from '../../store/actions/AuthAction'


export default function useSignup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
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
        if (email.length === 0 || password.length === 0 || username.length === 0 || phone.length === 0) {
            return

        } else if (password === confirmPassword && password.length >= 6) {

            let data = {
                role: 'user',
                email,
                username,
                phone,
                country,
                city,
                password
            }
            dispatch(signupUser(data, setSignupState))

            setEmail('');
            setUsername('');
            setPhone('');
            setCountry('');
            setCity('');
            setPassword('');
            setConfirmPassword('');

        } else {
            alert('Password Wrong')
        }

    }


    return [email, setEmail, username, setUsername, phone, setPhone, country, setCountry, city, setCity, password, setPassword, confirmPassword, setConfirmPassword, enterHandle, signupHandler, signupState]
}