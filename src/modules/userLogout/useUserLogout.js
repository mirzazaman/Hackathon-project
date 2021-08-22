import { useState } from "react"
import { useDispatch } from "react-redux"
import { logoutUser } from "../../store/actions/AuthAction"


export default function useLogout() {
    const dispatch = useDispatch()
    const [logoutState, setLogoutState] = useState(false)

    const logoutHandler = () => {
        dispatch(logoutUser(setLogoutState))
    }

    return [logoutHandler, logoutState]
}