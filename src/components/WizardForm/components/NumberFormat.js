import React from 'react';
import NumberFormat from "react-number-format";
import { useField } from "react-final-form";

  const NumberField = (props) => {
    const {
        input,
        meta: { error, touched, submitError }
      } = useField(props.name);

      const inputProps = {
        ...props,
        error: touched && error && true,
        ...input
      };

    return (
        <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
            <NumberFormat
                value={props.input.value}
                decimalSeparator=","
                onBlur={props.input.onBlur}
                onFocus={props.input.onFocus}
                allowedDecimalSeparators={[","]}
                className="input"
                onValueChange={(values) =>
                    props.input.onChange(values.value)
                }
                allowNegative={false}
                inputProps
                isNumericString
            />
        </div>
    </div>
    )
  }

  export default NumberField;