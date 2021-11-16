import axios from 'axios';

export const fetchUsers = () => {
    return (dispatch) => {
        axios.get()
            .then(response => {
                console.log(response.data)
                dispatch(fetchSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchFail(error));
            });
    }
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (user) => {
    return ({ type: FETCH_SUCCESS, payload: users });
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
}

export const SET_USER = "SET_USER";
export const setUser = (user) => {
    return ({ type: SET_USER, payload: user })

}