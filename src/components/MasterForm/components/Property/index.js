import React from 'react';

import InputWrapper from "../InputWrapper";

const Property = ({ setForm, formData, navigation }) => {
  const { propertyOne, propertyTwo } = formData;

  const { next, go } = navigation;

  return (
    <div className="form">
      <InputWrapper
        label="First Name"
        name="propertyOne"
        value={propertyOne}
        onChange={setForm}
      />
      <InputWrapper
        label="Last Name"
        name="propertyTwo"
        value={propertyTwo}
        onChange={setForm}
      />
      <div className="form__footer">
        <div class="field is-grouped">
          <div class="control">
            <button className="button is-medium is-outlined" onClick={() => go("inventory")}>Back</button>
          </div>
          <div class="control">
            <button className="button is-medium is-primary" onClick={next}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
