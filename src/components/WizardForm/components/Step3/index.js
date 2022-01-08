import React from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";

import InputWrapper from "../../../Shared/Input";
import NumberFieldHooks from '../NumberFormat';

import Error from "../../../Shared/Error";

const Condition = ({ when, is, children }) => {
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  );
};

const Step3 = () => {
  //const [showDeceasedNotification, setShowDeceasedNotification] = React.useState(false);
  // const [showPropertyNotification, setShowPropertyNotification] = React.useState(false);
  // const [showBankAccountNotification, setShowBankAccountNotification] = React.useState(false);
  // const [showShareInfoNotification, setShowShareInfoNotification] = React.useState(false);
  // const [showPaintingInfo, setShowPaintingInfo] = React.useState(false);
  //const [showDebtNotifcation, setShowDebtNotifcation] = React.useState(false);
  // const [showFuneralExpensesInfo, setShowFuneralExpensesInfo] = React.useState(false);
  // const [showWidowBankInfo, setShowWidowBankInfo] = React.useState(false);
  // const [codeValue, setCodeValue] = React.useState("");

  return (
    <div>
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
            <label htmlFor="wasDeceasedPersonMarried" className="primary">
              Oliko vainaja avioliitossa tai rekisteröidyssä parisuhteessa?
            </label>
          </div>
        </div>
      </div>
      <div>
        <Condition when="wasDeceasedPersonMarried" is={true}>
          <h3 className="title is-4">
            3.1 LESKEN RAHAVARAT KORKOINEEN per vainajan kuolinpäivä
          </h3>
          <hr />
          <p className="primary">
            Pankin nimi ja pankkitilin numero (IBAN) ja saldo
          </p>
          <br />

          <FieldArray name="widowBankInfo">
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
                          placeholder="Nordea FI55 1234 5678 9127 46"
                          label="Kirjoita pankin nimi/pankkitilin numero (FI + 16 numeroa)"
                        />
                      </div>
                      <div className="column is-2">
                        <Field
                          name={`${name}.value`}
                          component={NumberFieldHooks}
                          type="text"
                          placeholder="800,80"
                          label="Saldo (€)"
                        />

                        <span
                          role="img"
                          aria-label="Close"
                          className="del__btn"
                          onClick={() => {
                            // if (fields.length === 1) {
                            //   setShowPaintingInfo(true);
                            //   console.log("min one")
                            // } else {
                            //   fields.remove(index)}
                            // }
                            fields.remove(index);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa fa-trash" />
                        </span>
                      </div>

                      <Error name={`${name}.name`} />
                      {/*showPaintingInfo && (
                        <div className="notification is-danger form__notification">
                          <button
                            className="delete"
                            onClick={() => setShowPaintingInfo(false)}
                            />
                          Atleast one share info definition should exist!
                        </div>
                      )*/}
                    </div>
                  ))}
                  <div className="add__btn margin">
                    <button
                      className="button is-small is-primary"
                      onClick={() => fields.push({ name: "", value: "" })}
                      type="button"
                    >
                      Lisää
                    </button>
                  </div>
                </div>
              );
            }}
          </FieldArray>

          <h3 className="title is-4">
            3.2 OSUUSTODISTUKSET, OSAKKEET, RAHASTOT, YMS
          </h3>
          <hr />

          {/*<h6 className="title is-6">Omistuserän tiedot (nimi ja määrä) </h6>*/}
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
                            placeholder="Orion Oyj A - 200 kpl "
                            label="Omistuserän tiedot (nimi ja määrä)"
                          />
                        </div>
                        <div className="column is-2">
                          <Field
                            name={`${name}.value`}
                            component={NumberFieldHooks}
                            type="text"
                            placeholder="8640,33"
                            label="Arvo (€)"
                          />

                          <span
                            role="img"
                            aria-label="Close"
                            className="del__btn"
                            onClick={() => {
                              // if (fields.length === 1) {
                              //   setShowPaintingInfo(true);
                              //   console.log("min one")
                              // } else {
                              //   fields.remove(index)}
                              // }
                              fields.remove(index);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa fa-trash" />
                          </span>
                        </div>

                        <Error name={`${name}.name`} />
                        {/*showPaintingInfo && (
                          <div className="notification is-danger form__notification">
                            <button
                              className="delete"
                              onClick={() => setShowPaintingInfo(false)}
                              />
                            Atleast one share info definition should exist!
                          </div>
                        )*/}
                      </div>
                    ))}
                    <div className="add__btn margin">
                      <button
                        className="button is-small is-primary"
                        onClick={() => fields.push({ name: "", value: "" })}
                        type="button"
                      >
                        Lisää
                      </button>
                    </div>
                  </div>
                );
              }}
            </FieldArray>
          </div>

          <h3 className="title is-4">3.3 LESKEN KIINTEISTÖT / HUONEISTOT</h3>
          <hr />
          {/*<p className="primary">What property/apartments did the deseaced person have?</p>*/}

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
                          placeholder="esim: AS OY Turun Hämeenkatu 1, huoneisto A 15 38.5 m2"
                          label="Omaisuus"
                        />
                      </div>
                      <div className="column is-2">
                        <Field
                          name={`${name}.value`}
                          component={NumberFieldHooks}
                          type="text"
                          placeholder="92500,33"
                          label="Arvo (€)"
                        />

                        <span
                          role="img"
                          aria-label="Close"
                          className="del__btn"
                          onClick={() => {
                            // if (fields.length === 1) {
                            //   setShowPaintingInfo(true);
                            //   console.log("min one")
                            // } else {
                            //   fields.remove(index)}
                            // }
                            fields.remove(index);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa fa-trash" />
                        </span>
                      </div>

                      <Error name={`${name}.name`} />
                      {/*showPaintingInfo && (
                        <div className="notification is-danger form__notification">
                          <button
                            className="delete"
                            onClick={() => setShowPaintingInfo(false)}
                            />
                          Atleast one share info definition should exist!
                        </div>
                      )*/}
                    </div>
                  ))}
                  <div className="add__btn margin">
                    <button
                      className="button is-small is-primary"
                      onClick={() => fields.push({ name: "", value: "" })}
                      type="button"
                    >
                      Lisää
                    </button>
                  </div>
                </div>
              );
            }}
          </FieldArray>

          <br />
          <div className="columns">
            <div className="column is-6">
              <div>
                <Field
                  name="didWidowHadCarBoat"
                  component="input"
                  type="checkbox"
                  className="form__checkbox"
                  id="didWidowHadCarBoat"
                />
                <label htmlFor="didWidowHadCarBoat" className="primary">
                  Onko leskellä auto / moottoripyörä / vene / perävaunu jne?
                </label>
              </div>
            </div>
          </div>

          <Condition when="didWidowHadCarBoat" is={true}>
            <div className="columns">
              <div className="column is-5">
                <Field
                  name="widowCarBrandTypeInfo"
                  component={InputWrapper}
                  type="text"
                  placeholder="Toyota RAV, 2015, ABC-123"
                  label="Auton merkki/vm/rekisterinumero"
                />
                <Error name="widowCarBrandTypeInfo" />
              </div>
              <div className="column is-2">
                <Field
                  name="widowCarBrandTypeValue"
                  component={NumberFieldHooks}
                  type="text"
                  placeholder="4500,23"
                  label="Arvo (€)"
                />
                <Error name="widowCarBrandTypeValue" />
              </div>
            </div>

            <FieldArray name="widowMotorBikeBrandTypeInfo">
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
                            placeholder="Suzuki PV, 1990, AB-12"
                            label="Muun ajoneuvon/omaisuuden merkki/vm/rekisterinumero"
                          />
                        </div>
                        <div className="column is-2">
                          <Field
                            name={`${name}.value`}
                            component={NumberFieldHooks}
                            type="text"
                            placeholder="133,43"
                            label="Arvo (€)"
                          />

                          <span
                            role="img"
                            aria-label="Close"
                            className="del__btn"
                            onClick={() => {
                              fields.remove(index);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa fa-trash" />
                          </span>
                        </div>
                      </div>
                    ))}
                    <span className="add__btn margin">
                      <button
                        className="button is-small is-primary add"
                        onClick={() => fields.push({ name: "", value: "" })}
                        type="button"
                      >
                        Lisää
                      </button>
                    </span>
                  </div>
                );
              }}
            </FieldArray>
          </Condition>

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
                <label htmlFor="isPersonalWorth" className="primary">
                  Onko irtaimen omaisuuden arvo (kalusteet ym.) yli 4000 € ?
                  Klikkaa painiketta, jos irtaimen omaisuuden arvo ylittää 4000
                  €
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
                            placeholder="Huonekalu/taulu/patsas"
                            label="Omaisuus"
                          />
                        </div>
                        <div className="column is-2">
                          <Field
                            name={`${name}.value`}
                            component={NumberFieldHooks}
                            type="text"
                            placeholder="4500,21"
                            label="Arvo"
                          />

                          <span
                            role="img"
                            aria-label="Close"
                            className="del__btn"
                            onClick={() => {
                              // if (fields.length === 1) {
                              //   setShowPaintingInfo(true);
                              //   console.log("min one")
                              // } else {
                              //   fields.remove(index)}
                              // }
                              fields.remove(index);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa fa-trash" />
                          </span>
                        </div>

                        <Error name={`${name}.bankaccount`} />
                        {/*showPaintingInfo && (
                        <div className="notification is-danger form__notification">
                          <button
                            className="delete"
                            onClick={() => setShowPaintingInfo(false)}
                            />
                          Atleast one share info definition should exist!
                        </div>
                      )*/}
                      </div>
                    ))}
                    <span className="add__btn">
                      <button
                        className="button is-small is-primary add"
                        onClick={() => fields.push({ name: "", value: "" })}
                        type="button"
                      >
                        Lisää
                      </button>
                    </span>
                  </div>
                );
              }}
            </FieldArray>
          </Condition>

          <div className="columns">
            <div className="column is-6">
              <div>
                <Field
                  name="isPersonalBelonings"
                  component="input"
                  type="checkbox"
                  className="form__checkbox"
                  id="isPersonalBelonings"
                />
                <label htmlFor="isPersonalBelonings" className="primary">
                  Ylittääkö henkilökohtaisen omaisuuden (kellot, korut ym.) arvo
                  4000 € ? Sisältäen edellisen kohdan (Irtain omaisuus)
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
                            placeholder="Sormus/Kello/Vaate yms"
                            label="Henkilökohtainen omaisuus"
                          />
                        </div>
                        <div className="column is-2">
                          <Field
                            name={`${name}.value`}
                            component={NumberFieldHooks}
                            type="text"
                            label="Arvo (€)"
                          />

                          <span
                            role="img"
                            aria-label="Close"
                            className="del__btn"
                            onClick={() => {
                              // if (fields.length === 1) {
                              //   setShowPaintingInfo(true);
                              //   console.log("min one")
                              // } else {
                              //   fields.remove(index)}
                              // }
                              fields.remove(index);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa fa-trash" />
                          </span>
                        </div>

                        <Error name={`${name}.bankaccount`} />
                        {/*showPaintingInfo && (
                        <div className="notification is-danger form__notification">
                          <button
                            className="delete"
                            onClick={() => setShowPaintingInfo(false)}
                            />
                          Atleast one share info definition should exist!
                        </div>
                      )*/}
                      </div>
                    ))}
                    <div className="add__btn margin">
                      <button
                        className="button is-small is-primary"
                        onClick={() => fields.push({ name: "", value: "" })}
                        type="button"
                      >
                        Lisää
                      </button>
                    </div>
                  </div>
                );
              }}
            </FieldArray>
          </Condition>

          <h3 className="title is-4">3.4 Lesken velat</h3>
          <hr />
          <div className="columns">
            <div className="column is-6">
              <div>
                <Field
                  name="didDeceasedHaveDebt"
                  component="input"
                  type="checkbox"
                  className="form__checkbox"
                  id="didDeceasedHaveDebt"
                />
                <label htmlFor="didDeceasedHaveDebt" className="primary">
                  Onko leskellä velkoja?
                </label>
              </div>
            </div>
          </div>

          <Condition when="didDeceasedHaveDebt" is={true}>
            <FieldArray name="widowDebtInfo">
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
                            placeholder="Nordea Pankki/muu velan yksilöinti"
                            label="Velan tiedot"
                          />
                        </div>
                        <div className="column is-2">
                          <Field
                            name={`${name}.value`}
                            component={NumberFieldHooks}
                            type="text"
                            label="Määrä (€)"
                          />

                          <span
                            role="img"
                            aria-label="Close"
                            className="del__btn"
                            onClick={() => {
                              // if (fields.length === 1) {
                              //   setShowPaintingInfo(true);
                              //   console.log("min one")
                              // } else {
                              //   fields.remove(index)}
                              // }
                              fields.remove(index);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa fa-trash" />
                          </span>
                        </div>

                        <Error name={`${name}.name`} />
                        {/*showPaintingInfo && (
                        <div className="notification is-danger form__notification">
                          <button
                            className="delete"
                            onClick={() => setShowPaintingInfo(false)}
                            />
                          Atleast one share info definition should exist!
                        </div>
                      )*/}
                      </div>
                    ))}
                    <div className="add__btn margin">
                      <button
                        className="button is-small is-primary "
                        onClick={() => fields.push({ name: "", value: "" })}
                        type="button"
                      >
                        Lisää
                      </button>
                    </div>
                  </div>
                );
              }}
            </FieldArray>
          </Condition>
          <br />
        </Condition>
      </div>
    </div>
  );
};

export default Step3;
