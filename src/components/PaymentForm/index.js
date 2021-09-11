import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";

import { DashWarning } from "../Dashboard/DashWarning";
import Ticket from "./TicketModality/Ticket";
import ReservationOverview from "./ReservationOverview";
import UserContext from "../../contexts/UserContext";

export default function PaymentForm() {
  const { enrollment } = useApi();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { userData } = useContext(UserContext);
  
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

  function RenderProperPaymentStatus() {
    return (
      <>
        {
          userData.hasReservation
            ? <ReservationOverview />
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
