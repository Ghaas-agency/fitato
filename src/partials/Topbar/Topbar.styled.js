import styled from 'styled-components';

const StyledTopbar = styled.div`
  position: relative;
  background-color: #eb1f2e;
  color: #ffffff;
  text-align: center;
  padding: 10px 0;

  @media only screen and (max-width: 767px) {
    text-align: left;
    padding: 10px 0 15px 0;
  }

  p {
    margin-bottom: 0;
    height: 35px;
    font-size: 0.95em;

    .button-inverted {
      display: inline-block;
      padding: 4px 12px;
      margin: 0;
      margin-left: 15px;
      font-size: 0.9em;
    }

    @media only screen and (max-width: 979px) {
      height: auto;
      padding-right: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      line-height: 1.3;

      .button-inverted {
        text-align: center;
        min-width: 110px;
        padding: 8px 12px;
      }
    }

    @media only screen and (max-width: 767px) {
      margin-bottom: 0;
      font-size: 0.9em;

      .button-inverted {
        min-width: 100px;
      }
    }

    @media only screen and (max-width: 380px) {
      font-size: 0.8em;

      .button-inverted {
        min-width: 90px;
      }
    }
  }

  a {
    color: #ffffff;

    &:hover {
      border-bottom: 1px solid #ffffff;
    }
  }

  img {
    width: 33px;
    margin-right: 15px;
    vertical-align: middle;
    margin-bottom: 8px;

    @media only screen and (max-width: 767px) {
      float: left;
      margin: 0px 15px;
      margin-left: 0;
    }
  }

  .close {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    padding: 2px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 1.5px solid #eeeeee;
    width: 25px;
    height: 25px;
    cursor: pointer;
    text-align: center;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 0.75;

    img {
      margin: 0;
      width: 100%;
      vertical-align: baseline;
    }

    &:hover {
      opacity: 1;
    }

    @media only screen and (max-width: 767px) {
      right: 10px;

      img {
        margin: 0;
      }
    }
  }

  img.partial-topbar--arrow {
    width: 20px;
    vertical-align: text-top;
    margin: 0 !important;
    float: unset !important;
  }
`;

export default StyledTopbar;
