import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

export const OptionBox = styled.div`
  width: 145px;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${props => props.active ? "none" : "1px solid #CECECE"};
  border-radius: 20px;
  margin-right: 24px;
  cursor: pointer;
  background-color: ${props => props.active ? "#FFEED2" : "transparent"};
`;

export const Description = styled.span`
  font-size: 16px;
  color: #454545;
  margin-bottom: 5px;
`;

export const Price = styled.div`
  font-size: 14px;
  color: #898989;
`;

export const StyledTypography = styled(Typography)`
margin-bottom: 17px!important;
color: #8E8E8E;
margin-top: 37px!important;
`;
