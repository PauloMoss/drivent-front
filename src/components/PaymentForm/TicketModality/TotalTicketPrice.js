import { useState } from "react";

<<<<<<< HEAD:src/components/PaymentForm/TotalTicketPrice.js
import useApi from "../../hooks/useApi";
import SectionTitle from "../Form/SectionTitle";
import Button from "../Form/Button";
import UserContext from "../../contexts/UserContext";
import { toast } from "react-toastify";

export default function TotalTicketPrice({ selectedOrder, setUserData, setHasReservation, setBookingId }) {
  const { userData } = useContext(UserContext);
=======
import useApi from "../../../hooks/useApi";
import  SectionTitle  from "../../Form/SectionTitle";
import Button from "../../Form/Button";
import { toast } from "react-toastify";

export default function TotalTicketPrice({ selectedOrder }) {
>>>>>>> main:src/components/PaymentForm/TicketModality/TotalTicketPrice.js
  const { booking } = useApi();

  const [disabled, setDisabled] = useState(false);

  const bookingInfo = {
    ...selectedOrder 
  };

  const totalPrice = selectedOrder.price;

  function sendBookingInfo() {
    setDisabled(true);
    
    booking
<<<<<<< HEAD:src/components/PaymentForm/TotalTicketPrice.js
      .postBookingInfo(bookingInfo, config)
      .then((res) => {
        setBookingId(res.data.id);
        setHasReservation(true);
        setUserData({ ...userData, hasReservation: true, bookingId: res.data.id });
=======
      .postBookingInfo(bookingInfo)
      .then(() => {
>>>>>>> main:src/components/PaymentForm/TicketModality/TotalTicketPrice.js
        setDisabled(false);
      })
      .catch((err) => {
        console.error(err);
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

