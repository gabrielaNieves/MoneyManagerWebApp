import React from "react";
import {AppBar, styled, Toolbar, Typography} from '@mui/material';
import { Savings, Menu} from "@mui/icons-material";


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
            <div>
            <Menu sx={{display: {xs:"inline-flex", sm:"none"}}}/>
            <Savings sx={{ marginLeft: 2, display: {xs:"inline-flex", sm:"none"}}}/>
            </div>

        </StyledToolbar>
           
    </AppBar> );
}

export default Topbar;