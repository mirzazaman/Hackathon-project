import { LOGOUT_USER, LOGIN_USER, LOGOUT_REST, LOGIN_REST, SIGNUP_REST } from "../../constants/Types";


let initialState = {
    user: null,
    restList: [],
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

        case SIGNUP_REST:
            console.log('SIGNUP_REST', action.payload);
            return {
                ...state,
                user: action.payload.user,
                restList: [...state.restList, action.payload],
                isRestLogin: true
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