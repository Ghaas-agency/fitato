/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'css/theme';
import GlobalStyles from 'css/global-styles';
import MetaCommonHead from 'partials/MetaCommonHead';
import OfferPopup from 'partials/OfferPopup/OfferPopup';
import Header from './header-app';
import Footer from './footer';

const Index = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <MetaCommonHead />
      <Header />
      <main>{children}</main>
      <Footer />
      <OfferPopup />
    </>
  </ThemeProvider>
);

Index.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default Index;
