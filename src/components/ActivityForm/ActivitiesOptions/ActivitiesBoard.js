import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import ActivityCard from "./ActivityCard";

export default function ActivitiesBoard({ selectedDay, activities }) {
  if(selectedDay===null) return null;
  const mappedEventDays = activities?.map(a => a.date);
  const mappedEventLocations = activities?.map(a => a.auditorium);
  const eventDays = mappedEventDays?.filter((day, i) => mappedEventDays.indexOf(day) === i);
  const eventLocations = mappedEventLocations?.filter((location, i) => mappedEventLocations.indexOf(location) === i);
  const orderedLocations = eventLocations.sort((a, b) => a.localeCompare(b));
  const [selectedDayActivities, setSelectedDayActivities] = useState({});
  useEffect(() => {
    const filteredActivities = {};
    activities.forEach(a => {
      if(filteredActivities[a.auditorium] === undefined) filteredActivities[a.auditorium] = [];
      if(eventDays[selectedDay] === a.date) filteredActivities[a.auditorium].push(a);
    });
    setSelectedDayActivities(filteredActivities);
  }, [selectedDay, activities]);

  return (
    <>
      <Locations>{orderedLocations.map(location => <span key={location + "title"}>{location}</span>)}</Locations>
      <Board collumns={orderedLocations.length}>
        {orderedLocations.map(location => {
          return <Collumn key={location + "collumn"}>
            {selectedDayActivities[location]?.map(activity => {
              return <ActivityCard key={activity.id} activityData={activity} />;
            })}
          </Collumn>;
        })}
      </Board>
    </>
  );
}

const Locations = styled.div`
  font-size: 17px;
  line-height: 50px;
  text-align: center;
  color: #7B7B7B;
  display: flex;
  justify-content: space-around;
`;
const Board = styled.div`
  border: 1px solid #D7D7D7;
  border-right: none;
  display: flex;
  height: 392px;
  & > *{
    width: calc( 100% / ${props => props.collumns});
    overflow-y: scroll;
  }
`;
const Collumn = styled.div`
  border-right: 1px solid #D7D7D7;

`;
