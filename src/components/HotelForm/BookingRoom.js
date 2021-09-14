import { useState, useContext } from "react";

import useApi from "../../hooks/useApi";
import Button from "../Form/Button";
import UserContext from "../../contexts/UserContext";
import { toast } from "react-toastify";

export default function BookingRoom({ selectedOrder }) {
  const { userData, setUserData } = useContext(UserContext);
  const { hotel } = useApi();

  const [disabled, setDisabled] = useState(false);

  const bookingRoomInfo = {
    ...selectedOrder
  };

  function sendRoomInfo() {
    setDisabled(true);

    hotel
      .postBookingRoomInfo(bookingRoomInfo)
      .then((res) => {
        const bookingHotel = { hotelId: res.data.hotelId, roomId: res.data.roomId, vacancyId: res.data.vacancyId };
        setUserData({ ...userData, bookingHotel });
        setDisabled(false);
      })
      .catch(() => {
        setDisabled(false);
        toast("Não foi possível fazer a reserva, tente novamente");
      });
  }
  return (
    <>
      <Button onClick={sendRoomInfo} disabled={disabled}>
        RESERVAR QUARTO
      </Button>
    </>
  );
}
