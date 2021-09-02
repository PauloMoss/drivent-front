import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { OptionBoxWrapper } from "./OptionBoxWrapper";
import { OptionBox, Description, Price } from "./OptionBox";

export default function TicketOptions({ title, selectedOption, setSelectedOption, apiFunction }) {
  const [options, setOptions] = useState();

  useEffect(() => {
    apiFunction().then(response => {
      if (response.status !== 200) {
        return;
      }
      setOptions(response.data);
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h6">{title}</StyledTypography>
      <OptionBoxWrapper>
        {options?.map(option => (
          <OptionBox key={option.id} onClick={(e) => setSelectedOption(option.name)} active={selectedOption === option.name ? true : false}>
            <Description>{option.name}</Description>
            <Price>R$ {option.price}</Price>
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
