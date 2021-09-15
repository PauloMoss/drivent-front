import { useState, useContext } from "react";

import useApi from "../../hooks/useApi";
import Button from "../Form/Button";
import UserContext from "../../contexts/UserContext";
import { toast } from "react-toastify";

export default function BookingRoom({ selectedRoom }) {
  const { userData, setUserData } = useContext(UserContext);
  const { booking } = useApi();

  const [disabled, setDisabled] = useState(false);
  function sendRoomInfo() {
    setDisabled(true);

    booking
      .postBookingRoom({ roomId: selectedRoom.roomId })
      .then((res) => {
        const { id, roomId } = res.data;
        setUserData({ ...userData, booking: { id, roomId } });
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
