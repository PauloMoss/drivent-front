import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { OptionBoxWrapper } from "./OptionBoxWrapper";
import { OptionBox, Description, Price, StyledTypography } from "./OptionBox";

export default function TicketOptions({ title, selectedOption, setSelectedOption, apiFunction }) {
  const [options, setOptions] = useState();

  useEffect(() => {
    apiFunction().then(response => {
      if (response.status !== 200) {
        return;
      }
      setOptions(response.data);
    }).catch((error) => {
      toast("Não foi possível");
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h6">{title}</StyledTypography>
      <OptionBoxWrapper>
        {options?.map(option => (
          <OptionBox key={option.id} onClick={(e) => setSelectedOption(option)} active={selectedOption === option ? true : false}>
            <Description>{option.name}</Description>
            <Price>R$ {option.price}</Price>
          </OptionBox>
        ))}
      </OptionBoxWrapper>
    </>
  );
}
