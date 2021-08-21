import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { reLogin } from "../store/actions/AuthAction"


export default function useNavigation() {
    const dispatch = useDispatch()
    const [reloginState, setReloginState] = useState(false)

    useEffect(() => {
        dispatch(
            reLogin(setReloginState)
        )
    }, [])

    return [reloginState]
}
