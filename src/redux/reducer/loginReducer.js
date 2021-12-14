import { EMAIL } from "../action/actionType";
const intialState = {
    email: {},
}
const loginReducer = (state = intialState, action) => {
    switch (action.type) {
        case EMAIL:
            return {
                ...state,
                email: action.data || state.email,
            };

        default:
            return state;
    }
    return state;
}
export default loginReducer

