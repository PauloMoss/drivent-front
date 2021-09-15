import styled from "styled-components";

export default function ActivityCard({ activity }) {
  const { startTime, endTime, name, vacancies } = activity;
  const halfHours = halfHourCount(startTime, endTime);

  function halfHourCount(start, end) {
    const before = parseInt(start.replace(":", ""));
    const after = parseInt(end.replace(":", ""));
    return (after - before) / 50;
  }
  return (
    <Card halfHours={halfHours}>
      <Information>
        <strong>{name}</strong>
        <p>{startTime} - {endTime}</p>
      </Information>
      <AttendButton available={vacancies>0}>
        {vacancies>0?
          <>
            <p>vagas:</p> 
            <p>{vacancies}</p>
          </>
          :
          <p>Esgotado</p>}
      </AttendButton>
    </Card>
  );
}

const Card = styled.div`
  background: #F1F1F1;
  border-radius: 5px;
  margin: 10px 15px;
  height: calc( ${props => props.halfHours} * 40px);
  box-sizing: border-box;
  display: flex;
  font-size: 12px;
  line-height: 14px;
`;

const Information = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px 15px;
  p{
    margin: 6px 0px;
  }
`;

const AttendButton = styled.div`
  width: 66px;
  border-left: 1px solid #CFCFCF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: ${props => props.available?"pointer":"disabled"};
  color: ${props => props.available?"#078632":"#CC6666"};
`;
