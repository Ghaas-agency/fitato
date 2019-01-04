import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

import { withPrefix } from 'gatsby';

export default ({ children }) => (
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
    render={data => (
      <>
        <Helmet defaultTitle={data.site.siteMetadata.title}>

          <meta charset="utf-8" />
          <meta name="description" content="A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"/>
          <meta name="image" content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"/>
          <meta itemprop="name" content="Fitato&reg;: Fitness for the Intelligent Indian"/>
          <meta itemprop="description" content="A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"/>
          <meta itemprop="image" content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"/>
          <meta name="apple-itunes-app" content="app-id=1300323768"/>
          <meta name="google-play-app" content="app-id=fit.fitato.health"/>
          <meta name="twitter:card" content="app"/>
          <meta name="twitter:title" content="Fitato&reg;: Fitness for the Intelligent Indian"/>
          <meta name="twitter:description" content="A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"/>
          <meta name="twitter:site" content="@FitatoFit"/>
          <meta name="twitter:creator" content="@FitatoFit"/>
          <meta name="twitter:image:src" content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"/>
          <meta name="twitter:app:id:iphone" content="1300323768"/>
          <meta name="twitter:app:name:iphone" content="Fitato"/>
          <meta name="twitter:app:id:googleplay" content="fit.fitato.health"/>
          <meta name="twitter:app:name:googleplay" content="Fitato: One Pass to Fitness"/>
          <meta property="og:title" content="Fitato&reg;: Fitness for the Intelligent Indian"/>
          <meta property="og:description" content="A fitness membership tailored to you. The best facilities, exciting events, and the country’s fastest-growing fitness community. Come, be a part of the revolution!"/>
          <meta property="og:image" content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"/>
          <meta property="og:url" content="https://www.fitato.fit"/>
          <meta property="og:site_name" content="Fitato"/>
          <meta property="og:type" content="website"/>
          <meta property="al:ios:app_store_id" content="1300323768"/>
          <meta property="al:ios:app_name" content="Fitato"/>
          <meta property="al:android:package" content="fit.fitato.health"/>
          <meta property="al:android:app_name" content="Fitato: One Pass to Fitness"/>

          <script type="text/javascript">
            {`!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-M6HNZB",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");`}
          </script>

          <link rel="shortcut icon" type="image/png" href={withPrefix('/static/fitato-icon-16.png')}></link>
          <link rel="apple-touch-icon" href={withPrefix('/static/fitato-icon-57.png')} />
          <link rel="apple-touch-icon" sizes="72x72" href={withPrefix('/static/fitato-icon-72.png')} />
          <link rel="apple-touch-icon" sizes="114x114" href={withPrefix('/static/fitato-icon-114.png')} />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i,900,900i" rel="stylesheet" />
          
        </Helmet>
        
        <noscript>
          {`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6HNZB" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
        </noscript>
        <Header />
        <div id="particles-js"></div>
        <main>
          {children}
        </main>
        <Footer />
        <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var scroll = new SmoothScroll('a[href*="#"]', {offset: 150,easing: 'easeInOutCubic',updateURL: false});`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5bddee4a4cfbc9247c1e9aab/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}();`,
          }}
        />
      </>
    )}
  />
)
