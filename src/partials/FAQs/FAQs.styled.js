import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const AccordionContainer = styled.div`
  .accordion-item {
    & > h4,
    & > h3 {
      &::before {
        content: url('${withPrefix('/static/icons/arrow-down.svg')}');
      }
    }
  }
  
  .accordion-item-active {
    & > h4,
    & > h3 {
      &::before {
        content: url('${withPrefix('/static/icons/arrow-up.svg')}');
      }
    }
  }
`;

export default AccordionContainer;
