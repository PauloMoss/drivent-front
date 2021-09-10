import styled from "styled-components";

import SectionTitle from "../../Form/SectionTitle";
import HotelRoomBox from "./HotelRoomBox";

export default function HotelRooms() {
  const roomQuantity = [];
  const quantityNumber = 16;

  const room = {
    id: null,
    number: 101,
    isAvailable: false,
    vacancy: [
      { id: 1, isFilled: true },
      { id: 2, isFilled: false },
      { id: 3, isFilled: false }
    ]
  };

  for(let i = 0; i < quantityNumber; i++) {
    room.id = i;
    roomQuantity.push(room);
  }

  return(
    <>
      <SectionTitle>Ótima pedida! Agora escolha seu quarto:</SectionTitle>
      <RoomsContainer>
        {
          roomQuantity.map((rq) => {
            return <HotelRoomBox key={rq.id} room={rq} />;
          })
        }
      </RoomsContainer>
      
    </>
  );
};

const RoomsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 35px 80px 0 40px;
`;
