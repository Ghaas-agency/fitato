import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0 auto;
  }

  body {
    margin: 0;
    font-size: 17px;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.red};
  }

  a:active,
  a:hover {
    outline-width: 0;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.red};
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: 700;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    font-size: 2em;
    margin: .67em 0;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  optgroup {
    font-weight: 700;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type=reset],
  [type=submit],
  button,
  html [type=button] {
    -webkit-appearance: button;
  }

  [type=button]::-moz-focus-inner,
  [type=reset]::-moz-focus-inner,
  [type=submit]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type=button]:-moz-focusring,
  [type=reset]:-moz-focusring,
  [type=submit]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  [type=checkbox],
  [type=radio] {
    box-sizing: border-box;
    padding: 0;
  }

  [type=number]::-webkit-inner-spin-button,
  [type=number]::-webkit-outer-spin-button {
    height: auto;
  }

  [type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type=search]::-webkit-search-cancel-button,
  [type=search]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: .54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  html {
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  *,
  :before,
  :after {
    box-sizing: inherit;
  }

  body {
    color: ${({ theme: { colors } }) => colors.darkGrey};
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    color: inherit;
    font-weight: 700;
    font-style: normal;
    text-rendering: optimizeLegibility;
    line-height: 1.2;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }

  h1 {
    font-size: 2.75em;
    line-height: 1.15em;
  }

  h2 {
    font-size: 2.25em;
  }

  h3 {
    font-size: 1.75em;
    letter-spacing: 0.5px;
  }

  h4 {
    font-size: 1.125em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.75em;
  }

  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.5em;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1.625em;
    }

    h3 {
      font-size: 1.375em;
    }
  }

  hgroup,
  dl,
  dd,
  figure,
  pre,
  table,
  fieldset,
  form,
  p,
  noscript,
  iframe,
  hr,
  address,
  img {
    margin: 0;
    padding: 0;
    margin-bottom: 1.45rem;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    margin-left: 1.45rem;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }

  p {
    margin-bottom: 20px;
  }

  pre {
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
  }

  table {
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }

  blockquote {
    margin: 1.45rem;
    margin-top: 0;
    padding: 0;
  }

  hr {
    margin-bottom: calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }

  b,
  strong,
  dt,
  th {
    font-weight: 700;
  }

  li {
    margin-bottom: calc(1.45rem / 2);
  }

  ol,
  ul {
    li {
      padding-left: 0;
    }
  }

  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  p *:last-child {
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: calc(1.45rem / 2);
  }

  code,
  kbd,
  samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  abbr,
  acronym,
  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  abbr[title] {
    text-decoration: none;
  }

  thead {
    text-align: left;
  }

  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: "tnum";
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  tt,
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace;
    padding: 0.2em 0;
  }

  pre code {
    background: none;
    line-height: 1.42;
  }

  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: " ";
  }

  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: "";
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }

  /* CUSTOM CSS STARTS HERE */

  /* Globals */

  /* p, small {
    color: #616161;
  } */

  label {
    padding-bottom: 5px;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  input[type="number"],
  select {
    padding: 9px 15px;
    margin-bottom: 15px;
    margin-top: 5px;
    border: none;
    border: 1px solid #aaaaaa;
    transition: all 0.2s ease-in-out;
    width: 100%;
    background-color: unset;
    border-radius: 5px;
    color: #767676;
    font-size: 15px;
  }

  select {
    color: #767676;
  }

  option {
    color: ${({ theme: { colors } }) => colors.darkGrey};
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  input[type="number"] {
    outline: none;
  }

  input[type="text"]:focus,
  input[type="tel"]:focus,
  input[type="email"]:focus,
  input[type="number"]:focus,
  select:focus {
    outline: none;
    border-color: ${({ theme: { colors } }) => colors.darkGrey};
  }

  .container {
    max-width: 1200px;
    padding: 0 3%;
    margin: 0 auto;
  }

  .line {
    height: 4px;
    width: 80px;
    background-color: ${({ theme: { colors } }) => colors.red};
    margin: 20px 0;
    border-radius: 5px;
  }

  .red {
    color:  ${({ theme: { colors } }) => colors.red};
  }

  .yellow {
    color:  ${({ theme: { colors } }) => colors.yellow};
  }

  .white {
    color: #ffffff !important;
  }

  .align-center {
    text-align: center !important;
  }

  .normal {
    font-weight: 400 !important;
  }

  .bold {
    font-weight: 700 !important;
  }

  .extra-bold {
    font-weight: 900 !important;
  }

  .italic {
    font-style: italic !important;
  }

  .uppercase {
    text-transform: uppercase !important;
  }

  .heading-underline {
    position: relative;
    margin-bottom: 3rem;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -20px;
      height: 4px;
      width: 100px;
      border-radius: 5px;
      background-color: ${({ theme: { colors } }) => colors.red};
    }

    &.white {
      &::before {
        background-color: #ffffff;
      }
    }

    &.left {
      &::before {
        left: 0;
        transform: unset;
      }
    }

    &.right {
      &::before {
        left: unset;
        right: 0;
        transform: unset;
      }
    }
  }

  .button,
  input[type="submit"] {
    display: inline-block;
    background-color: ${({ theme: { colors } }) => colors.red};
    color: #ffffff;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 700;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12);
    transition: all 0.2s ease-in-out;
    border-bottom-width: 0;
    text-transform: uppercase;
    font-size: 85%;
    margin: 10px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      background-color: ${({ theme: { colors } }) => colors.redHover};
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12);
      border-bottom-width: 0;
    }

    &:focus {
      background-color: ${({ theme: { colors } }) => colors.red};
      box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12);
      transform: translateY(0px);
      filter: brightness(0.95);
    }
  }


  .button-inverted,
  .button-inverted:visited {
    display: inline-block;
    background-color: #ffffff;
    color: ${({ theme: { colors } }) => colors.red};
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 700;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12);
    transition: all 0.2s ease-in-out;
    border-bottom-width: 0;
    text-transform: uppercase;
    font-size: 90%;
    margin: 10px;
    cursor: pointer;

    &:hover,
    &:focus {
      transform: translateY(-2px);
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12);
      border-bottom-width: 0;
    }
  }

  .button-fluid {
    width: 100%;
    text-align: center;
    margin: 0;
  }

  .button-unstyled {
    cursor: pointer;

    &,
    &:hover,
    &:focus,
    &:active {
      background: unset;
      background-color: unset;
      box-shadow: unset;
      border: 0;
      outline: 0;
    }
  }

  /* Pricing, Download and Contact Pages */

  .pricing-page,
  .contact-page,
  .page-404 {
    padding: 100px 0;
  }

  .pricing-page {
    background-color: #efefef;
  }

  .contact-page-form {
    padding: 0 20%;
  }

  .thank-you-page {
    padding: 100px 15%;
  }

  @media (max-width: 979px) {
    .thank-you-page {
      padding: 100px 15%;
    }
  }

  @media (max-width: 767px) {
    .contact-page-form {
      padding: 0 10%;
    }

    .thank-you-page {
      padding: 100px 10%;
    }
  }

  @media (max-width: 480px) {

    .pricing-page,
    .contact-page,
    .page-404,
    .pricing-page {
      padding: 50px 0;
    }

    .contact-page-form {
      padding: 0 5%;
    }

    .thank-you-page {
      padding: 50px 5%;
    }
  }

  .page-404 {
    min-height: 80vh;
    text-align: center;
    background-color: #efefef;
  }

  .download-page {
    padding-top: 100px;
    background: linear-gradient(135deg, rgba(60, 8, 118, 0.8) 0%, rgba(250, 0, 118, 0.8) 100%);
    color: #ffffff;
  }

  .download-page__preview {
    margin-bottom: -7px;
    margin-top: 3em;
    padding-bottom: 0;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.25);
    border-radius: 47px 47px 0px 0px;
  }

  /* Privacy Policy Page */

  .privacy-policy-page {
    padding: 100px 0;
    background-color: #efefef;
  }

  /* Partials */

  .partial-get-started {
    background-color: #efefef;
    padding: 100px 15%;
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #cccccc;
  }

  .partial-get-started>div {
    display: flex;
    flex-wrap: wrap;
  }

  .partial-get-started__text,
  .partial-get-started__cta {
    flex: 50%;
    min-width: 350px;
  }

  .partial-get-started__cta {
    text-align: right;
  }

  @media (max-width: 767px) {
    .partial-get-started {
      background-color: #efefef;
      padding: 100px 10%;
      text-align: center;
    }

    .partial-get-started__cta {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .partial-get-started {
      background-color: #efefef;
      padding: 100px 5%;
    }

    .partial-get-started__text,
    .partial-get-started__cta {
      flex: 100%;
      min-width: 200px;
      margin-bottom: 20px;
    }

    .partial-get-started__cta {
      text-align: center;
    }
  }

  .partial-app-icons>a,
  .partial-app-icons>a:hover,
  .partial-app-icons>a:visited,
  .partial-app-icons>a:focus {
    border-bottom-width: 0;
  }

  .partial-app-icon {
    display: inline-block;
    width: 150px;
    margin-right: 15px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12);
    transition: all 0.2s ease-in-out;
    margin-bottom: 0;
    vertical-align: bottom;
    border-radius: 6px;
  }

  @media (max-width: 767px) {
    .partial-app-icon {
      margin-bottom: 10px;
    }
  }

  .partial-app-icon:hover,
  .partial-app-icon:focus {
    transform: translateY(-2px);
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12);
  }

  .offer {
    padding: 10px;
    background-color: rgba(255, 222, 95, 1);
    box-shadow: 5.66px 5.66px 0px 0px rgba(219, 186, 59, 1);
    color: ${({ theme: { colors } }) => colors.red};
    font-size: 120%;
    max-width: 300px;
    margin: 0px auto 30px auto;
  }

  .partial-plans {
    padding: 0px 15%;
    /* background-color: #efefef; */
    text-align: center;
    background-position: center;
    background-size: contain;
    background-repeat: repeat-y;
  }

  .partial-plans h1,
  .partial-plans h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 979px) {
    .partial-plans {
      padding: 0px 10%;
    }
  }

  @media (max-width: 767px) {
    .partial-plans {
      padding: 0px 5%;
    }
  }

  @media (max-width: 480px) {
    .partial-plans {
      padding: 0px 0%;
    }
  }

  .partial-plans__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .partial-plans__item {
    margin: 10px;
    flex: 1;
    min-width: 250px;
    max-width: 275px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12);
  }

  @media (max-width: 480px) {
    .partial-plans__item {
      max-width: 100%;
    }
  }

  .partial-plans__item--title {
    padding: 20px;
    border-bottom: 1px solid #efefef;
  }

  .partial-plans__item--title h3 {
    margin-bottom: 0;
    font-size: 1.5em;
  }

  .partial-plans__item--content {
    padding: 20px;
    color: rgb(71, 71, 71);
  }

  .partial-plans__item--cta {
    border-top: 1px solid #efefef;
    padding: 30px;
  }

  .partial-plans__item--price {
    font-size: 34px;
    margin-bottom: 10px;
    color: ${({ theme: { colors } }) => colors.red};
    font-weight: bold;
  }

  .partial-plans__speak {
    padding: 10px 15%;
    font-size: 85%;
  }

  .partial-plans__fitquad {
    padding-top: 50px;
    margin-top: 50px;
    border-top: 1px solid #dddddd;
  }

  .partial-download-swipe {
    padding-top: 50px;
  }

  .partial-download-swipe .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .partial-download-swipe__left,
  .partial-download-swipe__right {
    flex: 50%;
    padding: 50px;
    min-width: 350px;
    padding-bottom: 100px;
  }

  .partial-download-swipe__right {
    text-align: center;
    padding-bottom: 0;
    padding-top: 10px;
  }

  .partial-download-swipe__right img {
    max-width: 320px;
    margin-bottom: 0;
    vertical-align: middle;
  }

  @media (max-width: 979px) {
    .partial-download-swipe__left {
      padding: 10px;
    }
  }

  @media (max-width: 767px) {
    .partial-download-swipe__left {
      padding: 10px;
    }

    .partial-download-swipe__right {
      padding-top: 20px;
      padding-right: 15%;
      padding-left: 15%;
      padding-bottom: 0;
    }

    .partial-download-swipe__right img {
      max-width: 100%;
    }

    .partial-contact-form>div {
      display: block;
    }

    .hide-in-small {
      display: none;
    }
  }

  .partial-social-links__icon {
    width: 30px;
    border-radius: 50%;
  }

  .partial-social-links__icon:hover {
    filter: invert(10%);
  }

  .mc-field-group {
    text-align: left;
  }

  @keyframes disappear {
    from {
      opacity: 0;
      transform: translateY(-200px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .partial-signup-popup {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    animation: popup 0.1s;
  }

  .partial-signup-popup__content {
    flex: 1;
    position: relative;
    background-color: #fefefe;
    border: 1px solid #888;
    border-radius: 5px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12);
    margin-left: 15%;
    margin-right: 15%;
    max-width: 1050px;
    max-height: 90%;
    overflow: auto;
  }

  .partial-signup-popup__content h3 {
    margin-right: 40px;
  }

  .partial-signup-popup__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .partial-signup-popup__item-left,
  .partial-signup-popup__item-right {
    flex: 1;
  }

  .partial-signup-popup__item-left {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 100%;
  }

  .partial-signup-popup__item-right {
    padding: 30px;
  }

  .partial-signup-popup__item-right h3 {
    font-size: 1.5em;
  }

  .partial-signup-popup__content form {
    margin: 0;
  }

  .partial-signup-popup__content--close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 27px;
    height: 27px;
    border: 2px solid ${({ theme: { colors } }) => colors.darkGrey};
    border-radius: 50%;
    margin: 0;
    padding: 3px;
    opacity: 0.6;
    vertical-align: middle;
    transition: all 0.2s ease-in-out;
  }

  .partial-signup-popup__content--close:hover {
    opacity: 1;
  }

  @media (max-width: 767px) {
    .partial-signup-popup__content {
      margin-left: 10%;
      margin-right: 10%;
    }

    .partial-signup-popup__item-left,
    .partial-signup-popup__item-right {
      flex: 100%;
    }
  }

  @media (max-width: 480px) {
    .partial-signup-popup__content {
      margin-left: 5%;
      margin-right: 5%;
    }
  }

  @keyframes popup {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .partial-mc-form__main--radio {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0;
      margin: 0;
      padding-left: 5px;
      margin-bottom: 5px;
      margin-top: 5px;

      label {
        margin-left: 10px;
      }
    }
  }

  a, .button, input, textarea {
    position: relative;
    z-index: 8;
  }

`;

export default GlobalStyles;
