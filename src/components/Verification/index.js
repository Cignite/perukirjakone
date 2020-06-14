import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Field, Form } from "react-final-form";
import * as EmailValidator from "email-validator";

import InputWrapper from '../Shared/Input';
import Error from '../Shared/Error';
import logo from '../images/logo.svg'

import {  uniqueDocumentCodeId } from '../utils';

import './styles.scss';

const API_BASE_URL = "https://perukirjakone.herokuapp.com/";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  console.log("value")
};


const UserVerfication = (props) => {
  console.log("UserRegistration", props);
  const [showLoader, setShowLoader] = React.useState(false);
  const [doesEmailExist, setDoesEmailExist] = React.useState(false);
  const [docData, setDocData] = React.useState(null);
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isTermsServiceAgreed, setIsTermsServiceAgreed] = React.useState(true);
  const [emailVerificationNotify, setEmailVerificationNotify] = React.useState(false);
  const [isCodeExist, setIsCodeExist] = React.useState(false);

  const getDocumentData = async (id) => {
    console.log("getdocumetn id", id)
    try {
      setShowLoader(true);
       await axios.get(`${API_BASE_URL}${'documents/'}${id}`)
        .then(res => {
          console.log("get data", res)
          // setState({
          //   values: res.data
          // });
          //codeValueHandler(res.data.code);
          setShowLoader(false);
        })
    } catch (error) {
      console.log(error);
    }
  }

  const verifyEmailCode = async (formData) => {
    setDoesEmailExist(false);
    if (!formData.email) {
      setIsEmailValid(false);
    }
    if (!formData.isTermsAgreed) {
      setIsTermsServiceAgreed(false);
    }
    if (!formData.isTermsAgreed) {
      setIsCodeExist(false);
    } else {
      try {
        setShowLoader(true);
          await axios.get(`${API_BASE_URL}${'documents?email='}${formData.email}${'&code='}${formData.code}`)
          .then(res => {
            console.log("verifyEmailCode respose", res)
            setShowLoader(false);
            if (!res.data.length > 0) {
              setDoesEmailExist(true);
            } else {
              setDoesEmailExist(false);
              setEmailVerificationNotify(true);
              setTimeout(()=>{
                props.history.push('/wizard-form');
              }, 5000);

              const getUserInfo = {
                email: res.data[0].email,
                code: res.data[0].code,
              }
              // check if local storage is available in browser
              // store email and code in local storage
              if (window.localStorage) {
                window.localStorage.setItem('userInfo', JSON.stringify(getUserInfo));
              }
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
                  <label className="label is-size-4">Verify code</label>
                  <p className="is-small grey-light">With
                  the help of verification code we can make sure that right person
                  is accessing Perukirjakone service.</p>
                </div>
                <br/>

                  <Form
                    initialValues={{isTermsAgreed: false}}
                    validate={values => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Email is required!';
                      } if (!EmailValidator.validate(values.email)) {
                        errors.email = "Invalid email address.";
                      }
                      if (!values.isTermsAgreed) {
                        errors.isTermsAgreed = "Accept terms of service!";
                      }
                      if (!values.code) {
                        errors.code = "Code is required!";
                      }
                      return errors
                    }}
                    onSubmit={onSubmit}
                    render={({ handleSubmit, pristine, values, submitting, invalid}) => (
                      <form onSubmit={handleSubmit} className="user-validation">
                        <div className="columns">
                          <div className="column control is-8">
                            <Field
                              name="email"
                              component={InputWrapper}
                              type="email"
                              placeholder="hello@abc.fi"
                              label="Email"
                            />
                            <Error name="email" />
                            <Error name="code" />
                          </div>
                          <div className="column control">
                            <Field
                              name="code"
                              component={InputWrapper}
                              type="password"
                              placeholder="30X30F"
                              label="Code"
                            />

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
                            onClick={() => verifyEmailCode(values)}
                            disabled={showLoader || submitting || pristine}
                          >
                            Verify code
                          </button>
                        </div>
                        {emailVerificationNotify && (
                          <div class="notification is-info">
                            <p>Email and code has been verified!</p>
                            <p>Redirecting....</p>
                          </div>
                        )}
                        {doesEmailExist && (
                          <div className="notification is-danger form__notification">
                            <button
                              className="delete"
                              onClick={() => setDoesEmailExist(false)}
                            />
                            Email or verification code didn't matched!
                          </div>
                        )}
                      </form>
                    )}
                  />


                <br/>
                <p className="has-text-centered">
                <a className="label has-text-weight-bold">
                  Email not validated?
                </a>
                </p>
                <h4 className="has-text-centered">
                  <Link to="/user-validation" className="has-text-weight-light">
                    Validate email
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
export default UserVerfication;
