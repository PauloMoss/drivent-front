import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import useApi from "../../../hooks/useApi";
import SectionTitle from "../../Form/SectionTitle";
import BookingRoom from "../BookingRoom";
import HotelRoomBox from "./HotelRoomBox";

export default function HotelRooms() {
  const { rooms } = useApi();
  const [hotelRooms, setHotelRooms] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const hotelId = 1;

  rooms.getHotelRooms(hotelId, setHotelRooms);
  selectedRoom && verifyChoosenVacancyRealTimeStatus(hotelRooms);

  function verifyChoosenVacancyRealTimeStatus(rooms) {
    const choosenRoom = rooms.find(r => r.id === selectedRoom.roomId);
    const choosenVacancy = choosenRoom.vacancies.find(v => v.id === selectedRoom.vacancyId);
    if(choosenVacancy.isFilled) {
      setSelectedRoom(null);
      toast("A vaga selecionada foi escolhida, por favor selecione outra");
    };
  }

  return(
    <>
      <SectionTitle>Ótima pedida! Agora escolha seu quarto:</SectionTitle>
      <RoomsContainer>
        {
          hotelRooms?.map((rq) => {
            return (
              <HotelRoomBox 
                key={rq.id} 
                room={rq} 
                setSelectedRoom={setSelectedRoom} 
                selectedRoom={selectedRoom}/>
            );
          })
        }
      </RoomsContainer>
      <BookingRoom selectedRoom={selectedRoom}/>
      
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
