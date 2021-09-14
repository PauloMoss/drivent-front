import MuiButton from "@material-ui/core/Button";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  disableUppercase: {
    textTransform: "none",
  }
});

export default function Button({ variant="contained", children, ...props }) {
  const classes = useStyles();
  
  return (
    <StyledMuiButton variant={variant} {...props} className={ classes.disableUppercase }>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 8px !important;
`;
