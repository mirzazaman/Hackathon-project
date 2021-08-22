import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getData } from '../../store/actions/DbAction'
import { RestaurantList } from "../../components/restaurantList/RestaurantList"

export default function useRestaurants() {
    const dispatch = useDispatch()
    const [taskState, setTaskState] = useState(false)
    // const uid = useSelector(store => store.AuthReducer.user.uid)

    useEffect(() => {
        // dispatch(getData(setTaskState, uid))
    }, [])

    return [taskState, RestaurantList]
}