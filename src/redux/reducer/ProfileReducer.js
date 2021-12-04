import { PROFILE } from "../action/actionType";
const intialState = {
    profile: {},
}
const ProfileReducer = (state = intialState, action) => {
    switch (action.type) {
        case PROFILE:
            return {
                ...state,
                profile: action.data || state.profile,
            };

        default:
            return state;
    }
    return state;
}
export default ProfileReducer

