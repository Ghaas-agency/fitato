import styled from 'styled-components';

export const Hero = styled.section`
  position: relative;
  padding: 200px 0;
  background-color: ${({ theme: { colors } }) => colors.red};
  border-bottom-right-radius: 50px;
  z-index: 6;

  @media only screen and (max-width: 979px) {
    padding-top: 50px;
    padding-bottom: 380px;
  }

  img {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -50px;
    width: 650px;

    @media only screen and (max-width: 1200px) {
      width: 500px;
    }
  }

  h1 {
    font-weight: 300;

    .yellow {
      font-weight: 900;
    }
  }

  p {
    font-weight: 300;
    font-size: 22px;
  }

  .button {
    margin: 0;

    &:hover,
    &:focus {
      background-color: #ffffff;
    }
  }

  .content {
    position: relative;
    z-index: 5;
    width: 50%;
    margin-left: auto;

    @media only screen and (max-width: 979px) {
      width: 100%;
    }
  }
`;

export const Be = styled.section`
  background-color: ${({ theme: { colors } }) => colors.darkGrey};
  padding-top: 150px;
  padding-bottom: 100px;
  margin-top: -50px;
  border-bottom-right-radius: 50px;
  position: relative;
  z-index: 5;

  .container {
    position: relative;
    z-index: 5;
  }

  p {
    max-width: 800px;
    font-size: 22px;
    line-height: 1.6;
  }
`;

export const Get = styled.section`
  background-color: ${({ theme: { colors } }) => colors.red};
  padding-top: 150px;
  padding-bottom: 100px;
  margin-top: -50px;
  border-bottom-right-radius: 50px;
  position: relative;
  z-index: 4;

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -5px;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }

    .item {
      flex: 1;
      max-width: 33%;
      min-width: calc(33% - 20px);
      background-color: #ffffff;
      margin: 10px;
      border-radius: 5px;
      padding: 20px;
      padding-top: 25px;
      text-align: center;
      box-shadow: ${({ theme: { shadow } }) => shadow};
      transition: ${({ theme: { transition } }) => transition};

      @media only screen and (max-width: 979px) {
        max-width: 50%;
        min-width: calc(50% - 20px);
      }

      @media only screen and (max-width: 767px) {
        max-width: 100%;
      }

      &:hover {
        box-shadow: ${({ theme: { shadowHover } }) => shadowHover};
      }

      h3 {
        margin-top: 0;
        color: ${({ theme: { colors } }) => colors.red};
        max-width: 250px;
        margin-left: auto;
        margin-right: auto;
      }

      img {
        max-height: 70px;
      }
    }
  }
`;

export const Do = styled.section`
  background-color: ${({ theme: { colors } }) => colors.darkGrey};
  padding-top: 150px;
  padding-bottom: 100px;
  margin-top: -50px;
  border-bottom-right-radius: 50px;
  position: relative;
  z-index: 3;

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }

    .item {
      flex: 1;
      background-color: #ffffff;
      padding: 25px;
      border-radius: 5px;
      margin: 15px;
      box-shadow: ${({ theme: { shadow } }) => shadow};

      h3 {
        max-width: 300px;
      }
    }
  }
`;

export const Need = styled.section`
  background-color: ${({ theme: { colors } }) => colors.red};
  padding-top: 150px;
  padding-bottom: 100px;
  margin-top: -50px;
  border-bottom-right-radius: 50px;
  position: relative;
  z-index: 2;

  p {
    max-width: 800px;
    font-size: 22px;
    line-height: 1.6;
  }
`;

export const CTA = styled.section`
  background-color: ${({ theme: { colors } }) => colors.darkGrey};
  text-align: center;
  padding-bottom: 50px;
  padding-top: 150px;
  margin-top: -50px;
  position: relative;
  z-index: 1;

  .form {
    padding: 30px;
    padding-bottom: 10px;
    width: 60%;
    margin: 0 auto;
    border-radius: 3px;
    margin-top: 30px;
    background-color: #ffffff;
    box-shadow: ${({ theme: { shadow } }) => shadow};
    transition: ${({ theme: { transition } }) => transition};

    &:hover {
      box-shadow: ${({ theme: { shadowHover } }) => shadowHover};
    }

    input {
      width: 100%;
    }

    input[type='submit'] {
      width: unset;
      font-size: 18px;
      padding: 12px 20px;
    }

    @media only screen and (max-width: 979px) {
      width: 80%;
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .contact {
    padding-top: 50px;

    p {
      font-size: 100%;
      line-height: 1.5em;
      margin: 0;
      margin-bottom: 10px;

      a {
        line-height: 1.7em;
      }
    }
  }
`;
