import { useContext, useState } from "react";
import useApi from "../../hooks/useApi";
import  SectionTitle  from "../Form/SectionTitle";
import Button from "../Form/Button";
import UserContext from "../../contexts/UserContext";
import { toast } from "react-toastify";

export default function TotalTicketPrice({ selectedTicket }) {
  const { userData } = useContext(UserContext);
  const { booking } = useApi();

  const [disabled, setDisabled] = useState(false);

  const bookingInfo = {
    userId: userData.user.id,
    ticketInfo: selectedTicket,
  };
  const totalPrice = selectedTicket.price;
  const config = { headers: { Authorization: `Bearer ${userData.token}` } };

  function sendBookingInfo() {
    setDisabled(true);
    booking
      .postBookingInfo(bookingInfo, config)
      .then(() => {
        setDisabled(false);
      })
      .catch(() => {
        setDisabled(false);
        toast("Não foi possível fazer a reserva, tente novamente");
      });
  }
  return (
    <>
      <SectionTitle>{`Fechado! O total ficou em R$ ${totalPrice}. Agora é só confirmar:`}</SectionTitle>
      <Button onClick={sendBookingInfo} disabled={disabled}>
        RESERVAR INGRESSO
      </Button>
    </>
  );
}
