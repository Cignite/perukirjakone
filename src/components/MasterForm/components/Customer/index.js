import React from 'react';

import InputWrapper from "../InputWrapper";

const CustomerInfo = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, SSN } = formData;

  const { next, go } = navigation;

  return (
    <div className="form">
      <div class="columns form__col">
        <div class="column">
          <InputWrapper
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={setForm}
            required
          />
        </div>
        <div class="column">
          <InputWrapper
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={setForm}
            required
          />
        </div>
        <div class="column">
          <InputWrapper
            label="Social security"
            name="SSN"
            value={SSN}
            onChange={setForm}
            required
          />
        </div>
      </div>
      <div className="form__footer">
        <div class="field is-grouped">
          <div class="control">
            <button className="button is-medium is-outlined" onClick={() => go("email")}>Back</button>
          </div>
          <div class="control">
            <button className="button is-medium is-primary" onClick={next}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
