import React from 'react';
import { Field } from "react-final-form";
import { FieldArray } from 'react-final-form-arrays';

import InputWrapper from '../../../Shared/Input';

import Error from '../../../Shared/Error';

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//
// const onSubmit = async values => {
//   await sleep(300);
//   window.alert(JSON.stringify(values, 0, 2));
// };

// const required = value => (value ? undefined : "Required");

const Condition = ({ when, is, children }) => {
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  )
}

const Step3 = () => {
  //const [showDeceasedNotification, setShowDeceasedNotification] = React.useState(false);
  // const [showPropertyNotification, setShowPropertyNotification] = React.useState(false);
  // const [showBankAccountNotification, setShowBankAccountNotification] = React.useState(false);
  // const [showShareInfoNotification, setShowShareInfoNotification] = React.useState(false);
  const [showPaintingInfo, setShowPaintingInfo] = React.useState(false);
  //const [showDebtNotifcation, setShowDebtNotifcation] = React.useState(false);
  // const [showFuneralExpensesInfo, setShowFuneralExpensesInfo] = React.useState(false);
  // const [showWidowBankInfo, setShowWidowBankInfo] = React.useState(false);
  // const [codeValue, setCodeValue] = React.useState("");

  return (
    <div>
      <h3 className="title is-4">Marriage</h3>
      <hr />
      <div className="columns">
        <div className="column is-6">
          <div>
            <Field
              name="wasDeceasedPersonMarried"
              component="input"
              type="checkbox"
              className="form__checkbox"
              id="wasDeceasedPersonMarried"
              />
            <label htmlFor="wasDeceasedPersonMarried">
              Was the deceased person married?
            </label>
          </div>
        </div>
      </div>
      <div>
        <Condition when="wasDeceasedPersonMarried" is={true}>
          <h3 className="title is-4">2.5 KIINTEISTÖT / HUONEISTOT</h3>
          <hr />
          <p>What property/apartments did the deseaced person have?</p>

          <FieldArray name="widowProperty">
            {({ fields }) => {
              return (
                <div>
                  {fields.map((name, index) => (
                    <div key={name} className="columns">
                      <div className="column is-5">
                        <Field
                          name={`${name}.name`}
                          component={InputWrapper}
                          type="text"
                          placeholder="esim. Huoneisto / Talo (kiinteistönumero)"
                          label="Property"
                          />
                      </div>
                      <div className="column is-2">
                        <Field
                          name={`${name}.value`}
                          component={InputWrapper}
                          type="text"
                          placeholder="esim: 40000"
                          label="Amount (€)"
                          />

                        <span
                          role="img"
                          aria-label="Close"
                          className="del__btn"
                          onClick={() => {
                            if (fields.length === 1) {
                              setShowPaintingInfo(true);
                              console.log("min one")
                            } else {
                              fields.remove(index)}
                            }
                          }
                          style={{ cursor: "pointer" }}
                          >
                          ❌
                        </span>
                      </div>


                      <Error name={`${name}.name`} />
                      {showPaintingInfo && (
                        <div className="notification is-danger form__notification">
                          <button
                            class="delete"
                            onClick={() => setShowPaintingInfo(false)}
                            />
                          Atleast one share info definition should exist!
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="add__btn margin">
                    <button
                      className="button is-small is-primary"
                      onClick={() =>
                        fields.push({ name: "", value: ""})
                      }
                      type="button"
                      >
                      Add more
                    </button>
                  </div>
                </div>
              );
            }}
          </FieldArray>

          <h3 className="title is-4">2.6 RAHAVARAT KORKOINEEN</h3>
          <hr />
          <p>Pankin / pankkitilin tiedot ja saldo</p>
          <br />

          <FieldArray name="widowBankInfo">
            {({ fields }) => {
              return (
                <div>
                  {fields.map((name, index) => (
                    <div key={name} className="columns">
                      <div class="column is-5">
                        <Field
                          name={`${name}.name`}
                          component={InputWrapper}
                          type="text"
                          placeholder="FI39...."
                          label="Enter bank account number"
                          />
                      </div>
                      <div className="column is-2">
                        <Field
                          name={`${name}.value`}
                          component={InputWrapper}
                          type="text"
                          placeholder="esim: 40000"
                          label="Amount (€)"
                          />

                        <span
                          role="img"
                          aria-label="Close"
                          className="del__btn"
                          onClick={() => {
                            if (fields.length === 1) {
                              setShowPaintingInfo(true);
                              console.log("min one")
                            } else {
                              fields.remove(index)}
                            }
                          }
                          style={{ cursor: "pointer" }}
                          >
                          ❌
                        </span>
                      </div>


                      <Error name={`${name}.name`} />
                      {showPaintingInfo && (
                        <div className="notification is-danger form__notification">
                          <button
                            className="delete"
                            onClick={() => setShowPaintingInfo(false)}
                            />
                          Atleast one share info definition should exist!
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="add__btn margin">
                    <button
                      className="button is-small is-primary"
                      onClick={() =>
                        fields.push({ name: "", value: ""})
                      }
                      type="button"
                      >
                      Add more
                    </button>
                  </div>
                </div>
              );
            }}
          </FieldArray>



          <h3 className="title is-4">2.7 THE MONEY OF THE WIDOW WITH INTEREST (ALSO STOCKS & FUNDS)</h3>
          <hr />

          <h6 className="title is-6">LESKEN RAHAVARAT KORKOINEEN</h6>
          <div>
            <FieldArray name="widowStockInfo">
              {({ fields }) => {
                return (
                  <div>
                    {fields.map((name, index) => (
                      <div key={name} className="columns">
                        <div className="column is-5">
                          <Field
                            name={`${name}.name`}
                            component={InputWrapper}
                            type="text"
                            placeholder="Stock name"
                            label="Enter Stock name"
                            />
                        </div>
                        <div className="column is-2">
                          <Field
                            name={`${name}.value`}
                            component={InputWrapper}
                            type="text"
                            placeholder="esim: €40k"
                            label="Total amount (€)"
                            />

                          <span
                            role="img"
                            aria-label="Close"
                            className="del__btn"
                            onClick={() => {
                              if (fields.length === 1) {
                                setShowPaintingInfo(true);
                                console.log("min one")
                              } else {
                                fields.remove(index)}
                              }
                            }
                            style={{ cursor: "pointer" }}
                            >
                            ❌
                          </span>
                        </div>


                        <Error name={`${name}.name`} />
                        {showPaintingInfo && (
                          <div className="notification is-danger form__notification">
                            <button
                              className="delete"
                              onClick={() => setShowPaintingInfo(false)}
                              />
                            Atleast one share info definition should exist!
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="add__btn margin">
                      <button
                        className="button is-small is-primary"
                        onClick={() =>
                          fields.push({ name: "", value: ""})
                        }
                        type="button"
                        >
                        Add more
                      </button>
                    </div>
                  </div>
                );
              }}
            </FieldArray>
          </div>


          <div className="columns">
            <div className="column is-6">
              <div>
                <Field
                  name="isPersonalWorth"
                  component="input"
                  type="checkbox"
                  className="form__checkbox"
                  id="isPersonalWorth"
                  />
                <label htmlFor="isPersonalWorth">
                  Onko irtaimen omaisuuden arvo yli 4000 euroa?
                </label>
              </div>
            </div>
          </div>

          <Condition when="isPersonalWorth" is={true}>
            <FieldArray name="personalWorthInfo">
              {({ fields }) => {
                return (
                  <div>
                    {fields.map((name, index) => (
                      <div key={name} className="columns">
                        <div className="column is-5">
                          <Field
                            name={`${name}.name`}
                            component={InputWrapper}
                            type="text"
                            placeholder="Omaisuuden arvo"
                            label="Omaisuuden arvo"
                            />
                        </div>
                        <div className="column is-2">
                          <Field
                            name={`${name}.value`}
                            component={InputWrapper}
                            type="text"
                            placeholder="€4000"
                            label="Amount (€)"
                            />

                          <span
                            role="img"
                            aria-label="Close"
                            className="del__btn"
                            onClick={() => {
                              if (fields.length === 1) {
                                setShowPaintingInfo(true);
                                console.log("min one")
                              } else {
                                fields.remove(index)}
                              }
                            }
                            style={{ cursor: "pointer" }}
                            >
                            ❌
                          </span>
                        </div>


                        <Error name={`${name}.bankaccount`} />
                        {showPaintingInfo && (
                          <div className="notification is-danger form__notification">
                            <button
                              className="delete"
                              onClick={() => setShowPaintingInfo(false)}
                              />
                            Atleast one share info definition should exist!
                          </div>
                        )}
                      </div>
                    ))}
                    <span className="add__btn">
                      <button
                        className="button is-small is-primary"
                        onClick={() =>
                          fields.push({ name: "", value: ""})
                        }
                        type="button"
                        >
                        Add more
                      </button>
                    </span>
                  </div>
                );
              }}
            </FieldArray>
          </Condition>


          <div className="columns">
            <div class="column is-6">
              <div>
                <Field
                  name="isPersonalBelonings"
                  component="input"
                  type="checkbox"
                  className="form__checkbox"
                  id="isPersonalBelonings"
                  />
                <label htmlFor="isPersonalBelonings">
                  Person belongings?
                </label>
              </div>
            </div>
          </div>

          <Condition when="isPersonalBelonings" is={true}>
            <FieldArray name="widowPersonalBelonings">
              {({ fields }) => {
                return (
                  <div>
                    {fields.map((name, index) => (
                      <div key={name} className="columns">
                        <div className="column is-5">
                          <Field
                            name={`${name}.name`}
                            component={InputWrapper}
                            type="text"
                            placeholder="Omaisuuden arvo"
                            label="Omaisuuden arvo"
                            />
                        </div>
                        <div className="column is-2">
                          <Field
                            name={`${name}.value`}
                            component={InputWrapper}
                            type="text"
                            placeholder="€4000"
                            label="Amount (€)"
                            />

                          <span
                            role="img"
                            aria-label="Close"
                            className="del__btn"
                            onClick={() => {
                              if (fields.length === 1) {
                                setShowPaintingInfo(true);
                                console.log("min one")
                              } else {
                                fields.remove(index)}
                              }
                            }
                            style={{ cursor: "pointer" }}
                            >
                            ❌
                          </span>
                        </div>


                        <Error name={`${name}.bankaccount`} />
                        {showPaintingInfo && (
                          <div className="notification is-danger form__notification">
                            <button
                              className="delete"
                              onClick={() => setShowPaintingInfo(false)}
                              />
                            Atleast one share info definition should exist!
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="add__btn margin">
                      <button
                        className="button is-small is-primary"
                        onClick={() =>
                          fields.push({ name: "", value: ""})
                        }
                        type="button"
                        >
                        Add more
                      </button>
                    </div>
                  </div>
                );
              }}
            </FieldArray>
          </Condition>
          <br />
          <br />

        </Condition>
      </div>
    </div>
  )
}

export default Step3;
