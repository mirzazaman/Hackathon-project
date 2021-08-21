import { useDispatch, useSelector } from "react-redux"
import { deleteData } from "../../store/actions/DbAction";


export default function useTable() {
    const dispatch = useDispatch()
    const uid = useSelector(store => store.AuthReducer.user.uid)

    const deleteHandler = (item) => {
        let docID = item.docID
        dispatch(deleteData(docID, uid))
    }

    return [deleteHandler]
}