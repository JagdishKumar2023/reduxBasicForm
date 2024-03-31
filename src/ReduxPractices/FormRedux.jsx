import React from "react";
import { connect } from "react-redux";

const FormRedux = ({ inputValue, updateField, submitForm }) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    updateField(value, name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
          name="name"
          value={inputValue.name}
        />
        <input
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          name="email"
          value={inputValue.email}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = () => ({
  inputValue: state.inputValue,
});

export default connect(mapStateToProps(), { updateField, submitForm })(
  FormRedux
);
