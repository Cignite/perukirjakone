import React from "react";

const Preview = ({ setForm, formData, navigation }) => {
  const {
    firstName,
    lastName,
    SSN,
    propertyOne,
    propertyTwo,
    inventoryOne,
    inventoryTwo
  } = formData;
  const { go } = navigation;

  return (
    <div className="form">
      <h3 className="title is-3 preview-header">Review your data</h3>
      <div class="columns">
        <div class="column">
          <div class="card has-text-centered is-height">
            <h3 className="title is-3 preview-header">
              Customer Info
            </h3>
            <div class="card-content">
              <p>
              First name: {`${firstName}`}
              </p>
              <p>Last Name: {`${lastName}`} </p>
              <p>SSN: {`${SSN}`} </p>
              <span class="fa fa-edit" onClick={() => go("customer")} />

            </div>
          </div>
        </div>

        <div class="column">
          <div class="card has-text-centered is-height">
            <h3 className="title is-3 preview-header">
              Inventory
            </h3>
            <div class="card-content">
              <p>
              Inventory one: {`${inventoryOne}`}
              </p>
              <p>
                Inventory two: {`${inventoryTwo}`}
              </p>
              <span class="fa fa-edit" onClick={() => go("inventory")} />

            </div>
          </div>
        </div>

        <div class="column">
          <div class="card has-text-centered is-height">
            <h3 className="title is-3 preview-header">
              Property
            </h3>
            <div class="card-content">
              <p>
              Inventory one: {`${propertyOne}`}
              </p>
              <p>
                Inventory two: {`${propertyTwo}`}
              </p>
              <span class="fa fa-edit" onClick={() => go("property")} />
            </div>
          </div>
        </div>
        </div>
      <div className="form__footer">
        <button className="button is-medium is-primary" onClick={() => go("submit")}>Submit</button>
      </div>
    </div>
  );
};

export default Preview;
