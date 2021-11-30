
import { combineReducers } from 'redux';
import signupState from './Signup'
import loginState from './Login'
import profileState from './Profile'
import professionalState from './Professional';
import studentgroupState from './Studentgroup';
import forgetpasswordState from './Forgetpassword'
import sidebarState from './Sidebar';

const rootReducer = combineReducers({
    signupState,
    loginState,
    forgetpasswordState,
    studentgroupState,
    professionalState,
    sidebarState,
    
    
    
    profileState,

    
})
export default rootReducer;