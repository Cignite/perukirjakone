import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer';

const MainWrapper = ({ children }) => (
  <div className="theme-light">
    <div className="wrapper">{children}</div>
    <Footer />
  </div>
);

MainWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainWrapper;
