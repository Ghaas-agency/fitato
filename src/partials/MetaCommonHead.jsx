import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';

const title = 'Fitato&reg;: Fitness for the Intelligent Indian';
const description =
  'A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!';
const metaImage = 'https://www.fitato.fit/static/fitato-one-pass-to-all.jpg';

const MetaCommonHead = () => (
  <>
    <Helmet defaultTitle={title}>
      <meta charset="utf-8" />
      <meta name="description" content={description} />
      <meta name="image" content={metaImage} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={metaImage} />
      <meta name="apple-itunes-app" content="app-id=1300323768" />
      <meta name="google-play-app" content="app-id=fit.fitato.health" />
      <meta name="twitter:card" content="app" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@FitatoFit" />
      <meta name="twitter:creator" content="@FitatoFit" />
      <meta name="twitter:image:src" content={metaImage} />
      <meta name="twitter:app:id:iphone" content="1300323768" />
      <meta name="twitter:app:name:iphone" content="Fitato" />
      <meta name="twitter:app:id:googleplay" content="fit.fitato.health" />
      <meta
        name="twitter:app:name:googleplay"
        content="Fitato: One Pass to Fitness"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
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

      <script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M6HNZB');`}
      </script>

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
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700,700i,900"
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
  </>
);

export default MetaCommonHead;
