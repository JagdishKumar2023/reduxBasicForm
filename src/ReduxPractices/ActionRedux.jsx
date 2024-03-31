export const updateField = (fieldName, value) => ({
  type: "INPUTVALUE",
  fieldName,
  value,
});

export const submitForm = (inputValue) => ({
  type: "SUBMITFORM",
  inputValue,
});
