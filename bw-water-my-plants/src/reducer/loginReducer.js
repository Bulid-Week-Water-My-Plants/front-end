
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/loginActions";


const initialLoginState = {
    user: {
        email: "Lambda@gamil.com",
        password: "123",
        token: "",
    },
    loggedAuth: false,
    error: "",
}

const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return ({
                ...state,
                token: action.payload,
            });


        case LOGIN_SUCCESS:
            return ({
                ...state,
                user: action.payload,
                loggedAuth: true
            });

        case LOGIN_FAIL:
            return ({
                ...state,
                loggedAuth: false,
                error: action.payload.error,
            });

        default:
            return state;
    }
}

export default loginReducer;