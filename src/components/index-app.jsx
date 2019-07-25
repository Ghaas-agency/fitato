/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'css/theme';
import GlobalStyles from 'css/global-styles';
import MetaCommonHead from 'partials/MetaCommonHead';
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
      <script
        dangerouslySetInnerHTML={{
          __html: `var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5bddee4a4cfbc9247c1e9aab/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}();`,
        }}
      />
    </>
  </ThemeProvider>
);

Index.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default Index;
