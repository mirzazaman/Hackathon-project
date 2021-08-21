import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addData } from "../../store/actions/DbAction"

export default function useAddTasks() {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const uid = useSelector(store => store.AuthReducer.user.uid)
    const [addTaskState, setAddTaskState] = useState(false)

    const enterHandle = (e) => {
        if (e.charCode === 13) {
            taskHandler()
        }
    }

    const taskHandler = () => {
        if (task.length === 0) {
            return

        } else {
            let data = {
                task,
            }
            dispatch(addData(data, uid, setAddTaskState))

            setTask('')
        }
    }

    return [task, setTask, enterHandle, taskHandler, addTaskState]
}