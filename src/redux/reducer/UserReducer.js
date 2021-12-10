import { USER } from "../action/actionType";
const intialState = {
    user: {},
}
const UserReducer = (state = intialState, action) => {
    switch (action.type) {
        case USER:
            return {
                ...state,
                user: action.data || state.user,
            };

        default:
            return state;
    }
    return state;
}
export default UserReducer
