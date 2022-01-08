import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

const RenderMaskInput = ({
  input, meta, disabled, placeholder, type, label, mask, className, guide = true, pipe, keepCharPositions = false,
}) => (
  

  <div className="field">
      <label className="label">{label}</label>
      <div className="control">
      <MaskedInput
        {...input}
        placeholder={placeholder}
        type={type}
        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /[A-Za-z]/]}
        guide={guide}
        pipe={pipe}
        keepCharPositions={keepCharPositions}
        disabled={disabled}
        className={meta.touched && meta.error ? "input is-danger" : "input"}

        />
      </div>
    </div>

);

RenderMaskInput.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.arrayOf(PropTypes.any).isRequired,
  className: PropTypes.string.isRequired,
  guide: PropTypes.bool.isRequired,
  keepCharPositions: PropTypes.bool.isRequired,
  pipe: PropTypes.func.isRequired,
};

RenderMaskInput.defaultProps = {
  placeholder: '',
  type: 'text',
};

export default RenderMaskInput;
