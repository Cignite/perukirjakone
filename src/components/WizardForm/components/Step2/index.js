import React from 'react';
import { Field } from "react-final-form";
import { FieldArray } from 'react-final-form-arrays';

import InputWrapper from '../../../Shared/Input';
import Error from '../../../Shared/Error';

import './styles.scss';

//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// const onSubmit = async values => {
//   await sleep(300);
//   window.alert(JSON.stringify(values, 0, 2));
// };

// const required = value => (value ? undefined : "Required");

// const Condition = ({ when, is, children }) => {
//   return (
//     <Field name={when} subscription={{ value: true }}>
//       {({ input: { value } }) => (value === is ? children : null)}
//     </Field>
//   )
// }

const Step2 = () => {
  const [showDeceasedNotification, setShowDeceasedNotification] = React.useState(false);
  //const [showPropertyNotification, setShowPropertyNotification] = React.useState(false);
  // const [showBankAccountNotification, setShowBankAccountNotification] = React.useState(false);
  // const [showShareInfoNotification, setShowShareInfoNotification] = React.useState(false);
  // const [showPaintingInfo, setShowPaintingInfo] = React.useState(false);
  // const [showDebtNotifcation, setShowDebtNotifcation] = React.useState(false);
  // const [showFuneralExpensesInfo, setShowFuneralExpensesInfo] = React.useState(false);
  // const [showWidowBankInfo, setShowWidowBankInfo] = React.useState(false);
  // const [codeValue, setCodeValue] = React.useState("");
  return (
    <div className="form__content">
      <h3 className="title is-4">Ilmoita hautajasiin liityvät kullut/ Expenses related to funeral</h3>
      <hr />
      <br />
      <div className="columns step2__content">
        <FieldArray name="funeralExpensesInfo">
          {({ fields }) => {
            return (
              <div className="sukuselvitykset">
                {fields.map((name, index) => (
                  <div>
                    <div key={name}>
                      <Field
                        name={`${name}.familyReport`}
                        component={InputWrapper}
                        type="text"
                        placeholder="esim. leski / tytär / poika / isä / äiti / muu"
                        label="Sukuselvitykset"
                        />

                      <span
                        role="img"
                        aria-label="Close"
                        className="del__btn"
                        onClick={() => {
                          if (fields.length === 1) {
                            setShowDeceasedNotification(true);
                            console.log("min one")
                          } else {
                            fields.remove(index)}
                          }
                        }
                        style={{ cursor: "pointer" }}
                        >
                        ❌
                      </span>
                      <Error name={`${name}.familyReport`} />
                      {showDeceasedNotification && (
                        <div class="notification is-danger form__notification">
                          <button
                            class="delete"
                            onClick={() => setShowDeceasedNotification(false)}
                            />
                          Atleast one relationship to deceased person should exist!
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <span className="add__btn">
                  <button
                    className="button is-small is-primary"
                    onClick={() =>
                      fields.push({ familyReport: ""})
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

        <div className="column is-3">
          <Field
            name="funeralExpensesInfoDeathCertificate"
            component={InputWrapper}
            type="text"
            placeholder="Saldotodistukset"
            label="Saldotodistukset"
            />
        </div>
        <div className="column is-3">
          <Field
            name="flowers"
            component={InputWrapper}
            type="text"
            placeholder="Kukat"
            label="Kukat"
            />
        </div>
        <div className="column is-2">
          <Field
            name="funeralExpensesInfoTombstone"
            component={InputWrapper}
            type="text"
            placeholder="Hautakivet"
            label="Hautakivet"
            />
        </div>

      </div>

      <div className="columns step2__content">
        <FieldArray name="otherFuneralExpenses">
          {({ fields }) => {
            return (
              <div className="sukuselvitykset">
                {fields.map((name, index) => (
                  <div>
                    <div key={name}>
                      <Field
                        name={`${name}.info`}
                        component={InputWrapper}
                        type="text"
                        placeholder="other expenses"
                        label="Other expenses"
                        />

                      <span
                        role="img"
                        aria-label="Close"
                        className="del__btn"
                        onClick={() => {
                          if (fields.length === 1) {
                            setShowDeceasedNotification(true);
                            console.log("min one")
                          } else {
                            fields.remove(index)}
                          }
                        }
                        style={{ cursor: "pointer" }}
                        >
                        ❌
                      </span>
                      <Error name={`${name}.relationType`} />
                      {showDeceasedNotification && (
                        <div class="notification is-danger form__notification">
                          <button
                            class="delete"
                            onClick={() => setShowDeceasedNotification(false)}
                            />
                          Atleast one relationship to deceased person should exist!
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <span className="add__btn">
                  <button
                    className="button is-small is-primary"
                    onClick={() =>
                      fields.push({ info: ""})
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

        <div className="column is-3">
          <Field
            name="perukirjakoneReward"
            component={InputWrapper}
            type="text"
            placeholder="Perukirja reward"
            label="Perukirjakone reward"
            />
        </div>
        <div className="column is-3">
          <Field
            name="perukirjakoneFee"
            component={InputWrapper}
            type="text"
            placeholder="€29"
            label="Perukirjakone fee"
            disabled={true}
            />
        </div>
      </div>
      <br />
    </div>
  )
}

export default Step2;
