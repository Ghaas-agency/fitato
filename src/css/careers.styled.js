import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const careersHeroBg = `url('${withPrefix(
  '/static/careers/careers-fitato-team.jpg',
)}')`;

export const CareersHero = styled.section`
  background-image: ${careersHeroBg};
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.57);
  background-position: center;
  background-blend-mode: overlay;
  padding: 150px 0;

  @media only screen and (max-width: 767px) {
    padding: 100px 0;
  }

  h1 {
    max-width: 310px;
    font-weight: 900;
    font-size: 4rem;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 979px) {
      font-size: 3.5rem;
    }

    @media only screen and (max-width: 767px) {
      font-size: 3rem;
    }
  }

  p {
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CareersAbout = styled.section`
  padding-top: 100px;
  padding-bottom: 60px;

  .items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;

    .item {
      flex: 1;
      margin: 10px 15px 25px;
      min-width: 320px;

      img {
        max-height: 250px;
      }

      p {
        max-width: 340px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;

export const CareersWhy = styled.section`
  background-color: ${({ theme: { colors } }) => colors.red};
  padding-top: 100px;
  padding-bottom: 90px;
  overflow: hidden;

  h3 {
    max-width: 280px;

    @media only screen and (max-width: 767px) {
      &.heading-underline::before {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 50px auto;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
      text-align: center;
    }

    .left {
      flex: 2;

      @media only screen and (max-width: 767px) {
        order: 1;

        h3 {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    .right {
      flex: 1;
      min-width: 350px;

      img {
        margin: 10px 25px;
        max-width: 330px;
      }

      @media only screen and (max-width: 767px) {
        order: 2;

        img {
          transform: unset !important;
          margin: 10px 0;
        }
      }
    }
  }
`;

export const CareersJoin = styled.section`
  padding-top: 100px;
  padding-bottom: 80px;

  @media only screen and (max-width: 767px) {
    .heading-underline::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .items {
    display: flex;
    justify-content: center;
    max-width: 900px;
    margin: auto;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
      text-align: center;
    }

    .item {
      &:last-child {
        min-width: 55%;

        @media only screen and (max-width: 767px) {
          margin-top: 20px;
        }
      }
    }
  }
`;

export const CareersSocial = styled.div`
  background-color: ${({ theme: { colors } }) => colors.darkGrey};
  padding-top: 35px;
  padding-bottom: 1px;

  ul {
    list-style: none;
    margin: 0;

    li {
      display: inline-block;
      margin: 0 15px;

      a {
        border: 0 !important;
      }
    }

    img {
      filter: invert(1);

      &:hover {
        filter: invert(0.8);
      }
    }
  }
`;
