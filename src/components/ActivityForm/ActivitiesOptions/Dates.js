import styled from "styled-components";
import MuiButton from "@material-ui/core/Button";

import SectionTitle from "../../Form/SectionTitle";

export default function Dates({ selectedDay, setSelectedDay, activities }) {
  const mappedEventDays = activities?.map(activitie => activitie.date);
  
  const eventDays = mappedEventDays?.filter((day, i) => mappedEventDays.indexOf(day) === i);

  return (
    <>
      <SectionTitle>Primeiro, filtre pelo dia do evento:</SectionTitle>
      {eventDays?.map((day, i) => (
        <Button
          variant="contained"
          key={i}
          onClick={() => setSelectedDay(i)}
          selected={selectedDay === i ? true : false}
        >
          {day}
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
