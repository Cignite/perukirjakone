import React from 'react';

import InputWrapper from "../InputWrapper";

const Inventory = ({ setForm, formData, navigation }) => {
  const { inventoryOne, inventoryTwo, married } = formData;

  const { next, go } = navigation;

  return (
    <div className="form">
      <InputWrapper
        label="First Name"
        name="inventoryOne"
        value={inventoryOne}
        onChange={setForm}
      />
      <InputWrapper
        type="text"
        row="6"
        label="Last Name"
        name="inventoryTwo"
        value={inventoryTwo}
        onChange={setForm}
      />
      <InputWrapper
        type="checkbox"
        label="Are you married"
        name="married"
        value={married}
        onChange={setForm}
      />
      <div className="form__footer">
        <div class="field is-grouped">
          <div class="control">
            <button className="button is-medium is-outlined" onClick={() => go("customer")}>Back</button>
          </div>
          <div class="control">
            <button className="button is-medium is-primary" onClick={next}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
