import React from "react";
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg'

const UserVerification = () => {
  return(
    <section className="hero is-fullheight is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-4-widescreen">
              <form action="" className="box ">
                <div className="section has-text-centered">
                  <Link to="/" className="logo">
                    <img src={logo} alt="Perukirjakone" classNameName="has-text-centered" />
                  </Link>
                </div>
                <div className="field has-text-centered">
                  <label className="label is-size-4">Verify code</label>
                  <p className="is-small">With
                  the help of verification code we can make sure that right person
                  is accessing Perukirjakone service.</p>
                </div>
                <br/>
                <div className="field">

                  <div className="control has-icons-left">
                    <input type="text" placeholder="Email" className="input" required />
                    <span className="icon is-small is-left">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">

                  <div className="control has-icons-left">
                    <input type="password" placeholder="code" className="input" required />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" />
                    &nbsp;I agree to the terms and services and privacy policy
                  </label>
                </div>


                <div className="field level-right">
                  <a className="button is-success is-fullwidth">
                    Verify code
                  </a>
                </div>
                <br/>
                <p className="has-text-centered">
                <a className="label has-text-weight-light">
                    Email not validated?
                  </a>
                </p>
                <h4 className="has-text-centered">
                  <Link to="/user-validation" className="has-text-weight-light">
                    Validate email
                  </Link>
                </h4>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
export default UserVerification;
