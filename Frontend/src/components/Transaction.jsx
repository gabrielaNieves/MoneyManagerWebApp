import React from 'react';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Delete, Folder, ModeEditRounded } from '@mui/icons-material';

const Transaction = ({transaction}) => {
    let sign = transaction.type === 1 ? '+': '-';
    return (
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
                <div display="flex">
                <ListItemText>{transaction.title}</ListItemText>
                <ListItemText>{sign} ${transaction.money}</ListItemText>
                </div>
            </ListItem>
      );
}
 
export default Transaction;