import { ArrowCircleDown, ArrowCircleUp, Home } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Sidebar = () => {
    return (
    <Box  flex={1} padding={5} sx={{display: {xs:"none", sm:"block"}}}>
          <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArrowCircleUp/>
              </ListItemIcon>
              <ListItemText primary="Incomes" />
            </ListItemButton>
          </ListItem> 
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArrowCircleDown/>
              </ListItemIcon>
              <ListItemText primary="Expenses" />
            </ListItemButton>
          </ListItem>  
          </List>

    </Box> );
}

export default Sidebar; 