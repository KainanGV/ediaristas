import { experimentalStyled as styled } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";

export const FooterStyled = styled('footer')`
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.getContrastText(theme.palette.primary.main)};
    padding: ${({theme}) => theme.spacing(4)} 0;
`;

export const FooterContainer = styled(Container)``;

export const FooterTitle = styled()