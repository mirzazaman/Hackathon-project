import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { reLoginRest, reLoginUser } from "../store/actions/AuthAction"


export default function useNavigation() {
    const dispatch = useDispatch()
    const [reloginState, setReloginState] = useState(false)

    useEffect(() => {
        dispatch(
            reLoginUser(setReloginState)
        );
        dispatch(
            reLoginRest(setReloginState)
        )
    }, [])

    return [reloginState]
}