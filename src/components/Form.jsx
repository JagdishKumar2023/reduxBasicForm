// Form.js
import React from "react";
import { connect } from "react-redux";
import { updateField, submitForm } from "./Action";

const Form = ({ formData, updateField, submitForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  formData: state.formData,
});

export default connect(mapStateToProps, { updateField, submitForm })(Form);
