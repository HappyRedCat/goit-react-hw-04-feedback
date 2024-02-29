import React from 'react';
import { SectionFeedback, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionFeedback>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionFeedback>
  );
};

export default Section;
