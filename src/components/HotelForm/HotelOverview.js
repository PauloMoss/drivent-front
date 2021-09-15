import { useContext } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import Button from "../Form/Button";
import UserContext from "../../contexts/UserContext";

export default function HotelOverview() {
  const { userData, setUserData } = useContext(UserContext);
  
  function changeRoom() {
    const booking = userData.booking;
    setUserData({ ...userData, booking: { ...booking, roomId: null } });
  }
  return (
    <>
      <StyledTypography variant="h6">Você já escolheu seu quarto:</StyledTypography>
      <Button onClick={changeRoom} >
        TROCAR DE QUARTO
      </Button>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 17px!important;
  color: #8E8E8E;
  margin-top: 37px!important;
`;
