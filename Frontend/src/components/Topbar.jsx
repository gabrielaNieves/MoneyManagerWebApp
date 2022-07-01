import React from "react";
import {AppBar, styled, Toolbar, Typography} from '@mui/material';
import { Savings } from "@mui/icons-material";


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between"

});
const Topbar = () => {
    return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{display: {xs:"none", sm:"block"}}}>
                MONEY MANAGER
            </Typography>
            <Savings sx={{display: {xs:"block", sm:"none"}}}/>
        </StyledToolbar>
           
    </AppBar> );
}

export default Topbar;