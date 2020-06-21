/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section class="hero is-primary is-large">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            404
          </h1>
          <h2 class="subtitle">
              Page not found :(<br />
              The requested page could not be found.
          </h2>
          <br />
          <h2 class="subtitle">
            <Link to="/">Go to homepage</Link>
          </h2>
        </div>
      </div>
    </section>

  );
}
