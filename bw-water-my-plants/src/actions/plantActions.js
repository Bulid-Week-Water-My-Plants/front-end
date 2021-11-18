import axios from 'axios';

export const fetchPlant = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('#')
            .then(response => {
                dispatch(fetchSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchFail(error));
            });
    }
}


export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
    return ({ type: FETCH_START });
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (plants) => {
    return ({ type: FETCH_SUCCESS, payload: plants });
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
}

export const ADD_PLANT = "ADD_PLANT";
export const addPlant = (plant) => {
    return ({ type: ADD_PLANT, payload: plant });
}

export const SET_ERROR = "SET_ERROR";
export const setError = (value) => {
    return ({ type: SET_ERROR, payload: value });
}