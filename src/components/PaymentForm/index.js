import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";

import { DashWarning } from "../Dashboard/DashWarning";
import Ticket from "./TicketModality/Ticket";
import FinalizePayment from "./FinalizePayment";
import Overview from "./ReservationOverview/Overview";

export default function PaymentForm() {
  const { enrollment, booking } = useApi();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    enrollment.getPersonalInformations()
      .then((response) => {
        if (response.status === 200) {
          setIsEnrolled(true);
        };
      })
      .catch(() => {
        toast("Não foi possível encontrar sua inscrição");
      });
  }, []);

  useEffect(() => {
    if (isEnrolled) {
      booking.getBookingInfo()
        .then((response) => {
          if (response.status === 200) {
            const booked = response.data;
            setBookDetails(booked);
            setIsPaid(booked.isPaid);
          };
        })
        .catch(() => {
          toast("Não foi possível encontrar sua reserva");
        });
    }
  }, [isEnrolled]);

  function RenderProperPaymentStatus() {
    return (
      <>
        {
          bookDetails
            ? isPaid
              ? <Overview />
              : <FinalizePayment />
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
