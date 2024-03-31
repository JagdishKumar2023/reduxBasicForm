// reducers.js
const initialState = {
  formData: {
    name: "",
    email: "",
  },
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.fieldName]: action.value,
        },
      };
    case "SUBMIT_FORM":
      // Handle form submission
      return initialState; // Reset form data after submission
    default:
      return state;
  }
};

export default formReducer;
