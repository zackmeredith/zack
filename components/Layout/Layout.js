import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <div className="Layout container">
      <Navigation />
      <div className="content-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
