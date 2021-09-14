import styled from "styled-components";
import { IoPersonOutline, IoPersonSharp } from "react-icons/io5";

export default function HotelRoomBox({ room, setSelectedRoom, selectedRoom }) {
  const { id, number, isAvailable, vacancies } = room;

  return(
    <Container isAvailable={isAvailable} isSelected={selectedRoom?.roomId === id}>
      <RoomNumber>{number}</RoomNumber>
      <RoomVacancy>
        {
          vacancies?.map(v => {
            return(
              v.isFilled 
                ? <Filled 
                  key={v.id} 
                  isAvailable={isAvailable}
                />
                : selectedRoom?.vacancyId === v.id 
                  ? <Selected 
                    key={v.id} 
                    onClick={() => setSelectedRoom(null)}
                  /> 
                  : <Unfilled 
                    key={v.id} 
                    isAvailable={isAvailable} 
                    onClick={() => setSelectedRoom({ roomId: room.id, vacancyId: v.id })}
                  />
            );
          })
        }
      </RoomVacancy>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 45px;
  border: 1px solid #CECECE;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 16px;
  margin-top: 10px;
  margin-bottom: 45px;

  background-color: ${props => (
    props.isAvailable ? 
      props.isSelected ?
        "#FFEED2"
        : "transparent"
      : "#E9E9E9"
  )};
  
    div {
      color: ${props => props.isAvailable ? "#454545" : "#9D9D9D"};
    }
`;

const RoomNumber = styled.div`
  width: 35px;
  height: 23px;
  font-size: 17px;
`;

const RoomVacancy = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    font-size: 20px;
    margin: 2px;
  }
`;

const Filled = styled(IoPersonSharp)`
  color: ${props => props.isAvailable ? "#000000" : "#8C8C8C"};
`;

const Unfilled = styled(IoPersonOutline)`
  color: ${props => (
    props.isAvailable ? 
      "#000000" 
      :"#8C8C8C"
  )};
  cursor: pointer;
`;

const Selected = styled(IoPersonSharp)`
  color: #FF4791;
  cursor: pointer;
`;

