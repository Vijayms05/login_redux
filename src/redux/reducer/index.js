
import { combineReducers } from 'redux';
import signupState from './Signup'
import loginState from './Login'
import profileState from './Profile'
import professionalState from './Professional';
import studentgroupState from './Studentgroup';
import forgetpasswordReducer from './Forgetpassword'
import sidebarReducer from './Sidebar';
import loginReducer from './loginReducer';
import roleReducer from './roleReducer';

const rootReducer = combineReducers({
    signupState,
    loginState,
    forgetpasswordReducer,
    studentgroupState,
    professionalState,
    sidebarReducer,
    profileState,
    loginReducer,
    roleReducer,
})
export default rootReducer;