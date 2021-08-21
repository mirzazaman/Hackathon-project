import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../store/actions/DbAction";

export default function useUpdateForm() {
    const [open, setOpen] = useState(false);
    const [updateTask, setUpdateTask] = useState('')
    const dispatch = useDispatch()
    const uid = useSelector(store => store.AuthReducer.user.uid)

    const enterHandle = (e, item) => {
        if (e.charCode === 13) {
            updateHandler(item)
        }
    }

    const handleClickOpen = (item) => {
        setUpdateTask(item.task)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateHandler = (item) => {
        if (updateTask.length === 0) {
            return

        } else {
            let data = {
                task: updateTask,
            }
            let docID = item.docID
            dispatch(updateData(data, docID, uid))
        }

        handleClose()
    }

    return [enterHandle, open, handleClickOpen, handleClose, updateHandler, updateTask, setUpdateTask]
}