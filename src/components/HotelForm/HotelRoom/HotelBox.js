import styled from "styled-components";

export default function HotelBox({ hotelInfo }) {
  const image = hotelInfo.hotelId.image;
  const hotelName = hotelInfo.hotelId.name;
  const roomInfo = hotelInfo.roomId.number;
  const guestsInfo = hotelInfo.roomId.filledVacancies;
  return (
    <Box>
      <imageBox image={image}></imageBox>
      <span className="hotelName">{hotelName}</span>
      <span className="subtitle">Quarto reservado</span>
      <span className="roomInfo">{roomInfo}</span> 
      <span className="subtitle">Pessoas no seu quarto</span>
      <span className="guestsInfo">{guestsInfo}</span>
    </Box>
  );
}

const Box = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  background-color: #ffeed2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hotelName {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
  }
  .subtitle{
    font-weight: 700;
    font-size: 12px;
  }
  .roomInfo .guestsInfo{
    margin-top: 2px;
    margin-bottom: 14px;
    font-size: 12px;
  }
`;

const ImageBox = styled.div`
  width: 168px;
  height: 109px;
  border-radius: 5px;
  margin-top: 16px;
  background-image: ${(props) => props.image};
`;
