import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import useApi from "../../hooks/useApi";

import { OptionBoxWrapper } from "./OptionBoxWrapper";
import { OptionBox, Description, Price, StyledTypography } from "./OptionBox";

import { BookingButton } from "./BookingButton";
import UserContext from "../../contexts/UserContext";

export default function TotalTicketPrice({ selectedTicket }) {
  const { userData } = useContext(UserContext);
  const { booking } = useApi();

  const [disabled, setDisabled] = useState(false);

  const bookingInfo = {
    userId: userData.user.id,
    ticketInfo: selectedTicket,
  };
  const totalPrice = selectedTicket.price;

  function sendBookingInfo() {
    setDisabled(true);
    booking.postBookingInfo
      .then(() => {
        setDisabled(false);
      })
      .catch(() => {
        setDisabled(false);
      });
  }
  return (
    <>
      <StyledTypography variant="h6">
        {`Fechado! O total ficou em R$ ${totalPrice}. Agora é só confirmar:`}
      </StyledTypography>
      <BookingButton onClick={sendBookingInfo} disabled={disabled}>
        RESERVAR INGRESSO
      </BookingButton>
    </>
  );
}
