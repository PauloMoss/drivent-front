import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import useApi from "../../hooks/useApi";

import { OverviewBox } from "./OverviewBox";
import Button from "../Form/Button";
import FinalizePayment from "./FinalizePayment";

export default function ReservationOverview() {
  const [ticket, setTicket] = useState();
  const [isCardValid, setIsCardValid] = useState(false);
  const { booking } = useApi();

  useEffect(() => {
    booking.getBookingInfo().then(response => {
      const { hasHotel, price, isOnline } = response.data;

      setTicket({
        type: isOnline ? "Online" : "Presencial",
        hasHotel,
        price
      });
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h6">Ingresso escolhido</StyledTypography>
      {ticket ? <OverviewBox ticket={ticket} /> : null}
      <StyledTypography variant="h6">Pagamento</StyledTypography>
      <FinalizePayment>
        <Button type="submit" disabled={!!isCardValid}>
          FINALIZAR PAGAMENTO
        </Button>
      </FinalizePayment>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 17px!important;
  color: #8E8E8E;
  margin-top: 37px!important;
`;

