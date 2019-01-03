import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from './header-app'
import Footer from './footer'
import './index.css'

import { withPrefix } from 'gatsby';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutAppQuery {
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
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet" />
          
        </Helmet>
        
        <noscript>
          {`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6HNZB" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
        </noscript>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        {/* <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14.0.0/dist/smooth-scroll.polyfills.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var scroll = new SmoothScroll('a[href*="#"]', {offset: 150,easing: 'easeInOutCubic'});`,
          }}
        /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/5bddee4a4cfbc9247c1e9aab/default",e.charset="UTF-8",e.setAttribute("crossorigin","*"),t.parentNode.insertBefore(e,t)}();`,
          }}
        />
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.onload = function() {particlesJS("particles-js", {particles: {number: {value: 52,density: {enable: true,value_area: 631.3280775270874}},color: {value: "#ccc"},shape: {type: "circle",stroke: {width: 0,color: "#ffffff"},polygon: {nb_sides: 5},image: {src: "img/github.svg",width: 100,height: 100}},opacity: {value: 0.5,random: true,anim: {enable: false,speed: 1,opacity_min: 0.1,sync: false}},size: {value: 5,random: true,anim: {enable: false,speed: 40,size_min: 0.1,sync: false}},line_linked: {enable: false,distance: 500,color: "#ffffff",opacity: 0.4,width: 2},move: {enable: true,speed: 1.5,direction: "bottom",random: false,straight: false,out_mode: "out",bounce: false,attract: {enable: false,rotateX: 600,rotateY: 1200}}},interactivity: {detect_on: "window",events: {onhover: {enable: false,mode: "bubble"},onclick: {enable: true,mode: "repulse"},resize: true},modes: {grab: {distance: 400,line_linked: {opacity: 0.5}},bubble: {distance: 400,size: 4,duration: 0.3,opacity: 1,speed: 3},repulse: {distance: 200,duration: 0.4},push: {particles_nb: 4},remove: {particles_nb: 2}}},retina_detect: true});}`,
          }}
        />
      </>
    )}
  />
)
