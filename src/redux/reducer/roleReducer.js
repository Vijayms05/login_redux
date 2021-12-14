import { ROLE } from "../action/actionType";
const intialState = {
    role: {},
}
const roleReducer = (state = intialState, action) => {
    switch (action.type) {
        case ROLE:
            return {
                ...state,
                role: action.data || state.role,
            };
        default:
            return state;
    }
    return state;
}
export default roleReducer