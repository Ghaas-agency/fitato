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

  .facilities {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    margin-top: 40px;
    padding-top: 50px;

    &-dropdown {
      margin-bottom: 30px;

      & > div {
        display: inline-block;
        width: 300px;
        margin-left: 20px;
        text-align: left;

        input {
          margin: 0;
          transition: unset;
        }
      }

      & > span {
        @media only screen and (max-width: 767px) {
          display: block;
          margin-bottom: 10px;
        }
      }
    }

    &-items {
      display: flex;
      flex-wrap: wrap;

      &-container {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 5px;
        box-shadow: ${({ theme: { shadow } }) => shadow};

        @media only screen and (max-width: 767px) {
          padding: 15px;
        }
      }

      @media only screen and (max-width: 480px) {
        flex-direction: column;
      }
    }

    &-item {
      flex: 1;
      min-width: calc(33.33% - 30px);
      max-width: calc(33.33% - 30px);
      margin: 15px;
      box-shadow: ${({ theme: { shadow } }) => shadow};
      padding: 20px;
      border-radius: 5px;

      @media only screen and (max-width: 979px) {
        min-width: calc(50% - 30px);
        max-width: calc(50% - 30px);
      }

      @media only screen and (max-width: 767px) {
        min-width: calc(50% - 14px);
        max-width: calc(50% - 14px);
        margin: 7px;
      }

      @media only screen and (max-width: 480px) {
        min-width: calc(100% - 14px);
        max-width: calc(100% - 14px);
      }

      h3 {
        font-size: 1.2em;
        margin-bottom: 7px;
      }

      .locality {
        font-size: 0.9em;
        text-transform: capitalize;
      }

      .activities {
        margin: -5px;
        padding: 0;
        list-style: none;

        li {
          display: inline-block;
          margin: 5px;
          border: 1px solid rgba(0, 0, 0, 0.23);
          padding: 1.5px 10px;
          border-radius: 30px;
          font-size: 0.8em;
        }
      }
    }
  }

  .pagination {
    padding-top: 5px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      margin-top: 25px;

      li {
        display: inline-block;
        border-radius: 3px;
        margin: 0 3px;

        &.active {
          background-color: ${({ theme: { colors } }) => colors.red};

          button {
            color: #ffffff;
          }
        }
      }
    }
  }
`;
