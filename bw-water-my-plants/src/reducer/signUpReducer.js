import { FETCH_SUCCESS, FETCH_FAIL, SET_USER } from "../actions/signupActions"

export const initialUserState = {
    users: [],
    error: '',
}

const signUpReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return ({
                ...state,
                users: action.payload,
            });
        case FETCH_FAIL:
            return ({
                ...state,
                error: action.payload,
            });
        case SET_USER:
            return ({
                ...state,
                users: [...state.users, action.payload],
            });
        default:
            return state;
    }
}

export default signUpReducer;