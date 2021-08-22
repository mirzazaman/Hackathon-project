import { useState } from "react"
import { useDispatch } from "react-redux"
import { logoutRest } from "../../store/actions/AuthAction"


export default function useRestaurantLogout() {
    const dispatch = useDispatch()
    const [logoutState, setLogoutState] = useState(false)

    const logoutHandler = () => {
        dispatch(logoutRest(setLogoutState))
    }

    return [logoutHandler, logoutState]
}