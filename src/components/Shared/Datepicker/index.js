import React, { useState } from "react";
import moment from 'moment';
import DatePicker from "react-datepicker";
import fi from 'date-fns/locale/fi';

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
          selected={startDate}
          onChange={value => {
            setStartDate(value);
            input.onChange(value);
          }}
          todayButton="Today"
          value={props.input.value ? moment(props.input.value).format('DD.MM.YYYY') : null }
          placeholderText="01.02.2020"
          peekNextMonth="peekNextMonth"
          showMonthDropdown="showMonthDropdown"
          showYearDropdown="showYearDropdown"
          dropdownMode="select"
          locale={fi}
        />
      </div>
    </div>
  );
};

export default DatePickerWrapper;
