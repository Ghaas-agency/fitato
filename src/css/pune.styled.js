import styled from 'styled-components';
import { withPrefix } from 'gatsby';

export const Hero = styled.section`
  background-color: ${({ theme: { colors } }) => colors.darkGrey};
  background-image: url('${withPrefix('/static/pune/pune-fitato-hero.jpg')}');
  background-position: right bottom;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 150px 0 350px;

  @media only screen and (max-width: 1200px) {
    background-position: center bottom;
  }

  h1 {
    max-width: 550px;
  }

  p {
    max-width: 500px;
  }

  @media only screen and (max-width: 767px) {
    background-image: url('${withPrefix('/static/pune/pune-fitato-m.jpg')}');
    text-align: center;
    padding: 150px 0;

    h1,
    p {
      margin-left: auto;
      margin-right: auto;
    }

    p {
      font-size: 1.4em;
      line-height: 1.5;
    }
  }
`;

const fitnessFlexibility = withPrefix('/static/pune/fitness-flexibility.jpg');
const fitnessCommunity = withPrefix('/static/pune/fitness-community.jpg');

export const Features = styled.section`
  padding: 100px 0;

  h2 {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  .items {
    display: flex;
    margin: 0 -10px;
    padding-top: 20px;

    @media only screen and (max-width: 979px) {
      flex-direction: column;
    }
  }

  .item {
    flex: 1;
    margin: 10px;
    padding: 40px;
    padding-bottom: 100px;
    background-color: #ffffff;
    background-size: cover;
    background-position: right bottom;
    background-repeat: no-repeat;
    box-shadow: ${({ theme: { shadow } }) => shadow};
    border-radius: 5px;

    &:first-child {
      background-image: url('${fitnessFlexibility}');
    }

    &:last-child {
      background-image: url('${fitnessCommunity}');

      p {
        max-width: 70%;
      }
    }

    p {
      line-height: 2;
      max-width: 80%;
    }

    @media only screen and (max-width: 1200px) {
      background-position: 80% bottom;
      padding-bottom: 150px;

      h3 {
        max-width: 80%;
      }

      p {
        line-height: 1.7;
        max-width: 65% !important;
      }
    }

    @media only screen and (max-width: 480px) {
      padding: 30px;
      padding-bottom: 80px;
      
      &:last-child {
        background-size: cover;
        background-position: center;
      }

      h3 {
        max-width: 80%;
      }

      p {
        max-width: 80% !important;
      }
    }
  }
`;

export const Partners = styled.section`
  padding: 100px 0;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
      height: 80px;
      max-width: 130px;
      min-width: 130px;
      object-fit: contain;

      @media only screen and (max-width: 480px) {
        max-width: 100px;
        min-width: 100px;
      }
    }
  }
`;

export const What = styled.section`
  padding: 100px 0;
  background-image: url('${withPrefix('/static/pune/fitato-community.jpg')}');
  background-repeat: no-repeat;
  background-size: 900px;
  background-position: calc(50% + 400px) -140px;

  @media only screen and (max-width: 1200px) {
    background-size: 800px;
  }

  @media only screen and (max-width: 767px) {
    padding-top: 350px;
    background-position: calc(50%) -200px;

    h2 {
      &::before {
        left: 50% !important;
        transform: translateX(-50%) !important;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding-top: 180px;
    background-size: 450px;
    background-position: calc(50%) -100px;
  }

  .items {
    display: flex;
    align-items: center;
    margin: 120px 0;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
      text-align: center;
    }

    &:first-child {
      p {
        max-width: 400px;
      }
    }

    &:last-child {
      margin-bottom: 0;

      img {
        max-width: 450px;

        @media only screen and (max-width: 1200px) {
          max-width: 400px;
        }

        @media only screen and (max-width: 480px) {
          max-width: 80%;
        }
      }
    }
  }

  .item {
    flex: 1;
  }

  .button {
    margin-left: 0;
  }
`;

export const Find = styled.section`
  padding: 100px 0;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};

  .items {
    display: flex;
    justify-content: space-evenly;
    margin-top: 75px;
    margin-bottom: 50px;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  .item {
    flex: 1;
    max-width: 400px;

    img {
      height: 350px;

      @media only screen and (max-width: 480px) {
        height: 300px;
      }
    }

    @media only screen and (max-width: 767px) {
      max-width: 100%;
    }
  }

  .button {
    margin-left: 0;
    margin-right: 0;
  }
`;
