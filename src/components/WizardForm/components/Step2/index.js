import React from 'react';
import { Field } from "react-final-form";
import { FieldArray } from 'react-final-form-arrays';

import InputWrapper from '../../../Shared/Input';
import Error from '../../../Shared/Error';

import './styles.scss';

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
                  <div key={index}>
                    <div>
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
                        <i className="fa fa-trash" />
                      </span>
                      <Error name={`${name}.familyReport`} />
                      {showDeceasedNotification && (
                        <div className="notification is-danger form__notification">
                          <button
                            className="delete"
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
                  <div key={index}>
                    <div>
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
                        <i className="fa fa-trash" />
                      </span>
                      <Error name={`${name}.relationType`} />
                      {showDeceasedNotification && (
                        <div className="notification is-danger form__notification">
                          <button
                            className="delete"
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
