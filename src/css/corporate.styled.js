import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const cracker = `url('${withPrefix('/static/workplace/cracker.png')}')`;

const cracker2 = `url('${withPrefix('/static/workplace/cracker-2.png')}')`;

export const WorkplaceIntro = styled.section`
  min-height: 700px;
  padding: 10px 0 10px 0;
  padding-top: 0;
  background-image: ${cracker}, ${cracker2}, ${cracker2}, ${cracker2},
    ${cracker2};
  background-size: 300px, 200px, 150px, 50px, 30px;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: center calc(50% - 100px), calc(50% - 540px) -50px,
    -75px bottom, calc(50% - 650px) 200px, calc(50% - 340px) 150px;
  background-color: ${({ theme: { colors } }) => colors.red};
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 979px) {
    background-position: center calc(50% - 100px), left -50px, -75px bottom,
      calc(50% - 650px) 200px, calc(50% - 340px) 150px;
  }

  @media only screen and (max-width: 767px) {
    align-items: flex-start;
    background-position: calc(100% + 75px) 200px, -150px -50px, -75px bottom,
      calc(50% - 650px) 200px, calc(50% - 340px) 150px;
    background-size: 250px, 200px, 150px, 50px, 30px;
  }

  @media only screen and (max-width: 480px) {
    padding-bottom: 500px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: calc(50% + 350px);
    height: 800px;
    width: 800px;
    border-radius: 50%;
    background-color: #ffffff;

    @media only screen and (max-width: 1200px) {
      left: calc(50% + 250px);
    }

    @media only screen and (max-width: 979px) {
      left: calc(50% + 150px);
    }

    @media only screen and (max-width: 767px) {
      content: unset;
    }
  }

  .app-image {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: calc(50% + 400px);
    height: 600px;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 1200px) {
      left: calc(50% + 300px);
    }

    @media only screen and (max-width: 979px) {
      left: calc(50% + 200px);
      height: 450px;
    }

    @media only screen and (max-width: 767px) {
      top: calc(50% + 150px);
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .container {
    width: 96%;
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 48px;
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: 1px;
    margin-top: 0;
    margin-bottom: 10px;

    @media only screen and (max-width: 979px) {
      font-size: 40px;
    }

    @media only screen and (max-width: 767px) {
      color: #ffffff;
      margin-top: 50px;
      font-size: 32px;
    }

    @media only screen and (max-width: 480px) {
      margin-top: 15px;
    }
  }

  p {
    font-size: 1.1em;
    line-height: 1.4em;

    @media only screen and (max-width: 767px) {
      color: #ffffff;
    }
  }

  .content {
    padding-top: 10px;
    padding-bottom: 10px;
    max-width: 55%;

    @media only screen and (max-width: 767px) {
      max-width: 100%;
    }

    @media only screen and (max-width: 480px) {
      padding: 30px 3%;
    }
  }

  .button {
    background-color: ${({ theme: { colors } }) => colors.yellow};
    color: ${({ theme: { colors } }) => colors.darkGrey};
  }
`;

const workplaceAboutBg = `url('${withPrefix(
  '/static/workplace/workplace-about-app.png',
)}')`;

export const WorkplaceAbout = styled.section`
  padding: 110px 0;
  background-image: ${workplaceAboutBg};
  background-repeat: no-repeat;
  background-position: calc(50% - 370px) bottom;
  background-size: 400px;
  background-color: ${({ theme: { colors } }) => colors.red};
  color: #ffffff;

  @media only screen and (max-width: 979px) {
    background-position: 5% bottom;
    background-size: 350px;
  }

  @media only screen and (max-width: 767px) {
    background-position: center bottom;
    padding-top: 70px;
    padding-bottom: 370px;
  }

  .content {
    width: 50%;
    margin-left: auto;

    @media only screen and (max-width: 767px) {
      margin-right: auto;
      width: 100%;
      text-align: center;
    }

    p {
      max-width: 525px;
    }
  }
`;

export const WorkplaceAdvantage = styled.section`
  padding: 100px 0;

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }

    .item {
      flex: 1;
      margin: 10px 30px;

      img {
        max-height: 220px;
      }

      p {
        max-width: 420px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;

export const WorkplaceWellness = styled.section`
  background-color: ${({ theme: { colors } }) => colors.darkGrey};
  padding: 100px 0;

  p.intro {
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }

  .benefits {
    background-color: #ffffff;
    padding: 60px;
    border-radius: 5px;
    margin-bottom: 50px;

    @media only screen and (max-width: 480px) {
      padding: 60px 25px 25px;
    }

    h3 {
      margin-bottom: 50px;
    }

    &-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 35px;

      @media only screen and (max-width: 767px) {
        flex-direction: column;
      }

      .content {
        flex: 3;
        text-align: left;
        max-width: 550px;

        @media only screen and (max-width: 767px) {
          order: 1;
        }
      }

      .img {
        flex: 2;
        margin: 15px;

        img {
          max-height: 230px;
        }

        @media only screen and (max-width: 767px) {
          order: 2;
        }
      }
    }
  }
`;

const WorkplaceClassesBg = withPrefix(
  '/static/workplace/workplace-community-bg.jpg',
);

export const WorkplaceClasses = styled.section`
  padding: 100px 10%;
  text-align: center;
  background-image: url('${WorkplaceClassesBg}');
  background-size: cover;
  background-blend-mode: hue;
  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-position: bottom;
  color: #ffffff;

  @media only screen and (max-width: 767px) {
    padding: 100px 3%;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .item {
    flex: 1;
    cursor: default;
    padding: 10px 10px;
    min-width: 220px;

    @media only screen and (max-width: 767px) {
      min-width: 150px;
    }

    p {
      margin: 0;
      color: #efefef;
      font-size: 18px;
    }
  }
`;

export const WorkplaceClients = styled.section`
  padding: 100px 0 50px 0;
  text-align: center;

  @media only screen and (max-width: 767px) {
    padding-top: 70px;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 850px;
    margin: 0 auto;
  }

  .item {
    flex: 1;
    padding: 30px;

    @media only screen and (max-width: 767px) {
      flex: 33%;
      padding: 5px 30px;
    }

    @media only screen and (max-width: 480px) {
      flex: 50%;
    }

    /* & > img {
      width: 110px;
      filter: grayscale(100%);

      &:hover {
        filter: grayscale(0%);
      }
    } */
  }
`;

export const WorkplaceCTA = styled.section`
  padding-top: 100px;
  padding-bottom: 60px;
  text-align: center;
  background-color: #efefef;
  text-align: center;
  border-bottom: 1px solid #cccccc;

  .content {
    max-width: 650px;
    margin: 0 auto;

    p {
      margin-bottom: 50px;
    }
  }

  .fields {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;

    & > div {
      flex: 1;
      min-width: calc(50% - 20px);
      margin: 0 10px;

      &:first-child {
        min-width: calc(100% - 20px);
      }

      input {
        background-color: #ffffff;
      }

      @media only screen and (max-width: 767px) {
        min-width: calc(100% - 20px);
      }
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  transition: all 0.25s ease-in-out;
  overflow: auto;
  padding: 30px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: ${({ show }) => (show ? 99 : -1)};

  .content {
    position: absolute;
    border-radius: 3px;
    background-color: #ffffff;
    margin: 0 auto;
    margin-bottom: 50px;
    width: 50%;
    transform: none;
    left: 50%;
    transform: translateX(-50%);
    overflow: auto;
  }

  .title {
    padding: 20px;
    border-bottom: 1px solid #dddddd;

    h3 {
      margin-bottom: 0;
      font-size: 1.5em;
    }
  }

  .form-container {
    padding: 20px;
  }

  small {
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

    img {
      height: 25px;
      width: 25px;
      border-radius: 50%;
      border: 2px solid #1e1e1e;
      padding: 2px;
      filter: opacity(0.4);

      &:hover,
      &:focus {
        filter: opacity(0.9);
      }
    }
  }
`;
