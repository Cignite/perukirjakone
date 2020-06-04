import React from "react";
import { render } from "react-dom";
import { Field } from "react-final-form";
import moment from 'moment';
import { ARRAY_ERROR } from 'final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays';
import * as EmailValidator from "email-validator";

import Wizard from "./Wizard";
import InputWrapper from './components/InputAdapter';
import renderDatePickerField from '../Shared/Datepicker';
import renderFileInputField from '../Shared/FileInput';
import Error from '../Shared/Error';


import './styles.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const required = value => (value ? undefined : "Required");

const Condition = ({ when, is, children }) => {
  console.log("when", when);
  console.log("is", is);
  console.log("children", children);
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  )
}

const StepWizard = () => {
  const [showDeceasedNotification, setShowDeceasedNotification] = React.useState(false);

  return(
    <Wizard
      initialValues={{
        employed: true,
        stooge: "larry",
        deceasedPerson: [
          { relationType: "" },
        ],
        property: [
          { name: "" , value: ""},
        ]
      }}
      onSubmit={onSubmit}
    >
      <Wizard.Step
        validate={values => { // validate both passowrds are same
          const errors = {};
          if (!values.email) {
            errors.email = 'Email can not be empty';
          } if (!EmailValidator.validate(values.email)) {
            errors.email = "Invalid email address.";
          }
          return errors
        }}
      >
        <div class="columns form__col">
          <div class="column is-3">
            <Field
              name="email"
              component={InputWrapper}
              type="email"
              placeholder="hello@abc.fi"
              label="Email"
            />
            <Error name="email" />
          </div>
        </div>
      </Wizard.Step>
      <Wizard.Step
        validate={values => { // validate both passowrds are same
          const errors = {};
          if (!values.email) {
            errors.email = 'Email can not be empty';
          } if (!EmailValidator.validate(values.email)) {
            errors.email = "Invalid email address.";
          }
          if (!values.code) {
            errors.code = 'Code can not be empty';
          }
          return errors
        }}
      >
        <div class="columns form__col">
          <div class="column is-3">
            <Field
              name="code"
              component={InputWrapper}
              type="text"
              placeholder="4X4D"
              label="Code"
            />
            <Error name="code" />
          </div>
        </div>
      </Wizard.Step>
      <Wizard.Step
        validate={values => {
          const errors = {};
          if (!values.firstname) {
            errors.firstname = "This is required field";
          }
          if (!values.lastname) {
            errors.lastname = "This is required field";
          }
          if (!values.sotu) {
            errors.sotu = "This is required field";
          }
          if (!values.kuolinaika) {
            errors.kuolinaika = "This is required field";
          }
          if (!values.paika) {
            errors.paika = "This is required field";
          }
          if (!values.file) {
            errors.file = "No file selected.";
          }
          return errors;
        }}
      >
        <div className="form__content">
          <h3 className="title is-3">2.1 Asiakaan tiedot</h3>
          <hr />
          <div className="columns">
            <div class="column">
              <Field
                name="firstname"
                component={InputWrapper}
                type="text"
                placeholder="Heikki"
                label="Firstname"
              />
              <Error name="firstname" />
            </div>
            <div class="column">
              <Field
                name="middlename"
                component={InputWrapper}
                type="text"
                placeholder="Kimo"
                label="Middlename"
              />
              <Error name="middlename" />
            </div>
            <div class="column">
              <Field
                name="lastname"
                component={InputWrapper}
                type="text"
                placeholder="Halonen"
                label="Lastname"
              />
              <Error name="lastname" />
            </div>
            <div class="column">
              <Field
                name="sotu"
                component={InputWrapper}
                type="text"
                placeholder="24444-39F"
                label="Sotu"
              />
              <Error name="sotu" />
            </div>
          </div>

          <div className="columns">
            <div class="column is-3">
              <Field
                name="kuolinaika"
                component={renderDatePickerField}
                label="Time of death"
                placeholder="01.08.2020"
              />
              <Error name="kuolinaika" />
            </div>
            <div class="column is-3">
              <Field
                name="paika"
                component={InputWrapper}
                type="text"
                placeholder="Turku"
                label="Place"
              />
              <Error name="paika" />
            </div>
          </div>
          <h3 className="title is-3">2.2 Shareholders</h3>
          <hr />
          <p>Who are the partners in the estate?</p>
          <div className="columns">
            <div class="column is-3">
              <Field
                name="osakkaatnimi"
                component={InputWrapper}
                type="text"
                placeholder="Hannu Hakala"
                label="Osakkaat nimi"
              />
              <Error name="osakkaatnimi" />
            </div>
            <div class="column is-3">
              <Field
                name="osakkaatssn"
                component={InputWrapper}
                type="text"
                placeholder="010879-482B"
                label="SSN"
              />
              <Error name="osakkaatssn" />
            </div>
          </div>

          <div className="columns">
            <div className="column is-4">
              <p>Relationship to the deceased person?</p>
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
                            placeholder="esim: Poika/Tytär/leski/sisar/veli"
                          />

                          <span
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
          <h3 className="title is-3">2.3 Testament</h3>
          <hr />
          <div className="columns">
            <div class="column is-6">
              <div>
                <Field name="isTestamentDeceased" component="input" type="checkbox" className="form__checkbox" />
                <label>Has the property of the deceased or it’s part been assigned to someone</label>
              </div>
            </div>
          </div>
          <div className="columns">
            <Condition when="isTestamentDeceased" is={true}>
              <div class="column is-3">
                <Field
                  name="deceasedPersonName"
                  component={InputWrapper}
                  type="text"
                  placeholder="Hannu Harala"
                  label="Person name"
                />
                <Error name="deceasedPersonName" />
              </div>
            </Condition>
          </div>

          <h3 className="title is-3">2.4 TOIMITUKSEN PERUSTEENA OLEVAT ASIAKIRJAT JA TIEDOT</h3>
          <hr />
          <div className="columns">
            <div class="column is-6">
              <div>
                <Field name="isSukuselvitykset" component="input" type="checkbox" className="form__checkbox" />
                <label>Sukuselvitykset</label>
              </div>
            </div>
          </div>
          <div className="columns">
            <Condition when="isSukuselvitykset" is={true}>
              <div class="column is-3">
                <Field
                  name="sukuselvityksetText"
                  component={InputWrapper}
                  type="text"
                  placeholder="sukuselvityksetText"
                  label="Sukuselvitykset"
                />
                <Error name="sukuselvityksetText" />
              </div>
            </Condition>
          </div>

          <div className="columns">
            <div class="column is-6">
              <div>
                <Field name="isTestamentti" component="input" type="checkbox" className="form__checkbox" />
                <label>Testamentti</label>
              </div>
            </div>
          </div>
          <div className="columns">
            <Condition when="isTestamentti" is={true}>
              <div class="column is-3">
                <Field
                  name="kuolinaika"
                  component={renderDatePickerField}
                  label="Time of death"
                  placeholder="01.08.2020"
                />
                <Error name="isTestamentti" />
              </div>
            </Condition>
          </div>

          <div className="columns">
            <div class="column is-6">
              <div>
                <Field name="isAvioehtosopimukset" component="input" type="checkbox" className="form__checkbox" />
                <label>Avioehtosopimukset</label>
              </div>
            </div>
          </div>
          <div className="columns">
            <Condition when="isAvioehtosopimukset" is={true}>
              <div class="column is-3">
                <Field
                  name="isAvioehtosopimukset"
                  component={renderDatePickerField}
                  label="Date of prenub"
                  placeholder="01.08.2020"
                />
                <Error name="isAvioehtosopimukset" />
              </div>
            </Condition>
          </div>

          <h3 className="title is-3">2.5 KIINTEISTÖT / HUONEISTOT</h3>
          <hr />
          <p>What property/apartments did the deseaced person have?</p>

          <div className="columns">
            <div className="column is-4">
              <br />
              <FieldArray name="property">
                {({ fields }) => {
                  return (
                    <div>
                      {fields.map((name, index) => (
                        <div key={name}>
                          <Field
                            name={`${name}.name`}
                            component={InputWrapper}
                            type="text"
                            placeholder="esim: Huone/Talo"
                          />

                          <Field
                            name={`${name}.value`}
                            component={InputWrapper}
                            type="text"
                            placeholder="esim: €40k"
                          />

                          <span
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
                          <Error name={`${name}.property`} />
                          {showDeceasedNotification && (
                            <div class="notification is-danger form__notification">
                              <button
                                class="delete"
                                onClick={() => setShowDeceasedNotification(false)}
                              />
                              Atleast one property definition should exist!
                            </div>
                          )}
                        </div>
                      ))}
                      <span className="add__btn">
                        <button
                          className="button is-small is-primary"
                          onClick={() =>
                            fields.push({ property: ""})
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

        </div>
      </Wizard.Step>
      <Wizard.Step
        validate={values => {
          const errors = {};
          if (!values.toppings) {
            errors.toppings = "Required";
          } else if (values.toppings.length < 2) {
            errors.toppings = "Choose more";
          }
          return errors;
        }}
      >
        <div>
          <label>Employed?</label>
          <Field name="employed" component="input" type="checkbox" />
        </div>
        <div>
          <label>Toppings</label>
          <Field name="toppings" component="select" multiple>
            <option value="ham">🐷 Ham</option>
            <option value="mushrooms">🍄 Mushrooms</option>
            <option value="cheese">🧀 Cheese</option>
            <option value="chicken">🐓 Chicken</option>
            <option value="pineapple">🍍 Pinapple</option>
          </Field>
          <Error name="toppings" />
        </div>
      </Wizard.Step>
      <Wizard.Step
        validate={values => {
          const errors = {};
          if (!values.notes) {
            errors.notes = "Required";
          }
          return errors;
        }}
      >
        <div>
          <label>Best Stooge?</label>
          <div>
            <label>
              <Field
                name="stooge"
                component="input"
                type="radio"
                value="larry"
              />
              Larry
            </label>
            <label>
              <Field name="stooge" component="input" type="radio" value="moe" />{" "}
              Moe
            </label>
            <label>
              <Field
                name="stooge"
                component="input"
                type="radio"
                value="curly"
              />
              Curly
            </label>
          </div>
        </div>
        <div>
          <label>Notes</label>
          <Field name="notes" component="textarea" placeholder="Notes" />
          <Error name="notes" />
        </div>
      </Wizard.Step>
    </Wizard>
  )
}

export default StepWizard;
