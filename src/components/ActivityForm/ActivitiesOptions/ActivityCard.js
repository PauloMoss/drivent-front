import styled from "styled-components";
import { IoMdExit } from "react-icons/io";
import { CgCloseO } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import { ButtonBase } from "@material-ui/core";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ActivityCard({ activity }) {
  const { startTime, endTime, name, vacancies } = activity;
  const halfHours = halfHourCount(startTime, endTime);
  const [inMyActivities, setInMyActivities ] = useState(false);

  function halfHourCount(start, end) {
    const before = parseInt(start.replace(":", ""));
    const after = parseInt(end.replace(":", ""));
    return (after - before) / 50;
  }

  function handleClick() {
    if(inMyActivities) {
      //remove from activities
      toast("Atividade removida.");
      setInMyActivities(false);
    }else{
      if(vacancies>0) {
        //add to activities
        toast("Atividade adicionada!✅");
        setInMyActivities(true);
      } else{
        toast("Atividade lotada!");
      }
    }
  }
  return (
    <Card halfHours={halfHours} className={inMyActivities?"enrolled":""}>
      <Information>
        <strong>{name}</strong>
        <p>{startTime} - {endTime}</p>
      </Information>
      <Line/>
      <AttendButton  className={vacancies>0 || inMyActivities?"available":"unavailable"} onClick={handleClick}>
        {inMyActivities?
          <>
            <FaRegCheckCircle/>
            <p>Inscrito</p>
          </>
          :vacancies>0?
            <>
              <IoMdExit/>
              <p>{vacancies} vagas</p>
            </>
            :<>
              <CgCloseO/>
              <p>Esgotado</p>
            </>}
      </AttendButton>
    </Card>
  );
}

const Card = styled.div`
  background: #F1F1F1;
  border-radius: 5px;
  margin: 10px 15px;
  height: calc( ${props => props.halfHours} * 40px - ${props => props.halfHours>2?"0px":"5px"});
  box-sizing: border-box;
  display: flex;
  font-size: 12px;
  line-height: 14px;
  position: relative;
  &.enrolled{
    color: #078632;
    background-color: #d0ffdb;
  }
`;

const Information = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px 15px;
  p{
    margin: 6px 0px;
  }
`;
const Line = styled.div`
  height: calc( 100% - 20px);
  position: relative;
  top: 10px;
  width: 1px;
  flex-shrink: 0;
  background-color: #CFCFCF;
  .enrolled > & {
    background-color: #99E8A1;
  }
`;

const AttendButton = styled(ButtonBase)`
&&{width: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.available{
    cursor: pointer;
    color: #078632;
  }
  &.unavailable{
    cursor: not-allowed;
    color: #CC6666;
  }
  font-size: 9px;
  line-height: 11px;
  svg {
    font-size: 20px;
  }}
`;
