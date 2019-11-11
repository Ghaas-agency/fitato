import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const indexHeroBg = `url('${withPrefix(
  '/static/fitato-home-hero-bg-mobile.jpg',
)}')`;

export const IndexHero = styled.section`
  position: relative;
  min-height: 650px;
  padding: 75px 5% 100px 5%;
  background-image: url('${withPrefix('/static/fitato-home-hero-bg.jpg')}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1520px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 0;
    bottom: 0;
    background-color: #EC2232;
    height: 100%;
    width: 50vw;
  }

  @media only screen and (max-width: 1200px) {
    padding: 100px 0;
  }

  @media only screen and (max-width: 979px) {
    background-position: 30% center;
  }

  @media only screen and (max-width: 767px) {
    padding-top: 50px;
    background-image: ${indexHeroBg};
    background-position: center;
    background-size: cover;
    background-color: #ffffff;
  }

  @media only screen and (max-width: 480px) {
    padding: 20px 3%;
    padding-top: 20px;
    min-height: 90vh;
    color: #ffffff;

    .button,
    .button-inverted {
      margin: 3px;
    }
  }

  h1 {
    font-size: 3.35rem;
    line-height: 1em;
    margin-bottom: 20px;

    @media only screen and (max-width: 767px) {
      font-size: 3rem;
      line-height: 1em;
    }

    @media only screen and (max-width: 480px) {
      font-size: 2.5em;
      line-height: 1em;
      color: #111111;
    }
  }

  p {
    font-size: 20px;
    margin-bottom: 20px;
    color: rgb(44, 44, 44);

    @media only screen and (max-width: 480px) {
      color: #1e1e1e;
    }
  }

  .content {
    width: 40%;

    @media only screen and (max-width: 979px) {
      width: 50%;
    }

    @media only screen and (max-width: 767px) {
      width: 100%;

      &--text {
        width: 50%;
      }
    }
  }
`;

export const IndexPass = styled.section`
  padding-top: 5px;
  background-position: center;
  background-size: cover;
  background-repeat: repeat-y;

  .items {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    flex: 50%;
    align-self: center;
    padding: 30px;

    img {
      margin: 0;
    }

    @media only screen and (max-width: 767px) {
      flex: 100%;
      padding: 30px 3%;

      &:first-child {
        padding-bottom: 0;
        padding-top: 0;
      }
    }
  }
`;

const indexCommunityBg = `url('${withPrefix(
  '/static/index/fitato-community-bg.jpg',
)}')`;

export const IndexCommunity = styled.section`
  padding: 105px 10%;
  padding-bottom: 150px;
  background-image: ${indexCommunityBg};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  color: #ffffff;
  text-align: center;

  @media only screen and (max-width: 767px) {
    padding-left: 3%;
    padding-right: 3%;
    text-align: left;
  }

  .wrapper {
    width: 50%;
    margin: 0 auto;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const IndexAccess = styled.section`
  padding-top: 80px;
  padding-bottom: 60px;

  h2 {
    @media only screen and (max-width: 767px) {
      text-align: center;
    }
  }

  .items {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }

    .item {
      &:first-child {
        flex: 3;
        max-width: 55%;
        margin-right: auto;

        @media only screen and (max-width: 767px) {
          max-width: 100%;
        }
      }

      &:last-child {
        flex: 1;
        text-align: right;

        img {
          max-height: 400px;

          @media only screen and (max-width: 979px) {
            max-height: 350px;
          }
        }

        @media only screen and (max-width: 767px) {
          margin-top: 40px;
        }
      }
    }
  }

  .activities {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    .activity {
      flex: 25%;
      text-align: center;
      margin: 20px 0;

      img,
      span {
        display: block;
        margin: auto;
      }

      img {
        object-fit: contain;
        margin-bottom: 10px;
        max-height: 75px;

        @media only screen and (max-width: 480px) {
          max-height: 50px;
        }

        @media only screen and (max-width: 380px) {
          max-height: 35px;
        }
      }

      span {
        font-weight: bold;
        max-width: 100px;

        @media only screen and (max-width: 380px) {
          font-size: 14px;
        }
      }
    }
  }
`;

export const IndexFlexible = styled.section`
  padding-top: 100px;
  padding-bottom: 55px;
  text-align: center;

  img {
    max-height: 240px;
  }

  h3 {
    font-size: 1.3rem;
    letter-spacing: 0;
  }

  p {
    max-width: 290px;
    font-size: 16px;
    margin: auto;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 60px;

    .item {
      flex: 1;
      min-width: 320px;
      margin-bottom: 50px;

      @media only screen and (max-width: 767px) {
        margin-bottom: 65px;
      }
    }
  }
`;

export const IndexJoin = styled.section`
  text-align: center;
  background-color: #efefef;
  padding-top: 50px;
  padding-bottom: 50px;

  @media only screen and (max-width: 767px) {
    text-align: left;
  }

  .container {
    background-color: #ffffff;
    padding-top: 55px;
    padding-bottom: 20px;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: -110px;
    margin-bottom: -100px;
    border-radius: 5px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
      0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);

    @media only screen and (max-width: 1200px) {
      margin-left: 5%;
      margin-right: 5%;
    }
  }

  .partial-mc-form__main > div {
    display: inline-block;
    margin: 0 10px;
    max-width: 200px;

    @media only screen and (max-width: 767px) {
      display: block;
    }

    .partial-mc-form__main--radio {
      margin-top: 7px;

      li {
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
`;

export const IndexPartners = styled.section`
  padding: 95px 2%;
  padding-top: 145px;
  text-align: center;

  p {
    margin: 0;
    margin-bottom: 10px;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .left {
    flex: 1;
    text-align: left;
    border-right: 1px solid #eee3e3;
    padding-right: 30px;

    @media only screen and (max-width: 767px) {
      border-right: unset;
      padding-right: 0px;
      min-width: 100%;
      text-align: center;
    }
  }

  .right {
    padding-left: 30px;
    flex: 3;

    @media only screen and (max-width: 767px) {
      min-width: 100%;
      padding-left: 0;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    @media only screen and (max-width: 767px) {
      justify-content: center;
    }
  }

  .item {
    padding: 5px;
    font-size: 14px;
    flex: 1;
    min-width: 130px;
    max-width: 135px;
    text-align: center;
    margin: 10px;

    @media only screen and (max-width: 767px) {
      min-width: 70px;
    }

    &:last-child {
      text-align: left;
      font-size: 17px;
    }

    img {
      max-height: 70px;
      max-width: 100px;
      margin: 0;
      filter: grayscale(100%);

      &:hover {
        filter: grayscale(0);
      }

      @media only screen and (max-width: 767px) {
        max-height: 70px;
        max-width: 70px;
        filter: grayscale(0%);
      }
    }
  }
`;

export const IndexTestimonials = styled.section`
  padding: 100px 0;
  text-align: center;

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media only screen and (max-width: 979px) {
      flex-wrap: nowrap;
      justify-content: unset;
      flex-direction: row;
      touch-action: manipulation;
      overflow: scroll;
    }
  }

  .item {
    flex: 1;
    padding: 35px 30px;
    margin: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
      0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    position: relative;
    z-index: 8;

    @media only screen and (max-width: 979px) {
      margin: 20px 10px;
      min-width: 300px;
    }

    @media only screen and (max-width: 380px) {
      min-width: 250px;
    }

    &--img {
      border-radius: 50%;
    }

    h4 {
      margin-bottom: 15px;
    }

    &--review {
      margin-bottom: 0;
      color: #000000bf;
    }
  }
`;

export const IndexMedia = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__left {
    flex: 1;
  }

  &__right {
    flex: 2;
  }

  img {
    margin: 10px 20px;
    vertical-align: middle;
    width: 120px;
    filter: grayscale(100%);
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: grayscale(0%);
    }
  }

  a:hover,
  a:focus {
    border-bottom-width: 0;
  }
`;

export const IndexCallback = styled.section`
  padding: 100px 0 70px 0;
  background-color: #000000;
  color: #ffffff;
  background-image: url('${withPrefix('/static/index/fitness-barbell.jpg')}');
  background-position: calc(50% + 350px) center;
  background-size: 840px;
  background-repeat: no-repeat;

  @media only screen and (max-width: 979px) {
    background-size: 55%;
  }

  @media only screen and (max-width: 767px) {
    padding: 75px 3% 200px 3%;
    background-position: right bottom;
    background-size: 65%;
  }

  @media only screen and (max-width: 480px) {
    background-size: 85%;
  }

  .wrapper {
    width: 45%;

    @media only screen and (max-width: 979px) {
      width: 50%;
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .form {
    input[type='text'],
    input[type='tel'],
    input[type='email'] {
      color: #ffffff;
    }

    input[type='submit'] {
      margin-left: 0;
    }
  
    input[type='text']:focus,
    input[type='tel']:focus,
    input[type='email']:focus,
    input[type='number']:focus,
    select:focus {
      border-color: #ffffff;
    }
  
    .partial-mc-form__main--radio li {
      display: inline-block;
      margin-right: 10px;
    }
  }
`;
