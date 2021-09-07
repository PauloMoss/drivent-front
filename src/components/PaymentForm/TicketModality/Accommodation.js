import useApi from "../../../hooks/useApi";

import TicketOptions from "../TicketOptions";

export default function Accommodation({ selectedAccommodation, setSelectedAccommodation }) {
  const { ticket } = useApi();

  const title = "Ótimo! Agora escolha sua modalidade de hospedagem";
  const apiFunction = ticket.getAccommodationsInfo;

  return (
    <TicketOptions title={title} selectedOption={selectedAccommodation} setSelectedOption={setSelectedAccommodation} apiFunction={apiFunction}/>
  );
}
