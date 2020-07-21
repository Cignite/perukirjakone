import React from 'react';
import { Field } from "react-final-form";
import { FieldArray } from 'react-final-form-arrays';

import InputWrapper from '../../../Shared/Input';
import TextareaWrapper from '../../../Shared/Textarea';

import renderDatePickerField from '../../../Shared/Datepicker';
import Error from '../../../Shared/Error';

import '../../styles.scss';

const Condition = ({ when, is, children }) => {
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  )
}

const Step1 = () => {
  // const [showDeceasedNotification, setShowDeceasedNotification] = React.useState(false);
  // const [showPropertyNotification, setShowPropertyNotification] = React.useState(false);
  //const [showBankAccountNotification, setShowBankAccountNotification] = React.useState(false);
  //const [showShareInfoNotification, setShowShareInfoNotification] = React.useState(false);
  // const [showPaintingInfo, setShowPaintingInfo] = React.useState(false);
  // const [showDebtNotifcation, setShowDebtNotifcation] = React.useState(false);
  // const [showFuneralExpensesInfo, setShowFuneralExpensesInfo] = React.useState(false);
  // const [showWidowBankInfo, setShowWidowBankInfo] = React.useState(false);
  //const [codeValue, setCodeValue] = React.useState("");

  return (
    <div className="form__content">
      <h3 className="title is-4">1.1 Vainajan tiedot</h3>
      <hr />
      <div className="columns">
        <div className="column">
          <Field
            name="customerFirstName"
            component={InputWrapper}
            type="text"
            placeholder="Heikki"
            label="Etunimet"
            />
          <Error name="customerFirstName" />
        </div>
        <div className="column">
          <Field
            name="customerlastName"
            component={InputWrapper}
            type="text"
            placeholder="Halonen"
            label="Sukunimi"
            />
          <Error name="customerlastName" />
        </div>
        <div className="column">
          <Field
            name="customerSSN"
            component={InputWrapper}
            type="text"
            placeholder="24444-39F"
            label="Henkilötunnus"
            />
          <Error name="customerSSN" />
        </div>
        <div className="column">
          <Field
            name="address"
            component={InputWrapper}
            type="text"
            placeholder="Hammenkatu 1, 20500 Turku"
            label="Osoite"
            />
          <Error name="address" />
        </div>
      </div>

      <div className="columns">
        <div className="column is-3">
          <Field
            name="customerTimeOfDeath"
            component={renderDatePickerField}
            label="Kuolinaika"
            placeholder="01.08.2020"
            />
          <Error name="customerTimeOfDeath" />
        </div>
        <div className="column is-3">
          <Field
            name="agreeementPlace"
            component={InputWrapper}
            type="text"
            placeholder="Hammenkatu 1, 02500 Turku"
            label="Kuolinpaikka"
            />
          <Error name="agreeementPlace" />
        </div>
      </div>

      <br />
      <h3 className="title is-4">1.2 Kuolinpesän oikeudenomistajat</h3>
      <hr />
      <p className="primary">Suhde vainajaan</p>

      <FieldArray name="relationshipInfo">
        {({ fields }) => {
          return (
            <div>
              {fields.map((name, index) => (
                <div key={name} className="columns">
                  <div className="column is-3">
                    <Field
                      name={`${name}.relationType`}
                      component={InputWrapper}
                      type="text"
                      placeholder="esim. leski / tytär / poika / isä / äiti / muu"
                      label="Suhde"
                      />
                  </div>
                  <div className="column is-3">
                    <Field
                      name={`${name}.name`}
                      component={InputWrapper}
                      type="text"
                      placeholder="Aalto, Janne Ilmari"
                      label="Täydellinen nimi (sukunimi, etunimet)"
                      />
                  </div>
                  <div className="column is-3">
                    <Field
                      name={`${name}.ssn`}
                      component={InputWrapper}
                      type="text"
                      placeholder="010789-197F"
                      label="Henkilötunnus"
                      />
                  </div>
                  <div className="column is-3">
                    <Field
                      name={`${name}.address`}
                      component={InputWrapper}
                      type="text"
                      placeholder="Lanatie 5 A, 20540 Turku"
                      label="Osoite"
                      />


                    <span
                      role="img"
                      className="del__btn"
                      aria-label="Close"
                      onClick={() => {
                        // if (fields.length === 1) {
                        //   setShowPropertyNotification(true);
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
                  {/*showPropertyNotification && (
                    <div className="notification is-danger form__notification">
                    <button
                    className="delete"
                    onClick={() => setShowPropertyNotification(false)}
                    />
                    Atleast one property definition should exist!
                    </div>
                    )*/}
                  </div>
                ))}
                <div className="add__btn margin">
                  <button
                    className="button is-small is-primary"
                    onClick={() =>
                      fields.push({ relationType: "", name: "", ssn: "", address: ""})
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

        <br />
        <h3 className="title is-4">1.3 Testamentti</h3>
        <hr />
        <div className="columns">
          <div className="column is-6">
            <div>
              <Field
                name="isTestamentDeceasedPropertyAssignedChecked"
                component="input"
                type="checkbox"
                className="form__checkbox"
                id="isTestamentDeceasedPropertyAssignedChecked"
                />
              <label htmlFor="isTestamentDeceasedPropertyAssignedChecked" className="primary">
                Onko vainajan omaisuus tai määräosa siitä testamentattu jollekin
              </label>
            </div>
          </div>
        </div>
        <div className="columns">
          <Condition when="isTestamentDeceasedPropertyAssignedChecked" is={true}>
            <div className="column is-3">
              <Field
                name="testamentPropertyAssignInfo"
                component={InputWrapper}
                type="text"
                placeholder="Hannu Harala"
                label="Henkilön nimi ja henkilötunnus sekä osoite"
                />
              <Error name="testamentPropertyAssignInfo" />
            </div>
          </Condition>
        </div>


        <br />
        <h3 className="title is-4">1.4 TOIMITUKSEN PERUSTEENA OLEVAT ASIAKIRJAT JA TIEDOT</h3>
        <hr />
        <div className="columns">
          <div className="column is-6">
            <div>
              <Field
                name="isSukuselvitykset"
                component="input"
                type="checkbox"
                className="form__checkbox"
                id="isSukuselvitykset"
                />
              <label htmlFor="isSukuselvitykset" className="primary">Sukuselvitykset</label>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-6">
            <div>
              <Field
                name="isTestamenttiChecked"
                component="input"
                type="checkbox"
                className="form__checkbox"
                id="isTestamenttiChecked"
                />
              <label htmlFor="isTestamenttiChecked" className="primary">Testamentti</label>
            </div>
          </div>
        </div>
        <div className="columns">
          <Condition when="isTestamenttiChecked" is={true}>
            <div className="column is-3">
              <Field
                name="testamenttiTimeOfDeath"
                component={renderDatePickerField}
                label="Avioehtosopimus"
                placeholder="01.08.2020"
                />
              <Error name="testamenttiTimeOfDeath" />
            </div>
          </Condition>
        </div>

        <div className="columns">
          <div className="column is-6">
            <div>
              <Field
                name="isMarriedSettlementContractChecked"
                component="input"
                type="checkbox"
                className="form__checkbox"
                id="isMarriedSettlementContractChecked"
                />
              <label htmlFor="isMarriedSettlementContractChecked" className="primary">Avioehtosopimukset</label>
            </div>
          </div>
        </div>
        <div className="columns">
          <Condition when="isMarriedSettlementContractChecked" is={true}>
            <div className="column is-3">
              <Field
                name="marriageSettlementDate"
                component={renderDatePickerField}
                label="Avioehtosopimus"
                placeholder="01.08.2020"
                />
              <Error name="marriageSettlementDate" />
            </div>
          </Condition>
        </div>


        <div className="columns">
          <div className="column is-6">
            <div>
              <Field
                name="isOtherDocumentChecked"
                component="input"
                type="checkbox"
                className="form__checkbox"
                id="isOtherDocumentChecked"
                />
              <label htmlFor="isOtherDocumentChecked" className="primary">
                Muut kuolinpesää selvittävät asiakirjat ja tiedot (1 omaisuuserä 1 laatikkoa kohden)
              </label>
            </div>
          </div>
        </div>

        <Condition when="isOtherDocumentChecked" is={true}>
          <FieldArray name="otherDocumentInfo">
            {({ fields }) => {
              return (
                <div>
                  {fields.map((name, index) => (
                    <div key={name} className="columns">
                      <div className="column is-6">
                        <Field
                          name={`${name}.otherDocInfo`}
                          component={TextareaWrapper}
                          placeholder="Kuvaus"
                          rows="4"
                        />
                        <Error name={`${name}.value`} />
                        <span
                          role="img"
                          aria-label="Close"
                          className="del__btn"
                          onClick={() => {
                            // if (fields.length === 1) {
                            //   setShowDebtNotifcation(true);
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


                      <Error name={`${name}.bankaccount`} />
                      {/*showDebtNotifcation && (
                        <div className="notification is-danger form__notification">
                        <button
                        className="delete"
                        onClick={() => setShowDebtNotifcation(false)}
                        />
                        Atleast one share info definition should exist!
                        </div>
                        )*/}
                      </div>
                  ))}
                  <span className="add__btn margin">
                    <button
                      className="button is-small is-primary add"
                      onClick={() =>
                        fields.push({ otherDocInfo: ""})
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
        </Condition>

        <br />
        <h3 className="title is-4">1.5 VAINAJAN RAHAVARAT KORKOINEEN (per kuolinpäivä)</h3>
        <hr />
        <p className="primary">Pankin nimi ja pankkitilin numero (IBAN)  ja saldo</p>
        <br />
        <FieldArray name="bankAccountInfo">
          {({ fields }) => {
            return (
              <div>
                {fields.map((name, index) => (
                  <div key={name} className="columns">
                    <div className="column is-5">
                      <Field
                        name={`${name}.number`}
                        component={InputWrapper}
                        type="text"
                        placeholder="Nordea FI55 1234 5678 9123 45"
                        label="Kirjoita pankin nimi/pankkitilin numero"
                        />
                    </div>
                    <div className="column is-2">
                      <Field
                        name={`${name}.value`}
                        component={InputWrapper}
                        type="text"
                        placeholder="1205,23"
                        label="Saldo (€)"
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

          <br />
          <h3 className="title is-4">1.6 OSUUSTODISTUKSET, OSAKKEET, RAHASTOT, YMS</h3>
          <hr />
          <p className="primary">Omistuserän tiedot (nimi ja määrä) </p>

          <br />
          <FieldArray name="shareInfo">
            {({ fields }) => {
              return (
                <div>
                  {fields.map((name, index) => (
                    <div key={name} className="columns">
                      <div className="column is-5">
                        <Field
                          name={`${name}.number`}
                          component={InputWrapper}
                          type="text"
                          placeholder="Omistuserän tiedot (nimi ja määrä)"
                          label="Nokia Oyj - 2550 kpl"
                          />
                      </div>
                      <div className="column is-2">
                        <Field
                          name={`${name}.value`}
                          component={InputWrapper}
                          type="text"
                          placeholder="9435"
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
                            fields.remove(index)}
                          }
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
                        onClick={() =>
                          fields.push({ name: "", value: ""})
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

          <br />
          <h3 className="title is-4">1.7 VAINAJAN KIINTEISTÖT / HUONEISTOT</h3>
          <hr />
          <br />

          <FieldArray name="propertyInfo">
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
                          placeholder="esim: AS OY TURUN HÄMEENKATU 1"
                          label="Omaisuus"
                          />
                      </div>
                      <div className="column is-2">
                        <Field
                          name={`${name}.value`}
                          component={InputWrapper}
                          type="text"
                          placeholder="esim: 40000"
                          label="Arvo (€)"
                          />

                        <span
                          role="img"
                          className="del__btn"
                          aria-label="Close"
                          onClick={() => {
                            // if (fields.length === 1) {
                            //   setShowPropertyNotification(true);
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
                      {/*showPropertyNotification && (
                        <div className="notification is-danger form__notification">
                        <button
                        className="delete"
                        onClick={() => setShowPropertyNotification(false)}
                        />
                        Atleast one property definition should exist!
                        </div>
                        )*/}
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
                        Lisää
                      </button>
                    </div>
                  </div>
                );
              }}
            </FieldArray>

            <div className="columns">
              <div className="column is-6">
                <div>
                  <Field
                    name="didDeceasedHadCarBoat"
                    component="input"
                    type="checkbox"
                    className="form__checkbox"
                    id="didDeceasedHadCarBoat"
                  />
                  <label htmlFor="didDeceasedHadCarBoat" className="primary">
                    Oliko vainajalla auto / moottoripyörä / vene / perävaunu jne?
                  </label>
                </div>
              </div>
            </div>

            <Condition when="didDeceasedHadCarBoat" is={true}>
              <div className="columns">
                <div className="column is-5">
                  <Field
                    name="deceasedCarBrandTypeInfo"
                    component={InputWrapper}
                    type="text"
                    placeholder="Toyota RAV, 2015, ABC-123"
                    label="Auton merkki/vm/rekisterinumero"
                    />
                  <Error name="deceasedCarBrandTypeInfo" />
                </div>
                <div className="column is-2">
                  <Field
                    name="deceasedCarBrandTypeValue"
                    component={InputWrapper}
                    type="text"
                    placeholder="4500"
                    label="Arvo (€)"
                    />
                  <Error name="deceasedCarBrandTypeValue" />
                </div>
              </div>
              <div className="columns">
                <div className="column is-5">
                  <Field
                    name="deceasedMotorBikeBrandTypeInfo"
                    component={InputWrapper}
                    type="text"
                    placeholder="Suzuki PV, 1990, AB-12"
                    label="Muun ajoneuvon/omaisuuden merkki/vm/rekisterinumero"
                    />
                  <Error name="deceasedMotorBikeBrandTypeInfo" />
                </div>
                <div className="column is-2">
                  <Field
                    name="deceasedMotorBikeBrandTypeValue"
                    component={InputWrapper}
                    type="text"
                    placeholder="100"
                    label="Arvo (€)"
                    />
                  <Error name="deceasedMotorBikeBrandTypeValue" />
                </div>
              </div>
            </Condition>

            <div className="columns">
              <div className="column is-6">
                <div>
                  <Field
                    name="isPropertyLikeSofa"
                    component="input"
                    type="checkbox"
                    className="form__checkbox"
                    id="isPropertyLikeSofa"
                    />
                  <label htmlFor="isPropertyLikeSofa" className="primary">
                    Onko irtaimen omaisuuden arvo (kalusteet ym.) yli 4000 € ? Klikkaa painiketta, jos irtaimen arvo ylittää 4000 €
                  </label>
                </div>
              </div>
            </div>

            <Condition when="isPropertyLikeSofa" is={true}>
              <FieldArray name="propertyLikeSofaWatchInfo">
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
                              component={InputWrapper}
                              type="text"
                              placeholder="40000"
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
                                fields.remove(index)}
                              }
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
                        <span className="add__btn margin">
                          <button
                            className="button is-small is-primary add"
                            onClick={() =>
                              fields.push({ name: "", value: ""})
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
              </Condition>

                <div className="columns">
                  <div className="column is-6">
                    <div>
                      <Field
                        name="isHKIrtaminen"
                        component="input"
                        type="checkbox"
                        className="form__checkbox"
                        id="isHKIrtaminen"
                        />
                      <label htmlFor="isHKIrtaminen" className="primary">
                        Ylittääkö henkilökohtaisen omaisuuden  (kellot, korut ym.) arvo 4000 € ? Sisältäen edellisen kohdan (Irtain omaisuus)
                      </label>
                    </div>
                  </div>
                </div>

                <Condition when="isHKIrtaminen" is={true}>
                  <FieldArray name="personalBelongingsInfo">
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
                                <Error name={`${name}.name`} />
                              </div>
                              <div className="column is-2">
                                <Field
                                  name={`${name}.value`}
                                  component={InputWrapper}
                                  type="text"
                                  placeholder=""
                                  label="Arvo (€)"
                                  />
                                <Error name={`${name}.value`} />
                                <span
                                  role="img"
                                  aria-label="Close"
                                  className="del__btn"
                                  onClick={() => {
                                    // if (fields.length === 1) {
                                    //   setShowDebtNotifcation(true);
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


                              <Error name={`${name}.bankaccount`} />
                              {/*showDebtNotifcation && (
                                <div className="notification is-danger form__notification">
                                <button
                                className="delete"
                                onClick={() => setShowDebtNotifcation(false)}
                                />
                                Atleast one share info definition should exist!
                                </div>
                                )*/}
                              </div>
                            ))}
                            <span className="add__btn margin">
                              <button
                                className="button is-small is-primary add"
                                onClick={() =>
                                  fields.push({ name: "", value: ""})
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
                  </Condition>

                  <br />
                  <h3 className="title is-4">1.8 Vainajan velat</h3>
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
                          Onko vainajalla velkoja?
                        </label>
                      </div>
                    </div>
                  </div>

                  <Condition when="didDeceasedHaveDebt" is={true}>
                    <FieldArray name="debtInfo">
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
                                    component={InputWrapper}
                                    type="text"
                                    placeholder="4000"
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
                                      fields.remove(index)}
                                    }
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
                                  onClick={() =>
                                    fields.push({ name: "", value: ""})
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

                    </Condition>

                    <br />
                    <h3 className="title is-4">1.9 Henkivakuutus </h3>
                    <hr />
                    <div className="columns">
                      <div className="column is-6">
                        <div>
                          <Field
                            name="isThereLifeInsurance"
                            component="input"
                            type="checkbox"
                            className="form__checkbox"
                            id="isThereLifeInsurance"
                            />
                          <label htmlFor="isThereLifeInsurance" className="primary">Oliko vainajalla henkivakuutusta tai vastaavaa? </label>
                        </div>
                      </div>
                    </div>
                    <Condition when="isThereLifeInsurance" is={true}>
                      <FieldArray name="lifeInsuranceInfo">
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
                                      placeholder="Yhtiön nimi/Vakuutusnumero/Edunsaajamääräys/"
                                      label="Henkivakuutus"
                                      />
                                  </div>
                                  <div className="column is-2">
                                    <Field
                                      name={`${name}.value`}
                                      component={InputWrapper}
                                      type="text"
                                      placeholder="20000"
                                      label="Määrä (€)"
                                      />
                                  </div>
                                  <div className="column is-2">
                                    <Field
                                      name={`${name}.date`}
                                      component={renderDatePickerField}
                                      label="Päivämäärä"
                                      placeholder="01.08.2020"
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
                                        fields.remove(index)}
                                      }
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
                                    onClick={() =>
                                      fields.push({ name: "", value: ""})
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

                    </Condition>


                    <br />
                    <h3 className="title is-4">1.10 Muuta</h3>
                    <hr />
                    <h3 className="title is-4">Kuka on kutsunut kuolinpesän osakkaat tähän perunkirjoitus tilaisuuteen?</h3>
                    <hr />
                    <div className="columns">
                      <div className="column">
                        <Field
                          name="inviteeName"
                          component={InputWrapper}
                          type="text"
                          placeholder="Heikki Halonen"
                          label="Nimi"
                          />
                        <Error name="inviteeNimi" />
                      </div>
                      <div className="column">
                        <Field
                          name="inviteePlace"
                          component={InputWrapper}
                          type="text"
                          placeholder="Turku"
                          label="Paikkakunta"
                          />
                        <Error name="inviteePlace" />
                      </div>
                      <div className="column">
                        <Field
                          name="inviteeDate"
                          component={renderDatePickerField}
                          label="Päivämäärä"
                          placeholder="01.08.2020"
                          />
                        <Error name="inviteeDate" />
                      </div>
                    </div>


                    <h3 className="title is-4">Ketkä ovat uskotut miehet?</h3>
                    <hr />
                    <h3 className="title is-4">Henkilo 1</h3>
                    <div className="columns">
                      <div className="column is-3">
                        <Field
                          name="trustedMenNameFirst"
                          component={InputWrapper}
                          type="text"
                          placeholder="Heikki Halonen"
                          label="Nimi"
                          />
                        <Error name="trustedMenNameFirst" />
                      </div>
                      <div className="column is-3">
                        <Field
                          name="trustedMenPlaceFirst"
                          component={InputWrapper}
                          type="text"
                          placeholder="Turku"
                          label="Paikkakunta"
                          />
                        <Error name="trustedMenPlaceFirst" />
                      </div>
                    </div>
                    <h3 className="title is-4">Henkilo 2</h3>
                    <div className="columns">

                      <div className="column is-3">
                        <Field
                          name="trustedMenNameSecond"
                          component={InputWrapper}
                          type="text"
                          placeholder="Outi Virtanen"
                          label="Nimi"
                          />
                        <Error name="trustedMenNameSecond" />
                      </div>
                      <div className="column is-3">
                        <Field
                          name="trustedMenPlaceSecond"
                          component={InputWrapper}
                          type="text"
                          placeholder="Turku"
                          label="Paikkakunta"
                          />
                        <Error name="trustedMenPlaceSecond" />
                      </div>
                    </div>

                    <h3 className="title is-4">Kuka oli läsnä perunkirjoitustilaisuudessa?</h3>
                    <hr />
                    <FieldArray name="whoWasPresent">
                      {({ fields }) => {
                        return (
                          <div>
                            {fields.map((name, index) => (
                              <div key={name} className="columns">
                                <div className="column is-3">
                                  <Field
                                    name={`${name}.name`}
                                    component={InputWrapper}
                                    type="text"
                                    placeholder="Pekka Lahtinen"
                                    label="Nimi"
                                    />
                                </div>
                                <div className="column is-3">
                                  <Field
                                    name={`${name}.city`}
                                    component={InputWrapper}
                                    type="text"
                                    placeholder="Turku"
                                    label="Paikkakunta"
                                    />

                                  <span
                                    role="img"
                                    aria-label="Close"
                                    className="del__btn"
                                    onClick={() => {
                                      // if (fields.length === 1) {
                                      //   setShowDebtNotifcation(true);
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
                                {/*showDebtNotifcation && (
                                  <div className="notification is-danger form__notification">
                                  <button
                                  className="delete"
                                  onClick={() => setShowDebtNotifcation(false)}
                                  />
                                  Atleast one share info definition should exist!
                                  </div>
                                  )*/}
                                </div>
                              ))}
                              <span className="add__btn">
                                <button
                                  className="button is-small is-primary"
                                  onClick={() =>
                                    fields.push({ name: "", city: ""})
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

                      <hr />
    </div>
  )
}

export default Step1;
