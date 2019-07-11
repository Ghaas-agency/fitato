import styled from 'styled-components';
import { withPrefix } from 'gatsby';

export const PartnersStyled = styled.div`
  padding: 100px 0;
  text-align: center;
  border-top: 1px solid #ffffff;

  .react-sanfona {
    padding: 5px 10%;
    border-radius: 5px;

    @media only screen and (max-width: 767px) {
      padding: 5px 10%;
    }

    @media only screen and (max-width: 480px) {
      padding: 5px 0;
    }

    &-item {
      padding: 0px;
      margin: 20px 10px;
      border-radius: 5px;
      box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
        0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
      transition: all 0.2s ease-in-out;

      &-body-wrapper {
        padding: 0 30px;
        border-radius: 0px 0px 5px 5px;
        margin-top: 0;

        img {
          margin-bottom: 30px;
        }

        @media only screen and (max-width: 480px) {
          padding: 0px;
          background-color: ${({ theme: { colors } }) => colors.lightGrey};
          border-radius: 0px 0px 5px 5px;

          img {
            margin-bottom: 0px;
          }
        }
      }

      &-title {
        font-weight: normal;
        transition: all 0.2s ease-in-out;
        text-align: left;
        padding: 30px;
        padding-left: 50px;
        font-size: 1.35em;
        position: relative;

        &:hover {
          background-color: ${({ theme: { colors } }) => colors.lightGrey};
          border-radius: 5px;
        }
      }
    }
  }

  h2 {
    font-weight: normal;
    color: ${({ theme: { colors } }) => colors.red};
    font-size: 135%;
  }

  .accordion-item,
  .accordion-item-active {
    & > h3,
    & > h3 {
      &::before {
        content: url('${withPrefix('/static/icons/arrow-down.svg')}');
        position: absolute;
        top: 31px;
        left: 20px;
      }
    }
  }

  .accordion-item-active {
    & > h3,
    & > h3 {
      &::before {
        content: url('${withPrefix('/static/icons/arrow-up.svg')}');
      }
    }
  }

  .partners-page__location-title {
    margin-top: 80px;
    font-size: 2em !important;
    font-weight: 500 !important;
    color: ${({ theme: { colors } }) => colors.darkGrey} !important;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  margin-top: 40px;

  .item {
    flex: 1;
    padding: 32px 30px;
    margin: 10px 10px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
      0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    text-align: left;
    min-width: 310px;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
        0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);
      filter: invert(2%);
      border-bottom: none;
    }

    p {
      text-transform: uppercase;
      font-size: 0.9em;
      margin: 0;
    }

    h3 {
      font-size: 1.6em;
      margin-bottom: 5px;
      color: ${({ theme: { colors } }) => colors.darkGrey};
    }

    &--img {
      position: absolute;
      bottom: -45%;
      right: -30px;
      width: 170px;
      filter: opacity(95%);
    }

    &--arrow {
      margin: 0;
      padding: 0;
      width: 18px;
      vertical-align: middle;
      margin-bottom: 3px;
    }

    a:hover {
      border-bottom: none !important;
    }
  }
`;
