import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const HowHeroBg = withPrefix(
  '/static/how-it-works/fitato-how-it-works-hero-bg.jpg',
);

const HowHeroBgMobile = withPrefix(
  '/static/how-it-works/fitato-how-it-works-hero-bg-mobile.jpg',
);

export const HowHero = styled.section`
  padding-top: 120px;
  padding-bottom: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1520px;
  background-image: url('${HowHeroBg}');

  p {
    margin: 0;
    font-size: 22px;
    padding-right: 50%;
    line-height: 1.5em;
  }

  h1 {
    padding-right: 50%;
    font-size: 58px;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 900;
    line-height: 1em;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 979px) {
    h1 {
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 767px) {
    padding-top: 100px;
    padding-bottom: 100px;

    p {
      padding-right: 50%;
      font-size: 18px;
    }

    h1 {
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 480px) {
    padding-top: 30px;
    padding-bottom: 350px;
    background-position: center bottom;
    background-size: cover;
    background-image: url('${HowHeroBgMobile}');

    p {
      padding-right: 0%;
    }

    h1 {
      font-size: 34px;
      padding-right: 0;
    }
  }

  @media only screen and (max-width: 380px) {
    padding-bottom: 300px;
  }
`;

export const HowSteps = styled.section`
  padding: 50px 0;

  .container {
    position: relative;
  }

  .nav-left,
  .nav-right {
    position: absolute;
    top: 250px;
    background-color: ${({ theme: { colors } }) => colors.red};
    border-radius: 50%;
    padding: 1px;
    cursor: pointer;
    border: 1px solid ${({ theme: { colors } }) => colors.red};
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);

    &:hover {
      box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
        0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    }
  }

  .nav-left {
    left: 10px;
  }

  .nav-right {
    right: 10px;
  }

  .nav-left,
  .nav-right {
    img {
      margin: 0;
      vertical-align: bottom;
      padding: 2px;
      width: 25px;
      height: 25px;
    }
  }

  .step {
    padding: 7px 7px 5px 7px;
    font-size: 15px;
    border: 1px solid ${({ theme: { colors } }) => colors.red};
    color: ${({ theme: { colors } }) => colors.red};
    display: inline-block;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 20px;
    margin-right: 10px;
    line-height: 1em;
    border-radius: 3px;
    background: unset;
    cursor: pointer;

    &-active {
      background-color: ${({ theme: { colors } }) => colors.red};
      color: #ffffff;
    }
  }

  .steps-container {
    overflow: hidden;
    display: flex;
    flex-direction: row;

    & > div {
      min-width: 100%;
      max-width: 100%;
    }
  }

  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &.active-1 {
      transform: translateX(0);
    }

    &.active-2 {
      transform: translateX(-100%);
    }

    &.active-3 {
      transform: translateX(-200%);
    }

    &.active-4 {
      transform: translateX(-300%);
    }
  }

  .step-left,
  .step-right {
    flex: 1;
    min-width: 275px;
  }

  .step-left {
    margin-top: 150px;
    order: 2;
  }

  .step-left h2 {
    margin-top: 20px;
    order: 1;
  }

  .step-right {
    text-align: center;
  }

  .step-right img {
    max-width: 300px;
  }

  .works-steps__item p {
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 767px) {
    .work-steps--nav-left,
    .work-steps--nav-right {
      top: 400px;
    }

    .steps {
      text-align: center;
    }

    .step-left,
    .step-right {
      flex: 100%;
      order: 1;
    }

    .step-left {
      margin-top: 0px;
    }

    .step-left p:last-child {
      padding: 0 5%;
    }

    .step-right img {
      max-width: 250px;
      margin-top: 10px;
    }

    .step-right {
      order: 2;
    }
  }
`;
