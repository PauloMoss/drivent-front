import { useState } from "react";

import useApi from "../../../hooks/useApi";
import  SectionTitle  from "../../Form/SectionTitle";
import Button from "../../Form/Button";
import { toast } from "react-toastify";

export default function TotalTicketPrice({ selectedOrder }) {
  const { booking } = useApi();

  const [disabled, setDisabled] = useState(false);

  const bookingInfo = {
    ...selectedOrder 
  };

  const totalPrice = selectedOrder.price;

  function sendBookingInfo() {
    setDisabled(true);
    
    booking
      .postBookingInfo(bookingInfo)
      .then(() => {
        setDisabled(false);
      })
      .catch((err) => {
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

