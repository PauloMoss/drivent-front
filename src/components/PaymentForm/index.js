import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import TicketTypeSelect from "./TicketTypeSelect";

export default function PaymentForm() {
  return (
    <>
      <StyledTypography variant="h4" color="initial">Ingresso e pagamento</StyledTypography>
      <TicketTypeSelect />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
