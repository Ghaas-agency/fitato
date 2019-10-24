import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const HeroBg = withPrefix('/static/hyderabad/hyderabad-fitato.png');
const HeroBgMobile = withPrefix('/static/hyderabad/hyderabad-fitato-m.jpg');

export const Hero = styled.section`
  padding: 200px 0;
  background-color: ${({ theme: { colors } }) => colors.darkGrey};
  background-image: url('${HeroBg}');
  background-position: calc(50% + 400px) center;
  background-size: 600px;
  background-repeat: no-repeat;

  .content {
    max-width: 60%;

    p {
      max-width: 500px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 150px 0;
    background-position: calc(50% + 250px) center;
    background-size: 500px;

    .content {
      max-width: 50%;
    }
  }
  
  @media only screen and (max-width: 767px) {
    background-image: url('${HeroBgMobile}');
    background-position: center;
    background-size: cover;
    text-align: center;
    padding: 100px 0;

    .content {
      max-width: 100%;
    }

    p {
      font-size: 1.4em;
      line-height: 1.5;
    }
  }
`;

export const Freedom = styled.section`
  padding: 100px 0;

  h2 {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .items {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 767px) {
      flex-direction: column;

      &:nth-child(3) {
        flex-direction: column-reverse;
      }
    }
  }

  .item {
    flex: 1;
    margin: -10px 0;

    p {
      max-width: 450px;
    }

    img {
      width: 400px;
    }

    @media only screen and (max-width: 767px) {
      margin: 30px 0;
      text-align: center;

      &:last-child {
        margin-bottom: 0;
      }

      img {
        max-width: 80%;
      }
    }
  }
`;

export const Community = styled.section`
  padding: 100px 0 50px;

  img {
    width: 400px;
  }

  p {
    line-height: 1.7;
    max-width: 400px;
  }

  .items {
    display: flex;
    align-items: center;
  }

  .item {
    flex: 1;
  }

  @media only screen and (max-width: 767px) {
    h2 {
      &::before {
        left: 50% !important;
        transform: translateX(-50%) !important;
      }
    }

    .items {
      flex-direction: column-reverse;
      text-align: center;
    }

    img {
      margin-bottom: 50px;
      max-width: 80%;
    }
  }
`;
