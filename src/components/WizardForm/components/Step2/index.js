import React from 'react';
import { Field } from "react-final-form";
import { FieldArray } from 'react-final-form-arrays';

import InputWrapper from '../../../Shared/Input';
import Error from '../../../Shared/Error';

import './styles.scss';

const Step2 = () => {
  //const [showDeceasedNotification, setShowDeceasedNotification] = React.useState(false);
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
      <h3 className="title is-4">Ilmoita hautajaisten järjestämiseen liittyvät kulut ja kustannukset</h3>
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
                        name={`${name}.value`}
                        component={InputWrapper}
                        type="text"
                        placeholder="499"
                        label="Sukuselvitykset"
                        />

                      <span
                        role="img"
                        aria-label="Close"
                        className="del__btn"
                        onClick={() => {
                          // if (fields.length === 1) {
                          //   setShowDeceasedNotification(true);
                          //   console.log("min one")
                          // } else {
                          //   fields.remove(index)}
                          // }
                          fields.remove(index)}
                        }
                        style={{ cursor: "pointer" }}
                        >
                        <i className="fa fa-trash" />
                      </span>
                      <Error name={`${name}.value`} />
                      {/*showDeceasedNotification && (
                        <div className="notification is-danger form__notification">
                          <button
                            className="delete"
                            onClick={() => setShowDeceasedNotification(false)}
                            />
                          Atleast one relationship to deceased person should exist!
                        </div>
                      )*/}
                    </div>
                  </div>
                ))}
                <span className="add__btn">
                  <button
                    className="button is-small is-primary"
                    onClick={() =>
                      fields.push({ value: ""})
                    }
                    type="button"
                    >
                    Lisää
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
            placeholder="200"
            label="Saldotodistukset"
            />
        </div>
        <div className="column is-3">
          <Field
            name="flowers"
            component={InputWrapper}
            type="text"
            placeholder="200"
            label="Kukat"
            />
        </div>
        <div className="column is-2">
          <Field
            name="funeralExpensesInfoTombstone"
            component={InputWrapper}
            type="text"
            placeholder="1200"
            label="Hautakivi/kunnostus"
            />
        </div>

      </div>

      <FieldArray name="otherFuneralExpenses">
        {({ fields }) => {
          return (
            <div>
              {fields.map((name, index) => (
                <div key={name} className="columns">
                  <div className="column is-5">
                    <Field
                      name={`${name}.info`}
                      component={InputWrapper}
                      type="text"
                      placeholder="200"
                      label="Muut kulut (Esimerkiksi valokuvat, musiikki, ruoka yms.)"
                      />
                  </div>
                  <div className="column is-2">
                    <Field
                      name={`${name}.value`}
                      component={InputWrapper}
                      type="text"
                      placeholder="500"
                      label="Arvo (€)"
                      />

                    <span
                      role="img"
                      className="del__btn"
                      aria-label="Close"
                      onClick={() => {
                        // if (fields.length === 1) {
                        //   setShowWidowBankInfo(true);
                        //   console.log("min one")
                        // } else {
                        //   fields.remove(index)}
                        // }
                        fields.remove(index)}
                      }
                      style={{ cursor: "pointer" }}
                      >
                      <i className="fa fa-trash" />
                    </span>
                  </div>


                  <Error name={`${name}.name`} />
                  {/*showWidowBankInfo && (
                    <div className="notification is-danger form__notification">
                      <button
                        className="delete"
                        onClick={() => setShowWidowBankInfo(false)}
                        />
                      Atleast one Bank account definition should exist!
                    </div>
                  )*/}
                </div>
              ))}
              <div className="add__btn margin">
                <button
                  className="button is-small is-primary"
                  onClick={() =>
                    fields.push({ number: "", value: ""})
                  }
                  type="button"
                  >
                  Lisää
                </button>
              </div>
            </div>
          );
        }}
      </FieldArray>

      <div className="columns">
        <div className="column is-3">
          <Field
            name="perukirjakoneReward"
            component={InputWrapper}
            type="text"
            placeholder="400"
            label="Perunkirjoituksen toimittaminen"
            />
        </div>
        <div className="column is-3">
          <Field
            name="perukirjakoneFee"
            component={InputWrapper}
            type="text"
            label="Perukirjakoneen käyttömaksu "
            disabled={true}
            />
        </div>
      </div>
      <br />
    </div>
  )
}

export default Step2;
