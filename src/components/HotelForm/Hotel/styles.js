import styled from "styled-components";

const StyledHotels = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow: hidden;
`;

const StyledHotelCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  width: 200px;
  height: 265px;
  margin: 0 20px 0 0;
  border-radius: 10px;

  background-color: #f1f1f1;

  cursor: pointer;

  &.selected {
    background-color: #ffeed2;
  }

  img {
    width: 170px;
    height: 110px;
    border-radius: 5px;

    margin: 16px 14px 10px;
  }

  .info {
    width: 170px;

    h3 {
      font-size: 20px;
      color: #343434;
      margin: 0 0 10px;
    }
  }

  .details {
    color: #3c3c3c;
    font-size: 12px;
    margin: 0 0 15px;

    *:first-child {
      margin: 0 0 5px;
      font-weight: 700;
    }
  }
`;

export { StyledHotels, StyledHotelCard };
