import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export default function SectionTitle({ children }) {
  return <Title variant="h6">{children}</Title>;
}

const Title = styled(Typography)`
  margin-bottom: 17px !important;
  color: #8e8e8e;
  margin-top: 37px !important;
`;
