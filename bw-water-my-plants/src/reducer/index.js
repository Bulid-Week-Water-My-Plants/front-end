import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import plantReducer from './plantReducer';


const rootReducer = combineReducers({
    loginReducer,
    plantReducer,
    signUpReducer,
});

export default rootReducer;