import styled from 'styled-components';

const StyledTopbar = styled.div`
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

    @media only screen and (max-width: 767px) {
      margin-bottom: 0;
      margin-right: 25px;
      margin-left: 15px;
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
    float: right;
    margin-top: 5px;
    padding: 3px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 2px solid #eeeeee;
    width: 30px;
    height: 30px;
    font-size: 0.7em;
    cursor: pointer;
    text-align: center;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }

    @media only screen and (max-width: 767px) {
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
