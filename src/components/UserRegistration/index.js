import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Field, Form } from "react-final-form";
import * as EmailValidator from "email-validator";

import InputWrapper from '../Shared/Input';
import Error from '../Shared/Error';
import logo from '../images/logo.svg'

import {  uniqueDocumentCodeId } from '../utils';
import initialJSONSchemaValues from './initialJSONSchemaValues';

import './styles.scss';

const API_BASE_URL = "https://perukirjakoneserver.herokuapp.com/";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  console.log("value")
};


const UserRegistration = (props) => {
  console.log("UserRegistration", props);
  const [showLoader, setShowLoader] = useState(false);
  const [doesEmailExist, setDoesEmailExist] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTermsServiceAgreed, setIsTermsServiceAgreed] = useState(false);
  const [emailVerificationNotify, setEmailVerificationNotify] = useState(false);

  const createDocument = async (docId) => {
    const documentPayload = {
      customer: docId,
      jsonSchema: initialJSONSchemaValues
    }
    try {
      setShowLoader(true);
       await axios.post(`${API_BASE_URL}${'documents/'}`, documentPayload)
        .then(res => {
          console.log("documentPayload res", res)
          setShowLoader(false);
          setEmailVerificationNotify(true);
          setTimeout(()=> {
            props.history.push('/kirjaudu');
          }, 3000);

        })
    } catch (error) {
      console.log(error);
    }
  }

  const createCustomer = async (payload) => {
    const postPayload = {
      ...payload,
    }
    try {
      setShowLoader(true);
       await axios.post(`${API_BASE_URL}${'customers/'}`, postPayload)
        .then(res => {
          if (res.data) {
            console.log("customer res", res)
            createDocument(res.data.id);
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  const submitEmail = async (formData) => {
    const payload = { email: formData.email, code:  uniqueDocumentCodeId() };
    if (!formData.email) {
      setIsEmailValid(true);
    }
    if (!formData.isTermsAgreed) {
      setIsTermsServiceAgreed(false);
    } else {
      try {
        setShowLoader(true);
         await axios.get(`${API_BASE_URL}${'customers?email='}${payload.email}`)
          .then(res => {
            console.log("checkIfEmailExist respose", res)
            if (res.data.length > 0) {
              setShowLoader(false);
              setDoesEmailExist(true);
            } else {
              createCustomer(payload);
            }
          })
      } catch (error) {
        console.log(error);
      }
    }
  }

  return(
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8-tablet is-6-desktop is-4-widescreen">
              <div action="" className="box ">
                <div className="section has-text-centered">
                  <Link to="/" className="logo">
                    <img src={logo} alt="Perukirjakone" className="has-text-centered" />
                  </Link>
                </div>
                <div className="field has-text-centered">
                  <label className="label is-size-5">Sähköpostiosoitteen vahvistaminen</label>
                    <p className="is-small primaryLabel">Kirjoitathan sähköpostiosoitteesi alla olevaan laatikkoon, jotta voimme todentaa tietosi. Lähetämme sinne lyhyen koodin, jonka avulla palveluun pääsee sisään (tarkista myös roskaposti kansio).
                      <br />Jos sinulla on jo lähetetty koodi tallessa, kirjauduthan sisään palveluun painamalla sivun alareunassa olevaa nappia “vahvista koodi”.
                    </p>
                </div>
                <br/>

                  <Form
                    initialValues={{isTermsAgreed: false}}
                    validate={values => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Email can not be empty';
                      } if (!EmailValidator.validate(values.email)) {
                        errors.email = "Epäkelpo sähköpostiosoite";
                      }
                      if (!values.isTermsAgreed) {
                        errors.isTermsAgreed = "Accept terms of service!";
                      }
                      return errors
                    }}
                    onSubmit={onSubmit}
                    render={({ handleSubmit, pristine, values, submitting, invalid}) => (
                      <form onSubmit={handleSubmit} className="user-validation">
                        <div className="columns">
                          <div className="column">
                            <Field
                              name="email"
                              component={InputWrapper}
                              type="email"
                              placeholder="hello@abc.fi"
                              label="Sähköpostin todennus"
                            />
                            <Error name="email" />
                          </div>
                        </div>
                        <div className="field">
                          <Field
                            name="isTermsAgreed"
                            component="input"
                            type="checkbox"
                            id="isTermsAgreed"
                            className="agreeCheckbox"
                          />

                        <label className="checkbox checkbox-primary primaryLabel" htmlFor="isTermsAgreed">
                            &nbsp;Hyväksyn palvelun ehdot ja yksityisyydensuoja säännökset
                          </label>
                          <Error name="isTermsAgreed" />
                        </div>

                        <div className="field level-right">
                          <button
                            className="button is-primary is-fullwidth"
                            onClick={() => submitEmail(values)}
                            disabled={showLoader || submitting || pristine}
                          >
                            Varmista sähköposti
                          </button>
                        </div>
                        {emailVerificationNotify && (
                          <div className="notification is-info">
                            <p>Olemme lähettäneet varmistuskoodin sähköpostiosoitteeseesi!</p>
                            <p>Odota ... Sivua ohjataan ....</p>
                          </div>
                        )}
                        {doesEmailExist && (
                          <div className="notification is-danger form__notification">
                            <button
                              className="delete"
                              onClick={() => setDoesEmailExist(false)}
                            />
                            <span>Sähköposti on jo järjestelmässä! </span>
                            <Link to="/kirjaudu" className="has-text-weight-light">
                              Kirjaudu
                            </Link>
                          </div>
                        )}
                        {isEmailValid && isTermsServiceAgreed && ( null )}

                      </form>
                    )}
                  />


                <br/>
                <p className="has-text-centered">
                  <span className="label has-text-weight-bold">
                    Sähköpostiosoitetta ei ole varmistettu?
                  </span>
                </p>

                <h4 className="has-text-centered">
                  <Link to="/kirjaudu" className="has-text-weight-light">
                    Kirjaudu
                </Link>
              </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
export default UserRegistration;
