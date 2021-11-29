const initialState = {};

export default  (state = initialState, action) => {
  switch (action.type) {
    case 'PROFESSIONAL_REQUEST':
      return {
        ...state,
        isLoading: true,
        professional: false,
        error: false,
      };
    case 'PROFESSIONAL_SUCCESS':
      return {
        ...state,
        isLoading: false,
        professional: action.professional,
      };
    case 'PROFESSIONAL_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
