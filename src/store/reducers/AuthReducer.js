import { LOGOUT_USER, LOGIN_USER, LOGOUT_REST, LOGIN_REST } from "../../constants/Types";


let initialState = {
    user: null,
    isUserLogin: false,
    isRestLogin: false,
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                isUserLogin: true
            }

        case LOGOUT_USER:
            return {
                ...state,
                user: action.payload,
                isUserLogin: false
            }
        case LOGIN_REST:
            return {
                ...state,
                user: action.payload,
                isRestLogin: true
            }

        case LOGOUT_REST:
            return {
                ...state,
                user: action.payload,
                isRestLogin: false
            }

        default:
            return state;
    }
}