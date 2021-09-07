import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";

export default function HotelForm() {
  const { booking } = useApi();
  const [isPaid, setIsPaid] = useState(false);
  const [isOnline, setIsOnline] = useState(null);
  
  useEffect(() => {
    booking.getBookingInfo().then(response => {
      const bookDetails = response.data;
      setIsPaid(bookDetails.isPaid);
      setIsOnline(bookDetails.isOnline);
    }).catch((error) => {
      toast("Não foi possível");
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h4" color="initial">Ingresso e pagamento</StyledTypography>
      {
        isPaid
          ? isOnline
            ? <NoEnrollmentWarning variant="h6">
              Sua modalidade de ingresso não inclui hospedagem <br/> Prossiga para a escolha de atividades
            </NoEnrollmentWarning>
            : "Em breve!"
          : <NoEnrollmentWarning variant="h6">
              Você precisa ter confirmado pagamento antes <br/> de fazer a escolha de hospedagem
          </NoEnrollmentWarning>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const NoEnrollmentWarning = styled(Typography)`
  color: #8E8E8E;
  text-align: center;
  margin-top: 180px!important;
  line-height: 23px!important;
`;
