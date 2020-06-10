import React from 'react';

const Input = ({ input, meta, label, placeholder }) => {
  console.log("meta", meta)
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          placeholder={placeholder}
          {...input}
          className={meta.touched && meta.error ? "input is-danger" : "input"}
        />
      </div>
    </div>
  );
};

export default Input;
