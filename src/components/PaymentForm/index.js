import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";
import TotalTicketPrice from "./TotalTicketPrice";

import Tickets from "./Tickets";
import ReservationOverview from "./ReservationOverview";
import Accommodation from "./Accommodation";

export default function PaymentForm() {
  const { enrollment } = useApi();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [hasReservation, setHasReservation] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState();
  const [selectedAccommodation, setSelectedAccommodation] = useState();
  
  useEffect(() => {
    enrollment.getPersonalInformations().then(response => {
      setIsEnrolled(true); // bugado, n deveria ser sempre true
    }).catch((error) => {
      toast("Não foi possível");
    });
    setHasReservation(true); // trigger pra pular a seleção de ingresso e ir pro resumo + cartão
  }, []);

  const isOnline = selectedTicket?.name === "Online";
  let selectedOrder = {};
  
  if(isOnline)
  {
    selectedOrder = { isOnline: true, hasHotel: false, price: selectedTicket.price };
    selectedAccommodation && setSelectedAccommodation(null);
  } else if(selectedAccommodation) {
    selectedOrder.isOnline = false;
    selectedOrder.hasHotel = selectedAccommodation.isRequested;
    selectedOrder.price = selectedTicket.price + selectedAccommodation.price;
  }
  return (
    <>
      <StyledTypography variant="h4" color="initial">Ingresso e pagamento</StyledTypography>
      {
        isEnrolled
          ? hasReservation?<ReservationOverview setSelectedTicket={setSelectedTicket} selectedTicket={selectedTicket} />:
            <>
              <Tickets setSelectedTicket={setSelectedTicket} selectedTicket={selectedTicket} />
              {
                selectedTicket 
                  ? isOnline
                    ? <TotalTicketPrice selectedOrder={selectedOrder}/>
                    : <Accommodation setSelectedAccommodation={setSelectedAccommodation} selectedAccommodation={selectedAccommodation}/>
                  : ""
              }
              {
                selectedAccommodation ?
                  <TotalTicketPrice selectedOrder={selectedOrder}/>
                  : ""
              }
            </>
          : <NoEnrollmentWarning variant="h6">
              Você precisa completar sua inscrição antes<br/> de prosseguir pra escolha de ingresso
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
