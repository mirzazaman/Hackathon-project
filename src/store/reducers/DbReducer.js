import { ADD_DISH, DELETE_DATA, GET_REST, UPDATE_DATA } from "../../constants/Types";

let initialState = {
    dishList: [],
    restList: []
}

export default function DbReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REST:
            return {
                ...state,
                restList: action.payload
            }

        case ADD_DISH:
            return {
                ...state,
                dishList: [...state.newState, action.payload]
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