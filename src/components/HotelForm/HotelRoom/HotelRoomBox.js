import styled from "styled-components";
import { IoPersonOutline, IoPersonSharp } from "react-icons/io5";

export default function HotelRoomBox({ room }) {
  const { number, isAvailable, vacancy } = room;
  return(
    <Container isAvailable={isAvailable}>
      <RoomNumber>{number}</RoomNumber>
      <RoomVacancy>
        {
          vacancy.map(v => {
            return(
              v.isFilled 
                ? <IoPersonSharp key={v.id}/>
                : <IoPersonOutline key={v.id}/>
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
  background-color: ${props => props.isAvailable ? "transparent" : "#E9E9E9"};
    div {
      color: ${props => props.isAvailable ? "#454545" : "#9D9D9D"};
      svg {
        color: ${props => props.isAvailable ? "#000000" : "#8C8C8C"};
      }
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
