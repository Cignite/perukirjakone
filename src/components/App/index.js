/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../Homepage';
import RegisterPage from '../Registerpage';
//import WizardForm from '../StepWizard';
// import EmailRegistration from '../StepWizard/components/EmailRegistration';
import UserRegistration from '../UserRegistration';
import UserVerification from '../Verification';

import NotFoundPage from '../NotFound';

import MainWrapper from '../Wrapper';

export default function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user-validation" component={UserRegistration} />
            <Route exact path="/user-verification" component={UserVerification} />

            <Route exact path="/wizard-form" component={RegisterPage} />
            {/*<Route path="/create" component={WizardForm} />
          <Redirect from="/" to="/create/step1" />*/}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </MainWrapper>
    </BrowserRouter>
  );
}
