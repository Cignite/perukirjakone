import React from 'react';

const Input = ({ input, meta, label, placeholder, disabled, row, type }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea
          type="text"
          disabled={disabled}
          placeholder={placeholder}
          {...input}
          className={meta.touched && meta.error ? "textarea is-danger" : "textarea"}
        />
      </div>
    </div>
  );
};

export default Input;
