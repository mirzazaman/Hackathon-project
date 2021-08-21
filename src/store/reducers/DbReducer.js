import { ADD_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA } from "../../constants/Types";

let initialState = {
    newState: []
}

export default function DbReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                newState: action.payload
            }

        case ADD_DATA:
            return {
                ...state,
                newState: [...state.newState, action.payload]
            }

        case UPDATE_DATA:
            let updatedList = state.newState.map((doc) => {
                if (doc.docID === action.payload.docID) {
                    return { ...action.payload.data, ...action.payload.docID }

                } else { return doc }
            })
            return {
                ...state,
                newState: updatedList
            }

        case DELETE_DATA:
            let filteredList = state.newState.filter(doc => doc.docID !== action.payload)
            return {
                ...state,
                newState: filteredList
            }

        default:
            return state;
    }
}