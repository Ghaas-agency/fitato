import styled from 'styled-components';

const StyledLocations = styled.section`
  padding: 95px 0;
  background-color: #ffffff;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .heading,
  .imgs {
    flex: 1;
  }

  .heading {
    text-align: right;
    padding: 0 25px;
  }

  .imgs {
    padding: 0 15px;
    border-left: 1px solid #dddddd;
  }

  .img {
    display: inline-block;
    text-align: center;

    img {
      width: 90px;
      margin: 15px;
    }
  }
`;

export default StyledLocations;
