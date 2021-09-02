import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export default function TicketTypeSelect() {
  return (
    <>
      <StyledTypography variant="h6">Primeiro, escolha sua modalidade de ingresso</StyledTypography>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
  color: #8E8E8E;
  margin-top: 37px!important;
`;
