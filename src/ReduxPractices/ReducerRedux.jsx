const initialState = {
  inputValue: {
    name: "",
    email: "",
  },
};
// console.log(initialState);

export const ReducerRedux = (state = initialState, action) => {
  switch (action) {
    case "INPUTVALUE":
      return {
        ...state,
        inputValue: {
          ...state.inputValue,
          [action.fieldName]: action.value,
        },
      };
    case "SUMITFORM":
      return {
        initialState,
      };
    default:
      return state;
  }
};
export default ReducerRedux;
