/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../Homepage';
import PerukirjaForm from '../PerukirjaForm';
import UserRegistration from '../UserRegistration';
import UserVerification from '../Verification';
import NotFoundPage from '../NotFound';
import MainWrapper from '../Wrapper';
import PDFViewer from '../PDFViewer';
import PDFTranslation from '../PDFTranslation';


export default function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user-validation" component={UserRegistration}  />
            <Route exact path="/user-verification" component={UserVerification} />
            <Route
              exact
              path="/wizard-form"
              render={props => {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                if (userInfo) {
                  if(userInfo.email && userInfo.code) {
                    return (
                      <PerukirjaForm {...props} />
                    )
                  }
                }

                return <Redirect to="/user-verification" />
              }}
            />
            <Route exact path="/pdf" component={PDFViewer} />
            <Route exact path="/translation" component={PDFTranslation} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </MainWrapper>
    </BrowserRouter>
  );
}
