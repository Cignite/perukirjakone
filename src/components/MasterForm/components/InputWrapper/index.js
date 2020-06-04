import React from "react";

const ItemWrapper = ({ label, children, type = "text", ...otherProps }) => (
  <div>
    {type === "text" ? (
      <div class="field">
        <label class="label">{label}</label>
        <div class="control">
          <input class="input" type={type} {...otherProps} placeholder={label} />
        </div>
      </div>
    ) : (
      <div class="field">
        <div class="control">
          <label className={type === 'checkbox' ? 'checkbox' : 'radio'}>
            <input
              type={type}
              {...otherProps}
            />
          </label>
        </div>
      </div>
    )}
  </div>
);

export default ItemWrapper;
