import React, { useState } from "react";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './styles.scss';

const DatePickerWrapper = props => {
  const {
    input,
    label,
    meta,
  } = props;
  const [startDate, setStartDate] = useState();


  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <DatePicker
          className={meta.touched && meta.error ? "form__form-group-datepicker__error" : "form__form-group-datepicker"}
          dateFormat="dd.MM.yyyy"
          showPopperArrow={false}
          showMonthDropdown
          dropdownMode="select"
          selected={startDate}
          onChange={value => {
            setStartDate(value);
            input.onChange(value);
          }}
          minDate={new Date()}
          todayButton="Today"
          onBlur={props.input.onBlur}
          onFocus={props.input.onFocus}
          value={props.input.value ? moment(props.input.value).format('DD.MM.YYYY') : null }
          placeholderText="01.02.2020"
        />
      </div>
    </div>
  );
};

export default DatePickerWrapper;
