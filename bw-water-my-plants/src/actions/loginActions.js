
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const loginRequest = (token) => {
    return ({ type: LOGIN_REQUEST, payload: token })
}

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = (credentials) => {
    return ({ type: LOGIN_SUCCESS, payload: credentials })
}


export const LOGIN_FAIL = "LOGIN_FAIL";
export const loginFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error })
}