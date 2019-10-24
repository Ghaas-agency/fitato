/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'css/theme';
import GlobalStyles from 'css/global-styles';
import MetaCommonHead from 'partials/MetaCommonHead';
import OfferPopup from 'partials/OfferPopup/OfferPopup';
import Header from './header';
import Footer from './footer';

const Index = ({ children, style, hideOfferPopup }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <MetaCommonHead />
      <Header />
      <main style={style}>{children}</main>
      <Footer />
      {!hideOfferPopup && <OfferPopup />}
      {/* <div className="fb-customerchat" page_id="691732724260748" />
          <div id="fb-root" />
          <script>
            {`window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v3.2"})},function(e,t,n){var c,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((c=e.createElement(t)).id=n,c.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",o.parentNode.insertBefore(c,o))}(document,"script","facebook-jssdk");`}
          </script> */}

      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js" />
      <script
        dangerouslySetInnerHTML={{
          __html: `new SmoothScroll('a[href*="#"]', {offset: 80, easing: 'easeInOutCubic', updateURL: false, speedAsDuration: true});`,
        }}
      />
      {/* <script
            src="//widget.manychat.com/691732724260748.js"
            async="async"
          /> */}
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
  style: PropTypes.object,
  hideOfferPopup: PropTypes.bool,
};

export default Index;
