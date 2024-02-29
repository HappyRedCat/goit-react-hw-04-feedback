import styled from 'styled-components';

export const SectionFeedback = styled.section`
  background-color: ${p => p.theme.colors.main};
  width: 372px;
  margin-top: 10px;
  margin-left: 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 2px 3px 7px ${p => p.theme.colors.button};

  @media (max-width: 800px) {
    background-color: beige;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 26px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.03em;
`;
