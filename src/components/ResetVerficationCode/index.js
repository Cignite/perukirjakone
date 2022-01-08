import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Field, Form } from "react-final-form";
import * as EmailValidator from "email-validator";

import InputWrapper from '../Shared/Input';
import Error from '../Shared/Error';
import logo from '../images/logo.svg'

import {  uniqueDocumentCodeId } from '../utils';

import './styles.scss';

const API_BASE_URL = "https://perukirjakoneserver.herokuapp.com/";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  console.log("value")
};


const ResetVerificationCode = (props) => {
  console.log("ResetVerificationCode", props);
  const [showLoader, setShowLoader] = useState(false);
  const [doesEmailExist, setDoesEmailExist] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailVerificationNotify, setEmailVerificationNotify] = useState(false);

  const updateVerificationCode = async (payload, docId) => {
    const updatePayload = {
      ...payload,
    }
    console.log("postEmail payload", payload)
    try {
      setShowLoader(true);
       await axios.put(`${API_BASE_URL}${'customers/'}${docId}`, updatePayload)
        .then(res => {
          setShowLoader(false);
          setEmailVerificationNotify(true);
          setTimeout(()=>{
            props.history.push('/kirjaudu');
          }, 3000);

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
    else {
      try {
        setShowLoader(true);
         await axios.get(`${API_BASE_URL}${'customers?email='}${payload.email}`)
          .then(res => {
            console.log("checkIfEmailExist respose", res)
            if (!res.data.length > 0) {
              setShowLoader(false);
              setDoesEmailExist(true);
            } else {
              console.log("email doesn't exist")
              updateVerificationCode(payload, res.data[0].id);
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
                  <label className="label is-size-5">Pyydä uusi varmistuskoodi </label>
                    <p className="is-small primaryLabel">Ei huolta, lähetämme sinulle uuden varmistuskoodin. Laita sähköpostisi alapuolella olevaan ruutuun.</p>
                </div>
                <br/>

                  <Form
                    initialValues={{isTermsAgreed: false}}
                    validate={values => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Ei voi olla tyhjä';
                      } if (!EmailValidator.validate(values.email)) {
                        errors.email = "Epäkelpo sähköpostiosoite";
                      }
                      if (!values.isTermsAgreed) {
                        errors.isTermsAgreed = "Hyväksy käyttöehdot!";
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
                              label="Email"
                            />
                            <Error name="email" />
                          </div>
                        </div>

                        <div className="field level-right">
                          <button
                            className="button is-primary is-fullwidth"
                            onClick={() => submitEmail(values)}
                            disabled={showLoader || submitting || pristine}
                          >
                            Pyydä uusi varmistuskoodi
                          </button>
                        </div>
                        {emailVerificationNotify && (
                          <div class="notification is-info">
                            <p>Ei huolta, lähetämme sinulle uuden varmistuskoodin. Laita sähköpostisi alapuolella olevaan ruutuun. </p>
                            <p>Wait...Page is redirecting....</p>
                          </div>
                        )}
                        {doesEmailExist && (
                          <div className="notification is-danger form__notification">
                            <button
                              className="delete"
                              onClick={() => setDoesEmailExist(false)}
                            />
                            <span>Email is not registered! </span>
                            <Link to="/aloita" className="has-text-weight-light">
                              Register email
                            </Link>
                          </div>
                        )}
                        {isEmailValid && ( null )}

                      </form>
                    )}
                  />


                <br/>
                <p className="has-text-centered">
                  <span className="label has-text-weight-bold">
                  Already validated email?
                  </span>
                </p>

                <h4 className="has-text-centered">
                  <Link to="/kirjaudu" className="has-text-weight-light">
                    Code verification
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
export default ResetVerificationCode;
