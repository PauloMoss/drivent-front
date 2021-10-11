import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";

import { OptionBoxWrapper } from "../OptionBoxWrapper";
import SectionTitle from "../../Form/SectionTitle";
import { OptionBox, Description, Price } from "../OptionBox";
import UserContext from "../../../contexts/UserContext";

export default function TicketOptions({ title, selectedOption, setSelectedOption, apiFunction }) {
  const [options, setOptions] = useState();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    apiFunction(userData.token).then(response => {
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
      <SectionTitle>{title}</SectionTitle>
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
