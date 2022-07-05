import { ArrowCircleDown, ArrowCircleUp, Home } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import {Link } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  return (
    <Box flex={1} padding={5} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding>
          <Link to="/">
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/IncomesForm">
          <ListItemButton>
            <ListItemIcon>
              <ArrowCircleUp />
            </ListItemIcon>
            <ListItemText primary="Incomes" />
          </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/ExpensesForm">
          <ListItemButton>
            <ListItemIcon>
              <ArrowCircleDown />
            </ListItemIcon>
            <ListItemText primary="Expenses" />
          </ListItemButton>
          </Link>
        </ListItem>
      </List>

    </Box>);
}

export default Sidebar; 