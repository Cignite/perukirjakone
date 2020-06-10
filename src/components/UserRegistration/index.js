import React from "react";
import { Link } from 'react-router-dom';

import { Field, Form } from "react-final-form";
import * as EmailValidator from "email-validator";

import InputWrapper from '../Shared/Input';
import Error from '../Shared/Error';
import logo from '../images/logo.svg'

import './styles.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};


const UserRegistration = () => {

  const submitEmail = (payload) => {
    console.log("submitEmail", payload);
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
                    validate={values => { // validate both passowrds are same
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Email can not be empty';
                      } if (!EmailValidator.validate(values.email)) {
                        errors.email = "Invalid email address.";
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
                          <label className="checkbox">
                            <input type="checkbox" />
                            &nbsp;I agree to the terms and services and privacy policy
                          </label>
                        </div>


                        <div className="field level-right">
                          <button className="button is-success is-fullwidth" onClick={() => submitEmail(values)}>
                            Validate email
                          </button>
                        </div>
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
