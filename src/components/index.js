/* eslint-disable react/no-danger */
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import GlobalStyles from '../css/global-styles';
import Header from './header';
import Footer from './footer';

const Index = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <GlobalStyles />
        <Helmet defaultTitle={data.site.siteMetadata.title}>
          <meta charset="utf-8" />
          <meta
            name="description"
            content="A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"
          />
          <meta
            name="image"
            content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"
          />
          <meta
            itemProp="name"
            content="Fitato&reg;: Fitness for the Intelligent Indian"
          />
          <meta
            itemProp="description"
            content="A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"
          />
          <meta
            itemProp="image"
            content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"
          />
          <meta name="apple-itunes-app" content="app-id=1300323768" />
          <meta name="google-play-app" content="app-id=fit.fitato.health" />
          <meta name="twitter:card" content="app" />
          <meta
            name="twitter:title"
            content="Fitato&reg;: Fitness for the Intelligent Indian"
          />
          <meta
            name="twitter:description"
            content="A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"
          />
          <meta name="twitter:site" content="@FitatoFit" />
          <meta name="twitter:creator" content="@FitatoFit" />
          <meta
            name="twitter:image:src"
            content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"
          />
          <meta name="twitter:app:id:iphone" content="1300323768" />
          <meta name="twitter:app:name:iphone" content="Fitato" />
          <meta name="twitter:app:id:googleplay" content="fit.fitato.health" />
          <meta
            name="twitter:app:name:googleplay"
            content="Fitato: One Pass to Fitness"
          />
          <meta
            property="og:title"
            content="Fitato&reg;: Fitness for the Intelligent Indian"
          />
          <meta
            property="og:description"
            content="A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"
          />
          <meta
            property="og:image"
            content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"
          />
          <meta property="og:url" content="https://www.fitato.fit" />
          <meta property="og:site_name" content="Fitato" />
          <meta property="og:type" content="website" />
          <meta property="al:ios:app_store_id" content="1300323768" />
          <meta property="al:ios:app_name" content="Fitato" />
          <meta property="al:android:package" content="fit.fitato.health" />
          <meta
            property="al:android:app_name"
            content="Fitato: One Pass to Fitness"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-M6HNZB",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");`,
            }}
          />

          <link
            rel="shortcut icon"
            type="image/png"
            href={withPrefix('/static/fitato-icon-16.png')}
          />
          <link
            rel="apple-touch-icon"
            href={withPrefix('/static/fitato-icon-57.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={withPrefix('/static/fitato-icon-72.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={withPrefix('/static/fitato-icon-114.png')}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Helmet>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6HNZB"
            frameBorder="0"
            height="0"
            width="0"
            title="GTM"
            style={{ visibility: 'hidden', display: 'none' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <div className="fb-customerchat" page_id="691732724260748" />
        <div id="fb-root" />
        <script>
          {`window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v3.2"})},function(e,t,n){var c,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((c=e.createElement(t)).id=n,c.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",o.parentNode.insertBefore(c,o))}(document,"script","facebook-jssdk");`}
        </script>
        */}
        <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `new SmoothScroll('a[href*="#"]', {offset: 150,easing: 'easeInOutCubic',updateURL: false});`,
          }}
        />
        {/* <script src="//widget.manychat.com/691732724260748.js" async="async" /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5bddee4a4cfbc9247c1e9aab/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}();`,
          }}
        />
      </>
    )}
  />
);

Index.propTypes = {
  children: PropTypes.element || PropTypes.array,
};

export default Index;
