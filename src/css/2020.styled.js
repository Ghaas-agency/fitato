import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const offer2x = withPrefix('/static/2020/offer-2x.jpg');
const offer1x = withPrefix('/static/2020/offer-1x.jpg');
const fitatoMembers = withPrefix('/static/2020/fitato-members.jpg');
const fitatoGame = withPrefix('/static/2020/fitato-game.jpg');

export const Page = styled.div`
  .button.button-yellow {
    background-color: ${({ theme: { colors } }) => colors.yellow};
    color: initial;
  }
  .offers-page {
    &-hero {
      position: relative;
      padding-top: 150px;
      padding-bottom: 10px;
      background-color: ${({ theme: { colors } }) => colors.red};
      min-height: 600px;
      margin-bottom: -1px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: calc(50% - 75px);
        bottom: 0;
        background-image: url('${offer2x}');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        @media only screen and (max-width: 767px) {
          background-image: url('${offer1x}');
          right: 0;
          bottom: 60%;
        }
      }

      @media only screen and (max-width: 767px) {
        padding-top: 10px;
        padding-bottom: 80px;
      }

      .red-triangle {
        position: absolute;
        top: 0;
        bottom: 0;
        left: calc(50% - 74px);
        left: 50%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 600px 150px;
        border-color: transparent transparent
          ${({ theme: { colors } }) => colors.red} transparent;
        transform: translateX(-50%);

        @media only screen and (max-width: 767px) {
          display: none;
        }
      }

      &__wrapper {
        position: relative;
        z-index: 2;
        max-width: calc(50% - 100px);
        padding-top: 0px;
        margin-left: auto;

        .hero-title {
          margin-bottom: 50px;
        }

        @media only screen and (max-width: 767px) {
          padding-top: 300px;
          text-align: center;
          max-width: 100%;

          .hero-title {
            width: 350px;
            margin-bottom: 25px;
          }
        }
      }

      p {
        font-size: 20px;
        line-height: 1.3em;
        margin: 0;
        margin-bottom: 15px;
      }

      h1 {
        display: inline-block;
        margin: 0;
        font-size: 2.8em;
        line-height: 1.2;
        font-weight: 900;
        padding: 12px 0;

        .small {
          font-size: 0.7em;
        }

        @media only screen and (max-width: 979px) {
          font-size: 2.4em;
        }

        @media only screen and (max-width: 767px) {
          font-size: 2em;
        }

        @media only screen and (max-width: 480px) {
          font-size: 1.8em;
        }
      }

      h2 {
        margin-top: 0px;
        font-size: 2em;
        line-height: 1.3;
        letter-spacing: 1px;

        .small {
          font-weight: 300;
          font-size: 20px;
        }

        @media only screen and (max-width: 979px) {
          font-size: 1.35em;
        }

        @media only screen and (max-width: 480px) {
          font-size: 1.15em;
        }
      }

      p.focus {
        font-size: 1.25em;
        line-height: 1.32;
        max-width: 370px;
        margin-left: auto;
        margin-right: auto;

        .small {
          font-size: 0.8em;
        }
      }

      p.offers-page-hero--code {
        font-size: 34px;
        font-weight: 700;
        margin-top: 18px;
        margin-bottom: 17px;

        span {
          padding: 8px 20px;
          border: 2px dashed ${({ theme: { colors } }) => colors.red};
        }
      }

      a.button-inverted {
        width: 200px;
        font-size: 1.2em;
      }

      p.use,
      p.on {
        font-size: 0.9em;
        color: ${({ theme: { colors } }) => colors.darkGrey};
        opacity: 0.85;
        letter-spacing: 0;
      }

      p.use {
        margin-top: 25px;
        font-size: 1em;
      }
    }

    &-intro {
      padding: 50px 10% 80px;
      margin-top: 0px;
      text-align: center;
      background-color: ${({ theme: { colors } }) => colors.red};

      &--use-coupon {
        font-size: 26px;
        padding-top: 10px;
        font-weight: 700;
        line-height: 2em;
        color: ${({ theme: { colors } }) => colors.darkGrey};
      }

      small {
        color: #818181;
      }

      .pricing-row {
        margin-bottom: 20px;
      }

      .pricing-col {
        border: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }

      h2 {
        max-width: 600px;
        margin: 20px auto 50px auto;
        line-height: 1.3em;
      }

      h3 {
        font-size: 24px;
        margin-bottom: 30px;
        color: #383838;
      }

      &__items {
        padding: 50px 0 10px 0;
        width: 70%;
        margin: 0 auto;
      }

      &__item {
        &--left,
        &--right {
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          -moz-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          padding: 0 30px;
        }
      }

      @media (max-width: 1200px) {
        padding: 50px 10%;
        margin-top: 0px;
      }

      @media (max-width: 979px) {
        margin-top: 0px;
      }

      @media (max-width: 767px) {
        padding: 50px 2%;
        padding-bottom: 100px;
        margin-top: 0px;
        text-align: center;

        &--clear {
          display: block;
        }
      }

      @media (max-width: 480px) {
        text-align: center;
      }
    }

    &-banner {
      padding: 100px 25%;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-size: cover;
      background-position: center;
      background-color: ${({ theme: { colors } }) => colors.lightGrey};
      text-align: center;

      h2 {
        line-height: 1.2em;
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
      }

      p {
        font-size: 20px;
        margin-bottom: 0;
        line-height: 1.4em;
        max-width: 520px;
        margin-left: auto;
        margin-right: auto;
      }

      @media (max-width: 767px) {
        padding: 100px 5%;
        text-align: left;
      }
    }

    &-plans {
      &__items {
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
        margin-bottom: 20px;
        margin-top: 40px;

        @media (max-width: 767px) {
          margin-bottom: 10px;
        }
      }

      &__item {
        background-color: rgba(255, 255, 255, 0.25);
        background-color: #ffffff;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        -webkit-flex: 1;
        -moz-box-flex: 1;
        flex: 1;
        min-width: 300px;
        max-width: 350px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #dddddd;
        margin: 0 10px;
        position: relative;

        &--title {
          padding: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #dddddd;

          h3 {
            margin-bottom: 0;
            line-height: 1.25em;
            font-size: 1.35em;
            text-transform: uppercase;
            letter-spacing: 0px;
          }
        }

        &--body {
          padding: 20px 5%;
        }

        &--cta {
          padding: 30px;
          border-top: 1px solid #ffdddd;

          a {
            font-size: 18px;
            font-weight: 700;
          }
        }

        &--price {
          font-size: 44px;
          font-weight: 700;
          color: ${({ theme: { colors } }) => colors.red};

          &-strike {
            font-size: 24px;
            margin-bottom: 20px;
            text-decoration: line-through;
          }
        }

        &--get-cb {
          margin: 0;
          font-weight: 400;
          font-size: 18px;
          padding-top: 0px;
        }

        @media only screen and (max-width: 767px) {
          margin-top: -1px;
          margin-bottom: 20px;
        }
      }

      &__help {
        margin-top: 50px;

        h4 {
          margin-bottom: 15px;
        }

        &--call {
          img {
            width: 22px;
            vertical-align: middle;
            margin: 0 5px 2px 0;
          }
        }
      }
    }
  }

  .offer {
    &-features {
      padding: 80px 0 50px;

      &--heading {
        max-width: 750px;
        margin: 0 auto 50px;
      }

      &--footer {
        font-size: 1.2em;
        margin-top: 30px;
      }

      &__items {
        display: flex;
        margin: 0 -10px;

        @media only screen and (max-width: 767px) {
          flex-direction: column;
          margin: 0;
        }
      }

      &__item {
        flex: 1;
        min-width: calc(50% - 20px);
        max-width: calc(50% - 20px);
        margin: 20px 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        border-radius: 15px;

        & > div {
          padding: 20px 50px;
        }

        @media only screen and (max-width: 767px) {
          min-width: 100%;
          max-width: 100%;
          margin: 20px 0;

          & > div {
            padding: 20px;
          }
        }
      }
    }

    &-coupon {
      position: relative;
      background-color: ${({ theme: { colors } }) => colors.yellow};

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 50%;
        bottom: 0;
        background-image: url('${fitatoMembers}');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        @media only screen and (max-width: 767px) {
          right: 0;
          bottom: 50%;
        }
      }

      &__items {
        display: flex;
        align-items: stretch;

        @media only screen and (max-width: 767px) {
          flex-direction: column;
        }
      }

      &__item {
        flex: 1;
        padding: 80px 30px;

        @media only screen and (max-width: 767px) {
          padding: 50px 10px;
        }
      }

      &--offer {
        font-size: 2em;
        margin-top: 80px;
        line-height: 1.2;

        span {
          font-size: 0.5em;
        }
      }

      &--code {
        font-size: 2em;

        span {
          padding: 8px 20px;
          border: 2px dashed #ffffff;
        }
      }
    }

    &-facilities {
      padding: 80px 0;

      h2 {
        font-size: 1.7em;
        margin-bottom: 50px;
      }

      &__items {
        display: flex;
        align-items: flex-start;

        @media only screen and (max-width: 767px) {
          flex-direction: column;
          justify-content: center;
        }
      }

      &__item {
        flex: 1;

        &:first-child {
          flex: 2;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding: 20px 70px;

          @media only screen and (max-width: 767px) {
            padding: 20px 0;
            margin: 0 -5px;
          }

          & > div {
            flex: 1;
            min-width: 25%;
            max-width: 25%;
            margin: 30px 0;

            img,
            span {
              display: block;
            }

            img {
              margin: 0 auto 20px;
              max-height: 50px;
            }

            span {
              font-weight: bold;
            }

            @media only screen and (max-width: 767px) {
              margin: 30px 5px;
              min-width: calc(25% - 10px);
              max-width: calc(25% - 10px);

              span {
                font-size: 14px;
                font-weight: normal !important;
              }
            }
          }
        }

        &:last-child {
          img {
            height: 370px;
            object-fit: contain;
          }

          @media only screen and (max-width: 767px) {
            text-align: center;
            width: 100%;
          }
        }
      }
    }

    &-game {
      padding: 200px 0;
      background-image: url('${fitatoGame}');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      @media only screen and (max-width: 767px) {
        padding: 100px 0;
      }

      h2 {
        line-height: 1.25;
        max-width: 370px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
