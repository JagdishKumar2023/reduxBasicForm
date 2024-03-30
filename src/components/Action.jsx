// actions.js
export const updateField = (fieldName, value) => ({
  type: "UPDATE_FIELD",
  fieldName,
  value,
});

export const submitForm = (formData) => ({
  type: "SUBMIT_FORM",
  formData,
});
