import { useState } from "react";

import Modality from "./Modality";
import Accommodation from "./Accommodation";
import TotalTicketPrice from "./TotalTicketPrice";

export default function Ticket() {
  const [selectedTicket, setSelectedTicket] = useState();
  const [selectedAccommodation, setSelectedAccommodation] = useState();

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

  return(
    <>
      <Modality setSelectedTicket={setSelectedTicket} selectedTicket={selectedTicket} />
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
};
