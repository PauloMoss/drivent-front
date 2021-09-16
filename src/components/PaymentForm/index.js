import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import useApi from "../../hooks/useApi";

import { DashWarning } from "../Dashboard/DashWarning";
import Ticket from "./TicketModality/Ticket";
import ReservationOverview from "./ReservationOverview";
import UserContext from "../../contexts/UserContext";

export default function PaymentForm() {
  const { booking, enrollment } = useApi();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [hasBooking, setHasBooking] = useState(false);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    enrollment.getPersonalInformations()
      .then(res => {if (res.status === 200) setIsEnrolled(true);});
    booking.getBookingInfo()
      .then(res => {if (res.status === 200) {
        setHasBooking(true);
        if(res.data.isPaid) setIsPaid(true);
      };});
  }, [userData]);

  function RenderProperPaymentStatus() {
    return (
      <>
        {
          hasBooking
            ? <ReservationOverview isPaid={isPaid}/>
            : <Ticket/>
        }
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4" color="initial">Ingresso e pagamento</StyledTypography>
      {
        isEnrolled ?
          <RenderProperPaymentStatus />
          : <DashWarning variant="h6">
            Você precisa completar sua inscrição antes<br /> de prosseguir pra escolha de ingresso
          </DashWarning>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
