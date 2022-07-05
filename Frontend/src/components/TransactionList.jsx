import { Box } from "@mui/system";
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { Delete, Folder, ModeEditRounded } from "@mui/icons-material";

const TransactionList = () => {
    return (
    <Box  flex={1} margin={6} padding={0} maxWidth={700}>
        <List>
                <ListItem
                  secondaryAction={
                    <>
                    <IconButton edge="start" aria-label="edit">
                      <ModeEditRounded/>
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <Delete/>
                    </IconButton>
                    </>
                  }
                  sx={{ boxShadow: 1, padding: 2, borderRadius: 1 }}>
                  <ListItemAvatar>
                    <Avatar>
                      <Folder />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dinner"
                    secondary="$300"
                  />
                </ListItem>

            </List>
    </Box> );
}

export default TransactionList;