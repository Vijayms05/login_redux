
import { combineReducers } from 'redux';
import signupState from './Signup'
import loginState from './Login'
import profileState from './Profile'
import professionalState from './Professional';
import studentgroupState from './Studentgroup';
import forgetpasswordReducer from './Forgetpassword'
import sidebarReducer from './Sidebar';

const rootReducer = combineReducers({
    signupState,
    loginState,
    forgetpasswordReducer,
    studentgroupState,
    professionalState,
    
    sidebarReducer,
    
    
    
    profileState,

    
})
export default rootReducer;