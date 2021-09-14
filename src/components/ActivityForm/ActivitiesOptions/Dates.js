import styled from "styled-components";
import MuiButton from "@material-ui/core/Button";

import SectionTitle from "../../Form/SectionTitle";

export default function Dates({ selectedDay, setSelectedDay }) {
  const eventDays = [
    { id: 1, week: "Sexta", month: "22/10" },
    { id: 2, week: "Sábado", month: "23/10" },
    { id: 3, week: "Domingo", month: "24/10" }
  ];

  return (
    <>
      <SectionTitle>Primeiro, filtre pelo dia do evento:</SectionTitle>
      {eventDays?.map(day => (
        <Button
          variant="contained"
          key={day.id}
          onClick={() => setSelectedDay(day.id)}
          selected={selectedDay === day.id ? true : false}
        >
          {day.week}, {day.month}
        </Button>
      ))}
    </>
  );
}

const Button = styled(MuiButton)`
  margin-top: 8px !important;
  margin-right: 17px !important;
  background-color: ${props => props.selected === true ? "#FFD37D" : "E0E0E0"} !important;
  text-transform: none !important;
`;
