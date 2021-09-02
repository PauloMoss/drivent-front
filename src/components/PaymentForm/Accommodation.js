import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import useApi from "../../hooks/useApi";

import { OptionBoxWrapper } from "./OptionBoxWrapper";
import { OptionBox, Description, Price } from "./OptionBox";

export default function Accommodation({ selectedAccommodation, setSelectedAccommodation }) {
  const [accommodations, setAccommodations] = useState();
  const { ticket } = useApi();

  function selectAccommodation(type) {
    setSelectedAccommodation(type);
  }

  useEffect(() => {
    ticket.getAccommodationsInfo().then(response => {
      if (response.status !== 200) {
        return;
      }
      setAccommodations(response.data);
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h6">Ótimo! Agora escolha sua modalidade de hospedagem</StyledTypography>
      <OptionBoxWrapper>
        {accommodations?.map(accommodation => (
          <OptionBox key={accommodation.id} onClick={(e) => selectAccommodation(accommodation.name)} active={selectedAccommodation === accommodation.name ? true : false}>
            <Description>{accommodation.name}</Description>
            <Price>R$ {accommodation.price}</Price>
          </OptionBox>
        ))}
      </OptionBoxWrapper>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 17px!important;
  color: #8E8E8E;
  margin-top: 37px!important;
`;
