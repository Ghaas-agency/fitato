import styled from 'styled-components';

export const MainHeader = styled.nav`
  background-color: #ffffff;
  box-shadow: 0px 2px 5px #00000026;
  border-bottom: 1px solid #efefef;
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100vw;

  .main-header-container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 5px 3%;
  }

  .menu-logo {
    display: inline-block;
    height: 66px;
    width: 120px;
    color: #ffffff;
    text-decoration: none;
    margin: 0;

    &:focus,
    &:hover {
      border-bottom-width: 0;
    }

    & > img {
      margin-bottom: 0;
      margin-top: 7px;
      max-width: 120px;
      max-height: 62px;
    }
  }

  .menu-links {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    float: right;
    padding-top: 10px;
    z-index: 9;

    & > li {
      display: inline-block;
      margin: 0 10px;
      padding: 0;

      &:last-child {
        margin: 0;
      }

      @media only screen and (max-width: 791px) {
        display: block;
        margin: 0;
        margin-bottom: 30px;
      }
    }

    &__partners {
      position: relative;

      button {
        display: inline-block;
        vertical-align: middle;
        margin: 0;
        padding: 0;
        margin-left: 3px;
        width: 29px;
        height: 25px;

        @media only screen and (max-width: 791px) {
          display: none;
        }
      }

      &-items {
        position: absolute;
        display: block;
        top: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%) scale(0.9);
        text-align: center;
        background-color: #ffffff;
        list-style: none;
        padding: 0 15px;
        margin: 0;
        border-radius: 5px;
        box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
          0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
        opacity: 0;
        transform-origin: right top;
        transition: all 0.2s ease-in-out;
        will-change: transform, opacity;

        @media only screen and (max-width: 791px) {
          display: none;
        }

        &.active {
          transform: translateX(-50%) scale(1);
          opacity: 1;
        }

        li {
          margin: 7px 0;
          padding: 0;

          a {
            color: ${({ theme: { colors } }) => colors.darkGrey};
          }
        }
      }
    }
  }

  .menu-close-x {
    display: none;
  }

  .menu-link-item {
    &,
    &:visited,
    &:focus {
      color: #1e1e1e;
      margin: 0;
      font-size: 90%;
      border-bottom: none;
    }

    &:hover {
      border-bottom: 1px solid #1e1e1e;
      padding-bottom: 3px;
    }

    &-active {
      &,
      &:visited,
      &:focus {
        padding-bottom: 3px;
        border-bottom: 2px solid #1e1e1e;
      }

      &:hover {
        border-bottom: 2px solid #1e1e1e;
      }
    }
  }

  .main-header-menu-icon {
    display: none;
    float: right;
    width: 40px;
    margin-top: 15px;
    padding: 5px;
    border: 2px solid rgb(51, 51, 51);
    border-radius: 3px;
  }

  .mobile-menu-bg {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 92px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: none;
  }

  @media only screen and (max-width: 791px) {
    z-index: 9;

    .main-header-container {
      padding: 0 3%;
    }

    .menu-links {
      position: fixed;
      font-size: 1.5em;
      background-color: #ffffff;
      padding: 30px;
      top: 70px;
      width: 100%;
      left: 0%;
      text-align: center;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
      overflow: auto;
      opacity: 0;
      transition: all 0.15s ease-in-out;
      transform: translateY(-5px) scale(0.9);
      transform-origin: top right;
      pointer-events: none;
      z-index: -1;

      &.active {
        opacity: 1;
        transform: translateY(0px) scale(1);
        pointer-events: all;
        z-index: 9;
      }
    }

    .menu-close-x {
      display: block;
      position: fixed;
      text-align: center;
      bottom: 50px;
      background-color: #ffffff;
      padding: 18px;
      border-radius: 50%;
      width: 70px;
      height: 70px;
      left: 50%;
      transform: translate(-50%, 50px) scale(0);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
      z-index: 999;
      transition: all 0.15s ease-in-out;

      &.active {
        transform: translate(-50%, 0) scale(1);
      }

      img {
        width: 35px;
        height: 35px;
      }
    }

    .mobile-menu-bg {
      display: block;
      opacity: 0;
      pointer-events: none;
      transition: all 0.2s ease-in-out;

      &.active {
        opacity: 1;
        pointer-events: all;
      }
    }

    .menu-link-item {
      &,
      &:visited {
        color: #1e1e1e;
        margin: 0 10px;
      }

      &:hover,
      &:focus {
        border-bottom: unset;
        padding-bottom: 3px;
        text-decoration: none !important;
      }

      &-active {
        &,
        &:visited {
          margin: 0 10px;
          padding-bottom: 3px;
          border-bottom-width: 0;
          color: #eb1f2e;
        }

        &:hover,
        &:focus {
          border-bottom-width: 0;
        }
      }
    }

    .main-header-menu-icon {
      display: inline-block;
      margin-bottom: 15px;
    }

    .menu-logo > img {
      padding-top: 3px;
      width: 115px;
    }
  }

  @media only screen and (max-width: 400px) {
    .menu-links {
      font-size: 1.25em;

      > a {
        margin-bottom: 20px;
      }
    }

    .menu-close-x {
      padding: 10px;
      width: 50px;
      height: 50px;

      img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
