import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import useApi from "../../../hooks/useApi";
import SectionTitle from "../../Form/SectionTitle";
import HotelRoomBox from "./HotelRoomBox";

export default function HotelRooms() {
  const { hotel } = useApi();
  const [hotelRooms, setHotelRooms] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const hotelId = 1;

  useEffect(() => {
    hotel.getHotelRooms(hotelId)
      .then(response => {
        if (response.status === 200) {
          setHotelRooms(response.data);
        };
      })
      .catch(() => {
        toast("Não foi possível encontrar os quartos desse hotel");
      });
  }, []);

  return (
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
                selectedRoom={selectedRoom} />
            );
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
