import { TOKEN } from "../action/actionType";
const intialState = {
    token: {},
}
const TokenReducer = (state = intialState, action) => {
    switch (action.type) {
        case TOKEN:
            return {
                ...state,
                token: action.data || state.token,
            };

        default:
            return state;
    }
    return state;
}
export default TokenReducer

