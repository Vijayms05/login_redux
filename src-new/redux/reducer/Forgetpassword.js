const initialState = {};

export default  (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_REQUEST':
      return {
        ...state,
        isLoading: true,
        forget: false,
        error: false,
      };
    case 'PROFILE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        forgetpassword: action.forgetpassword,
      };
    case 'PROFILE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
