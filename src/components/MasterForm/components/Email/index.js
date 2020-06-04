import React from 'react';

import InputWrapper from "../InputWrapper";

const EmailValidation = ({ setForm, formData, navigation }) => {
  const { email } = formData;
  const { next, go } = navigation;

  return (
    <div className="form">
      <div class="columns form__col">
        <div class="column is-one-third">
          <InputWrapper
            label="Email"
            name="email"
            value={email}
            onChange={setForm}
          />
        </div>
      </div>
      <div className="form__footer">
        <button className="button is-medium is-primary" onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default EmailValidation;
