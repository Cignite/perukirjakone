import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Field, Form } from "react-final-form";
import * as EmailValidator from "email-validator";

import InputWrapper from '../Shared/Input';
import Error from '../Shared/Error';
import logo from '../images/logo.svg'

import './styles.scss';

const API_BASE_URL = "https://perukirjakoneserver.herokuapp.com/";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  console.log("value")
};


const UserVerfication = (props) => {
  console.log("UserRegistration", props);
  const [showLoader, setShowLoader] = React.useState(false);
  const [doesEmailExist, setDoesEmailExist] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isTermsServiceAgreed, setIsTermsServiceAgreed] = React.useState(false);
  const [emailVerificationNotify, setEmailVerificationNotify] = React.useState(false);
  const [isCodeExist, setIsCodeExist] = React.useState(false);

  const verifyEmailCode = async (formData) => {
    setDoesEmailExist(false);
    if (!formData.email) {
      setIsEmailValid(false);
    }
    if (!formData.isTermsAgreed) {
      setIsTermsServiceAgreed(false);
    }
    if (!formData.code) {
      setIsCodeExist(false);
    } else {
      try {
        setShowLoader(true);
          await axios.get(`${API_BASE_URL}${'customers?email='}${formData.email}${'&code='}${formData.code}`)
          .then(res => {
            console.log("verifyEmailCode respose", res)
            setShowLoader(false);
            if (!res.data.length > 0) {
              setDoesEmailExist(true);
            } else {
              setDoesEmailExist(false);
              setEmailVerificationNotify(true);
              setTimeout(()=>{
                props.history.push('/lomake');
              }, 3000);

              const getUserInfo = {
                email: res.data[0].email,
                code: res.data[0].code,
                id: res.data[0].document.id,
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
                  <label className="label is-size-4">Varmistuskoodi</label>
                  <p className="is-small primaryLabel">
                  Sähköpostin ja vahvistuskoodin avulla voimme varmistaa, että oikea henkilö käyttää Perukirjakone -palvelua.</p>
                </div>
                <br/>

                  <Form
                    initialValues={{isTermsAgreed: false}}
                    validate={values => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Sähköposti vaaditaan!';
                      } if (!EmailValidator.validate(values.email)) {
                        errors.email = "Virheellinen!";
                      }
                      if (!values.code) {
                        errors.code = "Koodi tarvitaan!";
                      }
                      return errors
                    }}
                    onSubmit={onSubmit}
                    render={({ handleSubmit, pristine, values, submitting, invalid}) => (
                      <form onSubmit={handleSubmit} className="user-validation">
                        <div className="row">
                          <div className="control">
                            <Field
                              name="email"
                              component={InputWrapper}
                              type="email"
                              placeholder="hello@abc.fi"
                              label="Sähköpostin todennus"
                            />
                            <Error name="email" />
                          </div>
                          <br />
                        </div>
                        <div className="row">
                          <div className="lost__code">
                            <Link to="/tilaa-uusi-koodi" className="has-text-weight-light">
                              Unohtunut tai Kadonnut koodi?
                            </Link>
                          </div>
                          <div className=" control">
                            <Field
                              name="code"
                              component={InputWrapper}
                              type="password"
                              placeholder="30X30F"
                              label="Koodi"
                            />
                            <Error name="code" />
                          </div>
                          <br />
                        </div>

                        <div className="field level-right">
                          <button
                            className="button is-primary is-fullwidth"
                            onClick={() => verifyEmailCode(values)}
                            disabled={showLoader || submitting || pristine}
                          >
                          Varmista koodi

                          </button>
                        </div>
                        {emailVerificationNotify && (
                          <div class="notification is-info">
                            <p>Sähköpostiosoite ja koodi on vahvistettu!</p>
                            <p>Odota.. sivu ohjataan uudelleen....</p>
                          </div>
                        )}
                        {doesEmailExist && (
                          <div className="notification is-danger form__notification">
                            <button
                              className="delete"
                              onClick={() => setDoesEmailExist(false)}
                            />
                            Sähköpostia tai varmistuskoodia ei löytynyt! Etsithän varmistusmiskoodin sähköpostistasi! Tarkasta myös roskaposti.

                          </div>
                        )}

                        {isEmailValid &&  isTermsServiceAgreed && isCodeExist && ( null )}
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
                  <Link to="/aloita" className="has-text-weight-light">
                    Varmista sähköposti
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
