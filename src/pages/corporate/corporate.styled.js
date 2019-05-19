import styled from 'styled-components';

const Main = styled.div`
  .workplace-page p,
  .workplace-page small,
  .workplace-page li {
    color: rgb(51, 51, 51);
    color: rgba(0, 0, 0, 0.7);
  }

  .workplace-page .button {
    font-size: 17px;
  }

  .workplace-section-intro {
    min-height: 35vh;
    padding: 100px 0 70px 0;
    padding-top: 0;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: -50px;
  }

  .workplace-section-intro p {
    font-size: 24px;
    line-height: 1.4em;
  }

  .workplace-section-intro__content {
    padding: 30px;
    padding-top: 100px;
    margin-left: 55%;
  }

  .workplace-section-your {
    padding: 100px 0 80px 0;
    text-align: center;
    background-color: #efefef;
  }

  .workplace-section-your img {
    width: 200px;
  }

  .workplace-section-your__items {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-top: 25px;
  }

  .workplace-section-your__item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 250px;
    padding: 20px 50px;
  }

  @media (max-width: 800px) {
    .workplace-section-your__item {
      -webkit-box-flex: 50%;
      -webkit-flex: 50%;
      -moz-box-flex: 50%;
      -ms-flex: 50%;
      flex: 50%;
      padding: 20px 25px;
    }
  }

  .workplace-section-onepass {
    background-color: #1e1e1e;
    text-align: center;
    padding: 25px 0;
    color: #ffffff;
  }

  .workplace-section-onepass h2 {
    margin: 0.5em 0;
    font-style: italic;
    font-weight: 400;
    font-size: 1.75em;
  }

  .workplace-section-about {
    padding: 100px 20%;
    padding-bottom: 75px;
    text-align: center;
  }

  .workplace-section-employees {
    padding: 7px 0;
  }

  .workplace-section-employees__wrapper {
    padding: 75px;
    padding-bottom: 50px;
    /* background-color: #efefef; */
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 767px) {
    .workplace-section-employees__wrapper {
      padding: 40px 25px;
      padding-bottom: 15px;
    }
  }

  .workplace-section-employees__row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 30px 0;
  }

  .workplace-section-employees__row > div {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    flex: 1;
    -ms-flex-item-align: center;
    -webkit-align-self: center;
    -ms-grid-row-align: center;
    align-self: center;
  }

  .workplace-section-employees__row--img {
    text-align: center;
  }

  .workplace-section-employees__row--img img {
    max-width: 270px;
  }

  .workplace-section-why {
    padding: 100px 0%;
    padding-top: 75px;
    background-blend-mode: hue;
    background-color: rgba(255, 255, 255, 0.9);
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
  }

  .workplace-section-why__items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 20px 0;
  }

  .workplace-section-why__item {
    -webkit-box-flex: 50%;
    -ms-flex: 50%;
    -webkit-flex: 50%;
    -moz-box-flex: 50%;
    flex: 50%;
    padding: 20px;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .workplace-section-why__item--left > img {
    width: 75px;
  }

  .workplace-section-why__item--right,
  .workplace-section-why__item--left {
    font-size: 130%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: left;
  }

  .workplace-section-why__item--right {
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    -moz-box-flex: 3;
    -ms-flex: 3;
    flex: 3;
  }

  .workplace-section-classes {
    padding: 100px 10%;
    text-align: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-blend-mode: hue;
    background-color: rgba(0, 0, 0, 0.85);
    background-repeat: no-repeat;
    background-position: center;
    color: #ffffff;
  }

  .workplace-section-classes__items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    justify-content: center;
  }

  .workplace-section-classes__item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    cursor: default;
    padding: 10px 10px;
    min-width: 220px;
  }

  .workplace-section-classes__item p {
    margin: 0;
    color: #efefef;
    font-size: 18px;
  }

  .workplace-section-happy {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: center center;
    background-color: rgba(255, 255, 255, 0.9);
    background-blend-mode: hue;
    text-align: center;
    padding: 100px 0;
    background-repeat: no-repeat;
  }

  .workplace-section-plans {
    padding: 100px 0;
    background-color: #efefef;
    text-align: center;
  }

  .workplace-section-plans__items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .workplace-section-plans__item {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    flex: 1;
    margin: 20px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    min-width: 250px;
    max-width: 400px;
  }

  .workplace-section-plans__item--title {
    padding: 20px 30px;
    background-color: #1e1e1e;
    color: #ffffff;
    -webkit-border-radius: 3px 3px 0 0;
    -moz-border-radius: 3px 3px 0 0;
    border-radius: 3px 3px 0 0;
  }

  .workplace-section-plans__item--title h3 {
    margin: 0;
    font-size: 1.25em;
  }

  .workplace-section-plans__item--content {
    padding: 30px;
  }

  .workplace-section-app {
    padding-top: 100px;
  }

  .workplace-section-app > div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
  }

  .workplace-section-app__item {
    -webkit-box-flex: 50%;
    -ms-flex: 50%;
    -webkit-flex: 50%;
    -moz-box-flex: 50%;
    flex: 50%;
    padding: 10px;
    padding-bottom: 0;
    min-width: 250px;
  }

  .workplace-section-app__item:first-child {
    padding-bottom: 100px;
  }

  @media (max-width: 767px) {
    .workplace-section-app__item:first-child {
      padding-bottom: 30px;
    }
  }

  .workplace-section-app__item--img {
    max-height: 450px;
    margin-bottom: 0;
    vertical-align: bottom;
  }

  .workplace-section-app h2 {
    line-height: 1.2em;
  }

  .workplace-section-cta {
    padding: 100px 25%;
    text-align: center;
    background-color: #efefef;
    text-align: center;
    border-bottom: 1px solid #cccccc;
  }

  .workplace-modalbg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 999;
    -webkit-animation-name: modalheaderanimbg;
    -moz-animation-name: modalheaderanimbg;
    -o-animation-name: modalheaderanimbg;
    animation-name: modalheaderanimbg;
    -webkit-animation-duration: 100ms;
    -moz-animation-duration: 100ms;
    -o-animation-duration: 100ms;
    animation-duration: 100ms;
    display: none;
    overflow: auto;
    padding: 30px;
  }

  .workplace-modal {
    position: absolute;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #ffffff;
    margin: 0 auto;
    margin-bottom: 50px;
    width: 50%;
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    overflow: auto;
  }

  @-webkit-keyframes modalheaderanimbg {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-moz-keyframes modalheaderanimbg {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-o-keyframes modalheaderanimbg {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes modalheaderanimbg {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .workplace-modal__title {
    padding: 20px;
    border-bottom: 1px solid #dddddd;
  }

  .workplace-modal__title h3 {
    margin-bottom: 0;
    font-size: 1.5em;
  }

  .workplace-modal__form {
    padding: 20px;
  }

  .workplace-modal small,
  .workplace-section-cta small {
    display: block;
    padding-bottom: 10px;
    color: rgba(0, 0, 0, 0.7);
  }

  .modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    font-weight: bold;
  }

  .modal-close img {
    height: 25px;
    width: 25px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 2px solid #1e1e1e;
    padding: 2px;
    -webkit-filter: opacity(0.4);
    filter: opacity(0.4);
  }

  .modal-close img:hover,
  .modal-close img:focus {
    -webkit-filter: opacity(0.9);
    filter: opacity(0.9);
  }

  .workplace-locations {
    padding: 100px 0;
    background-color: #ffffff;
  }

  .workplace-locations .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .workplace-locations__heading,
  .workplace-locations__imgs {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .workplace-locations__heading {
    text-align: right;
    padding: 0 25px;
  }

  .workplace-locations__imgs {
    padding: 0 15px;
    border-left: 1px solid #dddddd;
  }

  .workplace-locations__img {
    display: inline-block;
    text-align: center;
  }

  .workplace-locations__img img {
    width: 90px;
    margin: 15px;
  }

  .workplace-section-clients {
    padding: 100px 15% 70px 15%;
    text-align: center;
    background-color: #efefef;
  }

  .workplace-section-clients__items {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .workplace-section-clients__item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 30px;
  }

  .workplace-section-clients__item > img {
    width: 110px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  .workplace-section-clients__item > img:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }

  @media (max-width: 979px) {
    .workplace-section-intro {
      background-position: center;
    }

    .workplace-section-intro h1 {
      font-size: 38px;
    }

    .workplace-section-about {
      padding: 100px 15%;
    }

    .workplace-modal {
      width: 70%;
      /* left: 15%; */
    }

    .workplace-section-cta {
      padding: 100px 15%;
    }

    .workplace-section-clients {
      padding: 100px 10% 70px 10%;
    }
  }

  @media (max-width: 767px) {
    .workplace-section-intro {
      min-height: 550px;
      background-position: -150% 130%;
      -webkit-background-size: 120% 120%;
      -moz-background-size: 120%;
      -o-background-size: 120%;
      background-size: 120%;
    }

    .workplace-section-intro__content {
      padding: 30px;
      padding-top: 50px;
      margin-left: 0%;
      margin-right: 0%;
    }

    .workplace-section-about {
      padding: 100px 10%;
    }

    .workplace-section-why__item {
      -webkit-box-flex: 100%;
      -ms-flex: 100%;
      -webkit-flex: 100%;
      -moz-box-flex: 100%;
      flex: 100%;
    }

    .workplace-section-why__item--left > img {
      width: 50px;
    }

    .workplace-section-employees__row > div {
      -webkit-box-flex: 100%;
      -ms-flex: 100%;
      -webkit-flex: 100%;
      -moz-box-flex: 100%;
      flex: 100%;
    }

    .workplace-section-employees__row--img2 {
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      -webkit-order: 2;
      -moz-box-ordinal-group: 3;
      order: 2;
    }

    .workplace-section-employees__row--c2 {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      -webkit-order: 1;
      -moz-box-ordinal-group: 2;
      order: 1;
    }

    .workplace-section-cta {
      padding: 100px 10%;
    }

    .workplace-section-clients {
      padding: 100px 5% 70px 5%;
    }

    .workplace-section-clients__item {
      -webkit-box-flex: 33%;
      -webkit-flex: 33%;
      -moz-box-flex: 33%;
      -ms-flex: 33%;
      flex: 33%;
      padding: 30px;
    }

    .workplace-modal {
      width: 80%;
      /* left: 10%; */
    }

    .workplace-section-classes {
      padding: 100px 3%;
    }

    .workplace-section-employees__row--img img {
      max-width: 200px;
    }
  }

  @media (max-width: 480px) {
    .workplace-section-intro {
      background-position: -90% 115%;
      -webkit-background-size: 130% 130%;
      -moz-background-size: 130%;
      -o-background-size: 130%;
      background-size: 130%;
      min-height: 600px;
    }

    .workplace-section-intro__content {
      padding: 30px 3%;
      padding-top: 70px;
      margin-left: 0%;
      margin-right: 0%;
    }

    .workplace-section-about {
      padding: 100px 5%;
    }

    .workplace-section-why__item--left {
      -webkit-box-flex: 30%;
      -ms-flex: 30%;
      -webkit-flex: 30%;
      -moz-box-flex: 30%;
      flex: 30%;
    }

    .workplace-section-why__item--right {
      -webkit-box-flex: 70%;
      -ms-flex: 70%;
      -webkit-flex: 70%;
      -moz-box-flex: 70%;
      flex: 70%;
    }

    .workplace-section-cta {
      padding: 100px 5%;
    }

    .workplace-section-clients {
      padding: 100px 0% 70px 0%;
    }

    .workplace-section-clients__item {
      -webkit-box-flex: 50%;
      -webkit-flex: 50%;
      -moz-box-flex: 50%;
      -ms-flex: 50%;
      flex: 50%;
      padding: 30px;
    }

    .workplace-modal {
      width: 90%;
      /* left: 2.5%; */
    }

    .workplace-section-classes__item {
      min-width: 150px;
    }
  }
`;

export default Main;
