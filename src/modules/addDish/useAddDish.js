import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addData } from "../../store/actions/DbAction"

export default function useAddDishies() {
    const [dishName, setDishName] = useState('')
    const dispatch = useDispatch()
    const [addTaskState, setAddTaskState] = useState(false)

    const enterHandle = (e) => {
        if (e.charCode === 13) {
            addDishHandle()
        }
    }

    const addDishHandle = () => {
        if (dishName.length === 0) {
            return

        } else {
            let data = {
                dishName,
            }
            dispatch(addData(data, setAddTaskState))

            dishName('')
        }
    }

    return [dishName, setDishName, enterHandle, addDishHandle, addTaskState]
}