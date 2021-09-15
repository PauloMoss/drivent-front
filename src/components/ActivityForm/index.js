import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";

import { DashWarning } from "../Dashboard/DashWarning";
import Dates from "./ActivitiesOptions/Dates";

export default function ActivityForm() {
  const { booking } = useApi();
  const { activitie } = useApi();
  const [activities, setActitivites] = useState();
  const [isPaid, setIsPaid] = useState(false);
  const [isOnline, setIsOnline] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  
  useEffect(() => {
    booking.getBookingInfo()
      .then(response => {
        if(response.status === 200) {
          const bookDetails = response.data;
          setIsOnline(bookDetails.isOnline);
          setIsPaid(bookDetails.isPaid);
        };
      })
      .catch(() => {
        toast("Não foi possível encontrar sua reserva");
      });

    activitie.getActivities()
      .then(response => {
        if(response.status === 200) {
          setActitivites(response.data);
        };
      })
      .catch(() => {
        toast("Não foi possível encontrar as atividades");
      });
  }, []);

  return (
    <>
      <StyledTypography variant="h4" color="initial">Escolha de atividades</StyledTypography>
      {
        isPaid
          ? isOnline
            ? <DashWarning variant="h6">
              Sua modalidade de ingresso não necessita escolher <br/> atividade. Você terá acesso a todas as atividades.
            </DashWarning>
            : <Dates selectedDay={selectedDay} setSelectedDay={setSelectedDay} activities={activities} />
          : <DashWarning variant="h6">
              Você precisa ter confirmado pagamento antes <br/> de fazer a escolha de atividades
          </DashWarning>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
