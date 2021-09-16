import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";

import { DashWarning } from "../Dashboard/DashWarning";
import Ticket from "./TicketModality/Ticket";
import ReservationOverview from "./ReservationOverview";

export default function PaymentForm() {
  const { booking, enrollment } = useApi();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  
  useEffect(() => {
    enrollment.getPersonalInformations()
      .then(res => {if (res.status === 200) setIsEnrolled(true);});
    booking.getBookingInfo()
      .then(res => {if (res.status === 200) setIsPaid(true);});
  }, []);

  function RenderProperPaymentStatus() {
    return (
      <>
        {
          isPaid
            ? <ReservationOverview isPaid={isPaid}/>
            : <Ticket setIsPaid={setIsPaid}/>
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
