import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";
import TotalTicketPrice from "./TotalTicketPrice";
import { DashWarning } from "../Dashboard/DashWarning";
import Tickets from "./Tickets";
import Accommodation from "./Accommodation";

export default function PaymentForm() {
  const { enrollment } = useApi();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState();
  const [selectedAccommodation, setSelectedAccommodation] = useState();
  
  useEffect(() => {
    enrollment.getPersonalInformations()
      .then((response) => {
        if(response.status === 200) {
          setIsEnrolled(true);
        };
      })
      .catch(() => {
        toast("Não foi possível encontrar sua inscrição");
      });
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
          ? <Tickets setSelectedTicket={setSelectedTicket} selectedTicket={selectedTicket} />
            
          : <DashWarning variant="h6">
              Você precisa completar sua inscrição antes<br/> de prosseguir pra escolha de ingresso
          </DashWarning>
      }
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
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
