
import { combineReducers } from 'redux';
import signupState from './Signup'
import loginState from './Login'

const rootReducer = combineReducers({
    signupState,
    loginState,
})
export default rootReducer;