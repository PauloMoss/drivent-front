import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";
import { DashWarning } from "../Dashboard/DashWarning";
import HotelRoom from "./HotelRoom/HotelRooms";

export default function HotelForm() {
  const { booking } = useApi();
  const [isPaid, setIsPaid] = useState(false);
  const [isOnline, setIsOnline] = useState(null);
  
  useEffect(() => {
    booking.getBookingInfo()
      .then(response => {
        if(response.status === 200) {
          const bookDetails = response.data;
          setIsPaid(bookDetails.isPaid);
          setIsOnline(bookDetails.isOnline);
        };
      })
      .catch(() => {
        toast("Não foi possível encontrar sua reserva");
      });
  }, []);

  return (
    <>
      <StyledTypography variant="h4" color="initial">Escolha de hotel e quarto</StyledTypography>
      {
        isPaid
          ? isOnline
            ? <DashWarning variant="h6">
              Sua modalidade de ingresso não inclui hospedagem <br/> Prossiga para a escolha de atividades
            </DashWarning>
            : <HotelRoom />
          : <DashWarning variant="h6">
              Você precisa ter confirmado pagamento antes <br/> de fazer a escolha de hospedagem
          </DashWarning>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
