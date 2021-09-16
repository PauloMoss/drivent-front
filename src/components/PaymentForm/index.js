import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";

import { DashWarning } from "../Dashboard/DashWarning";
import Ticket from "./TicketModality/Ticket";
import ReservationOverview from "./ReservationOverview";

export default function PaymentForm() {
  const { booking } = useApi();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  
  useEffect(() => {
    booking.getBookingInfo()
      .then((response) => {
        if (response.status === 200) {
          const bookDetails = response.data;
          if (bookDetails.isOnline) {
            setIsEnrolled(true);
            setIsPaid(true);
          } else if (bookDetails.hasHotel) {
            setIsEnrolled(true);
            setIsPaid(true);
          }
        };
      })
      .catch(() => {
        toast("Não foi possível encontrar sua inscrição");
      });
  }, []);

  function RenderProperPaymentStatus() {
    return (
      <>
        {
          isPaid
            ? <ReservationOverview isPaid={isPaid} />
            : <Ticket />
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
