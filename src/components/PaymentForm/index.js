import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";
import TotalTicketPrice from "./TotalTicketPrice";

import Tickets from "./Tickets";
import Accommodation from "./Accommodation";

export default function PaymentForm() {
  const { enrollment } = useApi();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState();
  const [selectedAccommodation, setSelectedAccommodation] = useState();
  
  useEffect(() => {
    enrollment.getPersonalInformations().then(response => {
      setIsEnrolled(true);
    }).catch((error) => {
      toast("Não foi possível");
    });
  }, []);

  const isPresential = selectedTicket?.name === "Presencial";
  const isOnline = selectedTicket?.name === "Online";
  let selectedOrder = {};

  if(isOnline)
  {
    selectedOrder = selectedTicket;
    selectedAccommodation && setSelectedAccommodation(null);
  } else if(selectedAccommodation) {
    selectedOrder.name = `${selectedTicket.name} + ${selectedAccommodation.name}`;
    selectedOrder.price = selectedTicket.price + selectedAccommodation.price;
  }
  return (
    <>
      <StyledTypography variant="h4" color="initial">Ingresso e pagamento</StyledTypography>
      {
        isEnrolled
          ? <Tickets setSelectedTicket={setSelectedTicket} selectedTicket={selectedTicket} />
            
          : <NoEnrollmentWarning variant="h6">
              Você precisa completar sua inscrição antes<br/> de prosseguir pra escolha de ingresso
          </NoEnrollmentWarning>
      }
      {
        selectedTicket 
          ? isPresential
            ? <Accommodation setSelectedAccommodation={setSelectedAccommodation} selectedAccommodation={selectedAccommodation}/>
            : <TotalTicketPrice selectedOrder={selectedOrder}/>
          : ""
      }
      {
        selectedAccommodation ?
          <TotalTicketPrice selectedOrder={selectedOrder}/>
          : ""
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
