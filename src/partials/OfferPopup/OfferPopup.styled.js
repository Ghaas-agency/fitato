import styled from 'styled-components';

export const PopupOverlay = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  border: 0;
  display: block;
  width: 100%;
  height: 100%;
  transition: ${({ theme: { transition } }) => transition};
`;

export const PopupContainer = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  a {
    box-shadow: 0px 6px 9px -5px rgba(2, 2, 2, 0.3);
    border: 0 !important;
  }

  img {
    margin: 0;
    vertical-align: middle;
    max-width: 920px;
    width: 100%;

    &.small {
      display: none;
    }

    &.xsmall {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      width: auto;
      max-width: 100%;

      &.large {
        display: none;
      }

      &.small {
        display: block;
      }
    }

    @media only screen and (max-width: 380px) {
      &.small {
        display: none;
      }

      &.xsmall {
        display: block;
      }
    }
  }
`;

export const PopupClose = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background: unset;
  background-color: #ffffff;
  border: 0;
  cursor: pointer;
  line-height: 1;

  img {
    margin: 0;
  }
`;
