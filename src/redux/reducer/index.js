
import { combineReducers } from 'redux';
import signupState from './Signup'
import loginState from './Login'
import profileState from './Profile'
import forgetState from './Forgetpassword'
import professionalState from './Professional';
import studentgroupState from './Studentgroup';

const rootReducer = combineReducers({
    signupState,
    loginState,
    forgetState,
    studentgroupState,
    professionalState,
    profileState,
    
})
export default rootReducer;