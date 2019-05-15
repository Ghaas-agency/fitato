import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const AccordionContainer = styled.div`
  .react-sanfona-item {
    padding: 20px 0;
    margin: -2px 0;

    &-body-wrapper {
      color: #1E1E1E;
      margin-top: 20px;
      padding-left: 30px;
    }

    &-title {
      position: relative;
      padding-left: 30px;
    }
  }

  .accordion-item {
    & > h4,
    & > h3 {
      &::before {
        content: url('${withPrefix('/static/icons/arrow-down.svg')}');
        position: absolute;
        top: -1px;
        left: 0px;
      }
    }

    &-active {
      & > h4,
      & > h3 {
        &::before {
          content: url('${withPrefix('/static/icons/arrow-up.svg')}');
          position: absolute;
          top: -1px;
          left: 0px;
        }
      }
    }
  }
`;

export default AccordionContainer;
