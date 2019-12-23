import styled from 'styled-components';

export const ReferHero = styled.section`
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.red};
  padding-bottom: 50px;
  min-height: 700px;
  overflow: hidden;

  .container {
    position: relative;
    z-index: 2;
  }

  .first-half {
    position: absolute;
    width: 100%;
    height: 300px;
    background: radial-gradient(#2a3541, #1a242d);
    border-bottom: 3px solid #ffffff;
  }

  h1 {
    padding-top: 100px;

    img {
      width: 450px;
    }

    @media only screen and (max-width: 979px) {
      text-align: center;
      padding-top: 50px;

      img {
        width: 350px;
        max-width: 95%;
      }
    }
  }

  .models {
    position: absolute;
    z-index: 1;
    top: 50px;
    left: 50%;
    width: 550px;

    @media only screen and (max-width: 1100px) {
      width: 450px;
      left: unset;
      right: 0px;
    }

    @media only screen and (max-width: 979px) {
      right: unset;
      left: 50%;
      top: 150px;
      transform: translateX(-50%);
      width: 350px;
      max-width: 95%;
    }
  }

  .refer-text {
    width: 500px;
    font-size: 1.4em;
    line-height: 1.3;
    margin: 40px 0 20px;

    .bold {
      font-size: 1.3em;
    }

    @media only screen and (max-width: 979px) {
      margin-top: 300px;
    }

    @media only screen and (max-width: 979px) {
      margin: 350px auto 20px;
      max-width: 100%;
    }

    @media only screen and (max-width: 767px) {
      font-size: 1.2em;
    }

    @media only screen and (max-width: 480px) {
      font-size: 0.9em;
    }
  }

  .share {
    width: 500px;

    a {
      font-size: 1.1em;
      padding: 10px 20px;
    }

    @media only screen and (max-width: 979px) {
      margin: 0 auto;
      max-width: 100%;
    }
  }
`;

export const ReferPrizes = styled.section`
  position: relative;
  padding: 100px 0 50px;

  h2 {
    line-height: 1.4;
    font-size: 1.5em;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 979px) {
      font-size: 1.3em;
    }

    @media only screen and (max-width: 480px) {
      font-size: 1.2em;
    }
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .bottom-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    background-color: ${({ theme: { colors } }) => colors.red};
  }

  .row {
    display: flex;
    margin: 50px auto;
    max-width: 1150px;

    @media only screen and (max-width: 1200px) {
      margin: 50px -10px;
    }

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  .col {
    flex: 1;
    margin: 10px;

    &:last-child {
      .card {
        height: 190px;

        &:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }

  .card {
    height: 400px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05));
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    padding: 30px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #ffffff;

    @media only screen and (max-width: 767px) {
      height: auto;
    }

    &-red {
      display: inline-block;
      background-color: ${({ theme: { colors } }) => colors.red};
      padding: 25px 20px;
      font-size: 1.2em;
      letter-spacing: 2px;
      border-radius: 3px;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
      vertical-align: middle;
      text-align: center;

      span {
        font-size: 2em;
        font-weight: 900;
        line-height: 1.2;
      }
    }

    p {
      display: inline-block;
      margin-left: 20px;
      margin-bottom: 0px;
      width: calc(100% - 160px);
      font-size: 1.3em;
      line-height: 1.4;
      vertical-align: middle;

      @media only screen and (max-width: 480px) {
        font-size: 1.1em;
      }
    }
  }

  .conditions {
    font-size: 1em;
    line-height: 1.5;

    @media only screen and (max-width: 480px) {
      font-size: 0.9em;
    }
  }
`;
