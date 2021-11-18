import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_PLANT, SET_ERROR } from "../actions/plantActions";

const initialPlantState = {
    plants: [
        {
            id: 1,
            name: "Dandelions",
            species: 'Taraxacum',
            water: true
        },
        {
            id: 2,
            name: "Cherry Blossom",
            species: "Sakura",
            water: true
        },
    ],
    loading: false,
    error: '',
}


const plantReducer = (state = initialPlantState, action) => {
    switch (action.type) {
        case FETCH_START:
            return ({
                ...state,
                loading: true,
                error: ''
            });

        case FETCH_SUCCESS:
            return ({
                ...state,
                plants: action.payload,
                loading: false
            });

        case FETCH_FAIL:
            return ({
                ...state,
                error: action.payload,
                loading: false
            });


        case ADD_PLANT:
            return ({
                ...state,
                plants: [...state.plants, {
                    id: state.plants.length + 1,
                    name: action.payload.name,
                    species: action.payload.species,
                    water: action.payload.water
                }]
            });


        case SET_ERROR:
            return ({
                ...state,
                error: action.payload
            });
        default:
            return state;
    }
}

export default plantReducer;