import React from 'react';
import { Field } from "react-final-form";
import { FieldArray } from 'react-final-form-arrays';

import InputWrapper from '../../../Shared/Input';

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
  const [showDeceasedNotification, setShowDeceasedNotification] = React.useState(false);
  const [showPropertyNotification, setShowPropertyNotification] = React.useState(false);
  //const [showBankAccountNotification, setShowBankAccountNotification] = React.useState(false);
  //const [showShareInfoNotification, setShowShareInfoNotification] = React.useState(false);
  const [showPaintingInfo, setShowPaintingInfo] = React.useState(false);
  const [showDebtNotifcation, setShowDebtNotifcation] = React.useState(false);
  // const [showFuneralExpensesInfo, setShowFuneralExpensesInfo] = React.useState(false);
  const [showWidowBankInfo, setShowWidowBankInfo] = React.useState(false);
  //const [codeValue, setCodeValue] = React.useState("");

  return (
    <div className="form__content">
      <h3 className="title is-4">1.1 Asiakaan tiedot</h3>
      <hr />
      <div className="columns">
        <div className="column">
          <Field
            name="customerFirstName"
            component={InputWrapper}
            type="text"
            placeholder="Heikki"
            label="Firstname"
            />
          <Error name="customerFirstName" />
        </div>
        <div className="column">
          <Field
            name="customerlastName"
            component={InputWrapper}
            type="text"
            placeholder="Halonen"
            label="Lastname"
            />
          <Error name="customerlastName" />
        </div>
        <div className="column">
          <Field
            name="customerSSN"
            component={InputWrapper}
            type="text"
            placeholder="24444-39F"
            label="SSN"
            />
          <Error name="customerSSN" />
        </div>
        <div className="column">
          <Field
            name="address"
            component={InputWrapper}
            type="text"
            placeholder="Hammenkatu 1, 20500 Turku"
            label="Address"
            />
          <Error name="address" />
        </div>
      </div>

      <div className="columns">
        <div className="column is-3">
          <Field
            name="customerTimeOfDeath"
            component={renderDatePickerField}
            label="Time of death"
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
            label="Place of death"
            />
          <Error name="agreeementPlace" />
        </div>
      </div>
      <h3 className="title is-4">1.2 Shareholders</h3>
      <hr />
      <p className="primary">Who are the partners in the estate?</p>
      <div className="columns">
        <div className="column is-3">
          <Field
            name="shareholderName"
            component={InputWrapper}
            type="text"
            placeholder="Hannu Hakala"
            label="Osakkaat nimi"
            />
          <Error name="shareholderName" />
        </div>
        <div className="column is-3">
          <Field
            name="shareholderSSN"
            component={InputWrapper}
            type="text"
            placeholder="010879-482B"
            label="SSN"
            />
          <Error name="shareholderSSN" />
        </div>
      </div>

      <div className="columns">
        <div className="column is-4">
          <p className="primary">Relationship to the deceased person?</p>
          <br />
          <FieldArray name="deceasedPerson">
            {({ fields }) => {
              return (
                <div>
                  {fields.map((name, index) => (
                    <div key={name}>
                      <Field
                        name={`${name}.relationType`}
                        component={InputWrapper}
                        type="text"
                        placeholder="esim. leski / tytär / poika / isä / äiti / muu"
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
                  ))}
                  <span className="add__btn">
                    <button
                      className="button is-small is-primary"
                      onClick={() =>
                        fields.push({ relationType: ""})
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
        </div>
      </div>
      <h3 className="title is-4">1.3 Testament</h3>
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
              Has the property of the deceased or it’s part been assigned to someone
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
              label="Person name"
              />
            <Error name="testamentPropertyAssignInfo" />
          </div>
        </Condition>
      </div>

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
              label="Time of death"
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
              label="Date of prenub"
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
            <label htmlFor="isOtherDocumentChecked" className="primary">Other documents and info</label>
          </div>
        </div>
      </div>
      <div className="columns">
        <Condition when="isOtherDocumentChecked" is={true}>
          <div className="column is-6">
            <Field
              name="otherDocumentInfo"
              component={InputWrapper}
              type="textarea"
              placeholder="Other documents"
              label="Other documents and info"
              />
            <Error name="otherDocumentInfo" />
          </div>
        </Condition>
      </div>


      <h3 className="title is-4">1.5 KIINTEISTÖT / HUONEISTOT</h3>
      <hr />
      <p className="primary">What property/apartments did the deseaced person have?</p>
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
                      className="del__btn"
                      aria-label="Close"
                      onClick={() => {
                        if (fields.length === 1) {
                          setShowPropertyNotification(true);
                          console.log("min one")
                        } else {
                          fields.remove(index)}
                        }
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fa fa-trash" />
                    </span>
                  </div>


                  <Error name={`${name}.name`} />
                  {showPropertyNotification && (
                    <div className="notification is-danger form__notification">
                      <button
                        className="delete"
                        onClick={() => setShowPropertyNotification(false)}
                        />
                      Atleast one property definition should exist!
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

    <h3 className="title is-4">1.6 RAHAVARAT KORKOINEEN</h3>
    <hr />
    <p className="primary">Pankin / pankkitilin tiedot ja saldo</p>

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
                    placeholder="Bank account number"
                    label="Enter Bank account number"
                    />
                </div>
                <div className="column is-2">
                  <Field
                    name={`${name}.value`}
                    component={InputWrapper}
                    type="text"
                    placeholder="esim: €40k"
                    label="Amount (€)"
                    />

                  <span
                    role="img"
                    className="del__btn"
                    aria-label="Close"
                    onClick={() => {
                      if (fields.length === 1) {
                        setShowWidowBankInfo(true);
                        console.log("min one")
                      } else {
                        fields.remove(index)}
                      }
                    }
                    style={{ cursor: "pointer" }}
                    >
                    <i className="fa fa-trash" />
                  </span>
                </div>


                <Error name={`${name}.name`} />
                {showWidowBankInfo && (
                  <div className="notification is-danger form__notification">
                    <button
                      className="delete"
                      onClick={() => setShowWidowBankInfo(false)}
                      />
                    Atleast one Bank account definition should exist!
                  </div>
                )}
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
                Add more
              </button>
            </div>
          </div>
        );
      }}
    </FieldArray>


    <hr />
    <p className="primary">Osakkeen tiedot/määrä  Hinta</p>

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
                    placeholder="Stock name"
                    label="Nordnet"
                    />
                </div>
                <div className="column is-2">
                  <Field
                    name={`${name}.value`}
                    component={InputWrapper}
                    type="text"
                    placeholder="40 shares"
                    label="Value"
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
                    <i className="fa fa-trash" />
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
            Did the deceased have a car / motorbike / boat / trailer etc?
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
            placeholder="Audi"
            label="Car brand/type/year/registration number"
            />
          <Error name="deceasedCarBrandTypeInfo" />
        </div>
        <div className="column is-2">
          <Field
            name="deceasedCarBrandTypeValue"
            component={InputWrapper}
            type="text"
            placeholder="5K"
            label="Value (€)"
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
            placeholder="BMW AZ"
            label="Motorbike brand/year/registration number"
            />
          <Error name="deceasedMotorBikeBrandTypeInfo" />
        </div>
        <div className="column is-2">
          <Field
            name="deceasedMotorBikeBrandTypeValue"
            component={InputWrapper}
            type="text"
            placeholder="5K"
            label="Value (€)"
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
            Onko irtaimen omaisuuden arvo yli 4000 euroa?
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
                      <i className="fa fa-trash" />
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
              <span className="add__btn margin">
                <button
                  className="button is-small is-primary add"
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
      <div className="column is-6">
        <div>
          <Field
            name="isHKIrtaminen"
            component="input"
            type="checkbox"
            className="form__checkbox"
            id="isHKIrtaminen"
            />
          <label htmlFor="isHKIrtaminen" className="primary">HK Irtaminen omaisuus (including previous one)</label>
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
                      placeholder="Omaisuus"
                      label="Omaisuus"
                      />
                    <Error name={`${name}.name`} />
                  </div>
                  <div className="column is-2">
                    <Field
                      name={`${name}.value`}
                      component={InputWrapper}
                      type="text"
                      placeholder="€4000"
                      label="Amount (€)"
                      />
                    <Error name={`${name}.value`} />
                    <span
                      role="img"
                      aria-label="Close"
                      className="del__btn"
                      onClick={() => {
                        if (fields.length === 1) {
                          setShowDebtNotifcation(true);
                          console.log("min one")
                        } else {
                          fields.remove(index)}
                        }
                      }
                      style={{ cursor: "pointer" }}
                      >
                      <i className="fa fa-trash" />
                    </span>
                  </div>


                  <Error name={`${name}.bankaccount`} />
                  {showDebtNotifcation && (
                    <div className="notification is-danger form__notification">
                      <button
                        className="delete"
                        onClick={() => setShowDebtNotifcation(false)}
                        />
                      Atleast one share info definition should exist!
                    </div>
                  )}
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
                  Add more
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
            name="didDeceasedHaveDebt"
            component="input"
            type="checkbox"
            className="form__checkbox"
            id="didDeceasedHaveDebt"
            />
          <label htmlFor="didDeceasedHaveDebt" className="primary">
            Did the deceaced have any remaining debts?
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
                      placeholder="Debt Info"
                      label="Debt Info"
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
                      <i className="fa fa-trash" />
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
                  className="button is-small is-primary "
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

    <h3 className="title is-4">1.7 THE MONEY OF THE WIDOW WITH INTEREST (ALSO STOCKS & FUNDS)</h3>
    <hr />
    <h6 className="title is-6">LESKEN RAHAVARAT KORKOINEEN</h6>
    <p className="primary">Pankin / pankkitilin tiedot ja saldo</p>
    <div>
      <FieldArray name="widowBankAccountInfo">
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
                      <i className="fa fa-trash" />
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
            name="verifyInfoProvidedIsCorrect"
            component="input"
            type="checkbox"
            className="form__checkbox"
            id="verifyInfoProvidedIsCorrect"
            />
          <label htmlFor="verifyInfoProvidedIsCorrect" className="primary">
            I certify that I have entered all the necessary documents into the perukirjakone and that I have received all the other supporting documents to finalize this process.?
          </label>
        </div>
      </div>
    </div>

    <div className="columns">
      <div className="column is-6">
        <div>
          <Field
            name="haveAllPartiesInvited"
            component="input"
            type="checkbox"
            className="form__checkbox"
            id="haveAllPartiesInvited"
            />
          <label htmlFor="haveAllPartiesInvited" className="primary">
            Have all the parties been invited to this estate inventory?
          </label>
        </div>
      </div>
    </div>

    <h3 className="title is-6">The announcement of the widow (1). </h3>
    <div className="columns">
      <div className="column is-6">
        <div>
          <Field
            name="doesWidowWantsToLiveInSameApartment"
            component="input"
            type="checkbox"
            className="form__checkbox"
            id="doesWidowWantsToLiveInSameApartment"
            />
          <label htmlFor="doesWidowWantsToLiveInSameApartment" className="primary">
            Does the widow want to remain living in the apartment?
          </label>
        </div>
      </div>
    </div>

    <h3 className="title is-6">Other announcements  (2)  </h3>
    <div className="columns">
      <div className="column is-6">
        <div>
          <Field
            name="isOtherAnnouncement"
            component="input"
            type="checkbox"
            className="form__checkbox"
            id="isOtherAnnouncement"
            />
          <label htmlFor="isOtherAnnouncement" className="primary">
            Do you want to make other announcements?
          </label>
        </div>
      </div>
    </div>

    <h3 className="title is-6">Was there life insurance </h3>
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
          <label htmlFor="isThereLifeInsurance" className="primary">Was there life insurance? </label>
        </div>
      </div>
    </div>

    <div className="columns">
      <Condition when="isThereLifeInsurance" is={true}>
        <div className="column is-3">
          <Field
            name="insuranceName"
            component={InputWrapper}
            type="text"
            placeholder="If Insurance"
            label="Insurance name/number/company"
            />
        </div>
        <div className="column is-3">
          <Field
            name="insuranceAmount"
            component={InputWrapper}
            type="text"
            placeholder=""
            label="Amount"
            />
        </div>
        <div className="column is-3">
          <Field
            name="insuranceDate"
            component={renderDatePickerField}
            label="Date"
            placeholder="01.08.2020"
            />
          <Error name="insuranceDate" />
        </div>
      </Condition>
    </div>


    <h3 className="title is-4">Kuka on kutsunut kuolinpesän osakkaat tähän perunkirjoitus tilaisuuteen</h3>
    <hr />
    <div className="columns">
      <div className="column">
        <Field
          name="inviteeName"
          component={InputWrapper}
          type="text"
          placeholder="Heikki"
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
          label="Place"
          />
        <Error name="inviteePlace" />
      </div>
      <div className="column">
        <Field
          name="inviteeDate"
          component={renderDatePickerField}
          label="Date"
          placeholder="01.08.2020"
          />
        <Error name="inviteeDate" />
      </div>
    </div>


    <h3 className="title is-4">Ketkä ovat uskotut miehet? (who are the trusted men)?</h3>
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
          label="Place"
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
          placeholder="Pettri Rokanen"
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
          label="Place"
          />
        <Error name="trustedMenPlaceSecond" />
      </div>
    </div>

    <h3 className="title is-4">Kuka on läsnä perunkirjoitustilaisuudessa?  Who is present?</h3>
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
                    placeholder="Halo Toimi"
                    label="Name"
                    />
                </div>
                <div className="column is-3">
                  <Field
                    name={`${name}.city`}
                    component={InputWrapper}
                    type="text"
                    placeholder="Turku"
                    label="City"
                    />

                  <span
                    role="img"
                    aria-label="Close"
                    className="del__btn"
                    onClick={() => {
                      if (fields.length === 1) {
                        setShowDebtNotifcation(true);
                        console.log("min one")
                      } else {
                        fields.remove(index)}
                      }
                    }
                    style={{ cursor: "pointer" }}
                    >
                    <i className="fa fa-trash" />
                  </span>
                </div>


                <Error name={`${name}.name`} />
                {showDebtNotifcation && (
                  <div className="notification is-danger form__notification">
                    <button
                      className="delete"
                      onClick={() => setShowDebtNotifcation(false)}
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
                  fields.push({ name: "", city: ""})
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

    <hr />
  </div>
)
}

export default Step1;
