import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionItem } from 'react-sanfona';
import AccordionContainer from './FAQs.styled';

const FAQs = ({ data }) => (
  <AccordionContainer>
    <Accordion>
      {data().map((i) => (
        <AccordionItem
          key={i.id}
          title={i.title}
          titleTag="h4"
          className="accordion-item"
          expandedClassName="accordion-item-active">
          {i.content}
        </AccordionItem>
      ))}
    </Accordion>
  </AccordionContainer>
);

FAQs.propTypes = {
  data: PropTypes.func.isRequired,
};

export default FAQs;
