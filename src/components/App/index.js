/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../Homepage';
import RegisterPage from '../Registerpage';
import NotFoundPage from '../NotFound';

import MainWrapper from '../Wrapper';

export default function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </MainWrapper>
    </BrowserRouter>
  );
}
