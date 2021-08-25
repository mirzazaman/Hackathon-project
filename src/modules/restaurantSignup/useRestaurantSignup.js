import { useState } from "react"
import { useDispatch } from "react-redux"
import { signupRest } from "../../store/actions/AuthAction"


export default function useRestaurantSignup() {
    const [restName, setRestName] = useState('')
    const [restEmail, setRestEmail] = useState('')
    const [restImage, setRestImage] = useState('')
    const [restDesc, setRestDesc] = useState('')
    const [restCountry, setRestCountry] = useState('')
    const [restCity, setRestCity] = useState('')
    const [restPassword, setRestPassword] = useState('')
    const [restConfirmPassword, setRestConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const [signupState, setSignupState] = useState(false)

    const enterHandle = (e) => {
        if (e.charCode === 13) {
            restSignupHandler()
        }
    }

    const restSignupHandler = () => {
        if (restEmail.length === 0 || restPassword.length === 0 || restName.length === 0) {
            return

        } else if (restPassword === restConfirmPassword && restPassword.length >= 6) {

            let data = {
                role: 'admin',
                restName,
                restDesc,
                restCountry,
                restCity,
                restEmail,
                restPassword
            }

            dispatch(signupRest(data, restImage, setSignupState))

            setRestName('')
            setRestEmail('')
            setRestDesc('')
            setRestImage('')
            setRestCity('')
            setRestCountry('')
            setRestPassword('')
            setRestConfirmPassword('')

        } else {
            alert('Password Wrong')
        }

    }


    return [restSignupHandler, signupState, enterHandle, setRestConfirmPassword, restConfirmPassword, setRestPassword, restPassword, setRestCountry, setRestCity, setRestEmail, restEmail, setRestName, restName, setRestImage, restDesc, setRestDesc]
}