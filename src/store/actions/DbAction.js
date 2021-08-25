import { db, storage } from "../../config/Firebase"
import { ADD_DISH, DELETE_DATA, GET_REST, UPDATE_DATA } from "../../constants/Types"


export const getRest = ( setTaskState) => async (dispatch) => {
    try {
        setTaskState(true)
        let res = await db.collection("restaurants").get()
        let data = []

        res.forEach((doc) => {
            data.push({
                docID: doc.id,
                ...doc.data()
            })
        })

        dispatch({
            type: GET_REST,
            payload: data
        })

    } catch (error) {
        console.log("Error in getData Action", error)

    } finally {
        setTaskState(false)
    }
}

export const addDish = (data, foodImage, restuarantID, setAddTaskState) => async (dispatch) => {
    try {
        setAddTaskState(true);
        const uploadTask = storage.ref('dish images/').child(`${foodImage.name}`).put(foodImage);
        uploadTask.on(
            "state changed",
            (snapshot) => { },
            (error) => {
                console.log("Error", error);
            },
            async () => {
                storage
                    .ref('dish images/')
                    .child(`${foodImage.name}`)
                    .getDownloadURL()
                    .then(async (url) => {
                        let obj = {
                            ...data,
                            restImage: url
                        }
                        await db.collection('Dishes').doc(restuarantID).collection('dishes').add(obj)
                        dispatch({
                            type: ADD_DISH,
                            payload: obj
                        })
                    });
            }
        );

    } catch (error) {
        console.log("Error in addDish Action", error)

    } finally {
        setAddTaskState(false)
    }
}

export const updateData = (data, docID, uid) => async (dispatch) => {
    try {
        await db.collection("Tasks").doc(uid).collection('tasks').doc(docID).update(data)

        dispatch({
            type: UPDATE_DATA,
            payload: { docID, data }
        })

    } catch (error) {
        console.log("Error in updateData Action", error)

    } finally {

    }
}

export const deleteData = (docID, uid) => async (dispatch) => {
    try {
        await db.collection("Tasks").doc(uid).collection('tasks').doc(docID).delete()

        dispatch({
            type: DELETE_DATA,
            payload: docID,
        })

    } catch (error) {
        console.log("Error in deleteData Action", error)

    } finally {

    }
}