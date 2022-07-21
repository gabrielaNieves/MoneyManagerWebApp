import { AddCircleOutlineSharp, Home, Logout } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import {Link } from "react-router-dom";
import React from "react";



const Sidebar = () => {
  
  return (
    <Box  flex={1} padding={4} sx={{ position: {xs: 'relative', sm: 'static'}, marginTop:{xs: 3}, padding: { xs: 0, sm: 3 }, maxWidth: {xs: 20, sm: 250} }}>
      <List>
        <ListItem disablePadding >
          <Link style={{textDecoration: 'none', color: 'black'}} to="/">
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: "none", sm: "block" } }} primary="Home"/>
          </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link style={{textDecoration: 'none', color: 'black'}} to="/IncomesForm">
          <ListItemButton>
            <ListItemIcon>
              <AddCircleOutlineSharp/>
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: "none", sm: "block" } }} primary="add Transaction"/>
          </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link style={{textDecoration: 'none', color: 'black'}} to="/">
          <ListItemButton>
            <ListItemIcon>
              <Logout/>
            </ListItemIcon>
            <ListItemText sx={{ display: { xs: "none", sm: "block" } }} primary="Logout" />
          </ListItemButton>
          </Link>
        </ListItem>
      </List>

    </Box>);
}

export default Sidebar; 