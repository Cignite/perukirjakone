import React from 'react';

const Input = ({ input, meta, label, placeholder, disabled }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          disabled={disabled}
          placeholder={placeholder}
          {...input}
          className={meta.touched && meta.error ? "input is-danger" : "input" }
        />
      </div>
    </div>
  );
};

export default Input;
