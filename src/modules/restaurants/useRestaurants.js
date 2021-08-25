import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRest } from '../../store/actions/DbAction'
// import { RestaurantList } from "../../components/restaurantList/RestaurantList"

export default function useRestaurants() {
    const dispatch = useDispatch()
    const [taskState, setTaskState] = useState(false)
    const RestaurantList = useSelector(store => store.DbReducer.restList)

    useEffect(() => {
        dispatch(getRest(setTaskState))
    }, [])

    return [taskState, RestaurantList]
}