const initialState = {};

export default  (state = initialState, action) => {
  switch (action.type) {
    case 'STUDENT_REQUEST':
      return {
        ...state,
        isLoading: true,
        studentgroup: false,
        error: false,
      };
    case 'STUDENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        studentgroup: action.studentgroup,
      };
    case 'STUDENT_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
