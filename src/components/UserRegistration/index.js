import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Field, Form } from "react-final-form";
import * as EmailValidator from "email-validator";

import InputWrapper from '../Shared/Input';
import Error from '../Shared/Error';
import logo from '../images/logo.svg'

import {  uniqueDocumentCodeId } from '../utils';
import initialJSONSchemaValues from './initialJSONSchemaValues';

import './styles.scss';

const API_BASE_URL = "https://perukirjakone.herokuapp.com/";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  console.log("value")
};


const UserRegistration = (props) => {
  console.log("UserRegistration", props);
  const [showLoader, setShowLoader] = useState(false);
  const [doesEmailExist, setDoesEmailExist] = useState(false);
  const [docData, setDocData] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isTermsServiceAgreed, setIsTermsServiceAgreed] = useState(true);
  const [emailVerificationNotify, setEmailVerificationNotify] = useState(false);

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  //   if (userInfo) {
  //     if(userInfo.email && userInfo.code) {
  //       props.history.push('/wizard-form')
  //     }
  //   }
  // }, [])

  const postEmail = async (payload) => {
    const postPayload = {
      ...payload,
      jsonSchema: initialJSONSchemaValues
    }
    console.log("postEmail payload", payload)
    try {
      setShowLoader(true);
       await axios.post(`${API_BASE_URL}${'documents/'}`, postPayload)
        .then(res => {
          setShowLoader(false);
          setEmailVerificationNotify(true);
          setTimeout(()=>{
            props.history.push('/user-verification');
          }, 5000);

        })
    } catch (error) {
      console.log(error);
    }
  }

  const submitEmail = async (formData) => {
    const payload = { email: formData.email, code:  uniqueDocumentCodeId() };
    if (!formData.email) {
      setIsEmailValid(false);
    }
    if (!formData.isTermsAgreed) {
      setIsTermsServiceAgreed(false);
    } else {
      try {
        setShowLoader(true);
         await axios.get(`${API_BASE_URL}${'documents?email='}${payload.email}`)
          .then(res => {
            console.log("checkIfEmailExist respose", res)
            if (res.data.length > 0) {
              setShowLoader(false);
              setDoesEmailExist(true);
            } else {
              postEmail(payload);
            }
          })
      } catch (error) {
        console.log(error);
      }
    }
  }

  return(
    <section className="hero is-fullheight is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-tablet is-4-desktop is-4-widescreen">
              <div action="" className="box ">
                <div className="section has-text-centered">
                  <Link to="/" className="logo">
                    <img src={logo} alt="Perukirjakone" className="has-text-centered" />
                  </Link>
                </div>
                <div className="field has-text-centered">
                  <label className="label is-size-5">Email validation </label>
                    <p className="is-small">We need email to verify right person is using
                      Perukirjakone service.</p>
                </div>
                <br/>

                  <Form
                    initialValues={{isTermsAgreed: false}}
                    validate={values => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Email can not be empty';
                      } if (!EmailValidator.validate(values.email)) {
                        errors.email = "Invalid email address.";
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
                              label="Email"
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
                          />

                          <label className="checkbox" htmlFor="isTermsAgreed">
                            &nbsp;I agree to the terms and services and privacy policy
                          </label>
                          <Error name="isTermsAgreed" />
                        </div>

                        <div className="field level-right">
                          <button
                            className="button is-success is-fullwidth"
                            onClick={() => submitEmail(values)}
                            disabled={showLoader || submitting || pristine}
                          >
                            Validate email
                          </button>
                        </div>
                        {emailVerificationNotify && (
                          <div class="notification is-info">
                            <p>We have send verification code in your email address!</p>
                            <p>Redirecting....</p>
                          </div>
                        )}
                        {doesEmailExist && (
                          <div className="notification is-danger form__notification">
                            <button
                              className="delete"
                              onClick={() => setDoesEmailExist(false)}
                            />
                            <span>Email address already exist! </span>
                            <Link to="/user-verification" className="has-text-weight-light">
                              Verify code
                            </Link>
                          </div>
                        )}
                      </form>
                    )}
                  />


                <br/>
                <p className="has-text-centered">
                <a className="label has-text-weight-bold">
                    Already validated email?
                  </a>
                </p>

                <h4 className="has-text-centered">
                  <Link to="/user-verification" className="has-text-weight-light">
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
export default UserRegistration;
