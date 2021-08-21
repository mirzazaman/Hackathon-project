import { LOGOUT, LOGIN } from "../../constants/Types";


let initialState = {
    user: null,
    isUserLogin: false
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                isUserLogin: true
            }

        case LOGOUT:
            return {
                ...state,
                user: action.payload,
                isUserLogin: false
            }

        default:
            return state;
    }
}