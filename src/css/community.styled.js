import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const commHeroBg = `url('${withPrefix(
  '/static/community/fitato-community-hero.jpg',
)}')`;

const commHeroBgMobile = `url('${withPrefix(
  '/static/community/fitato-community-hero-mobile.jpg',
)}')`;

const commCommunityBg = `url('${withPrefix(
  '/static/index/fitato-community-bg.jpg',
)}')`;

export const CommHero = styled.section`
  padding-top: 100px;
  padding-bottom: 150px;
  min-height: 600px;
  background-image: ${commHeroBg};
  background-size: 85%;
  background-position: right top;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 1200px) {
    background-size: cover;
    background-position: 0%;
  }

  .wrapper {
    width: 45%;
  }

  h1 {
    font-style: italic;
    line-height: 3.5rem;
  }

  .title {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 4.25rem;
    color: #eb1f2e;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.25;
  }

  @media only screen and (max-width: 767px) {
    padding-top: 50px;
    background-image: ${commHeroBgMobile};
    background-size: 100%;
    background-position: center bottom;
    min-height: 630px;

    .wrapper {
      width: 100%;
    }

    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    .title {
      font-size: 2.25rem;
    }
  }
`;

export const CommAbout = styled.section`
  .wrapper {
    position: relative;
    z-index: 9;
    margin-top: -75px;
    padding: 50px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
      0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    text-align: center;

    @media only screen and (max-width: 767px) {
      padding: 50px 5%;
    }
  }
`;

export const CommAdvantage = styled.section`
  padding-top: 100px;

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -15px;
    position: relative;
    z-index: 9;
  }

  .item {
    flex: 1;
    padding: 60px 30px;
    margin: 10px 15px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
      0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }

  p {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    .items {
      flex-direction: column;
      padding: 0 20px;
    }

    .item {
      margin: 10px 0px;
    }
  }
`;

export const CommCommunity = styled.section`
  padding-top: 300px;
  padding-bottom: 180px;
  margin-top: -80px;
  color: #ffffff;
  background-image: ${commCommunityBg};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  .wrapper {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  p {
    margin: 0;
  }

  .tri-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 150px 1880px 0 0;
    border-color: #ffffff transparent transparent transparent;
  }
`;

export const CommWorkouts = styled.section`
  padding-top: 100px;
  text-align: center;

  h2 {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
  }

  .item {
    flex: 1;
    padding: 80px 30px;
    margin: 5px;
    min-width: 30%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(1);
    background-blend-mode: overlay;
    transition: all 0.15s ease-in-out;
  }

  .item p {
    margin: 0;
    color: #ffffff;
    opacity: 0;
    font-size: 22px;
    cursor: default;
    transform: translateY(10px);
    transition: all 0.15s ease-in-out;
  }

  .item:hover {
    background-color: rgba(0, 0, 0, 0.7);
    filter: grayscale(0);
  }

  .item:hover p {
    opacity: 1;
    transform: translateY(0px);
  }

  @media only screen and (max-width: 767px) {
    .items {
      flex-direction: column;
    }

    .item {
      background-color: rgba(0, 0, 0, 0.7);
      filter: grayscale(0);
    }

    .item p {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const CommCaptains = styled.section`
  padding: 100px 3%;

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  h3 {
    margin-bottom: 10px;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .wrapper-item {
    flex: 50%;
    max-width: 50%;
  }

  @media only screen and (max-width: 767px) {
    .wrapper {
      flex-direction: column;
    }

    .wrapper-item {
      flex: 100%;
      max-width: 95%;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  .left {
    flex: 1;
    margin-right: 30px;
    text-align: center;
  }

  .left img {
    border-radius: 50%;
    max-width: 180px;
    margin: 0;
  }

  @media only screen and (max-width: 979px) {
    .left img {
      max-width: 150px;
    }
  }

  @media only screen and (max-width: 480px) {
    .left img {
      max-width: 100px;
    }
  }

  .right {
    flex: 2;
    margin-right: 30px;
  }

  @media only screen and (max-width: 767px) {
    .right {
      margin-right: 0px;
    }
  }

  .right p {
    margin-bottom: 10px;
  }

  .right p small {
    opacity: 0.7;
  }
`;
