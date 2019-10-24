import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 0;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
      height: 80px;
      max-width: 130px;
      min-width: 130px;
      object-fit: contain;

      @media only screen and (max-width: 480px) {
        max-width: 100px;
        min-width: 100px;
      }
    }
  }
`;
