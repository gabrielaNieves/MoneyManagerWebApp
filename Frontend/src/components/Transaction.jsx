import React, {useContext, useState} from 'react';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import { Delete, Edit, Folder, ModeEditRounded } from '@mui/icons-material';
import {GlobalContext} from '../context/GlobalState';
import EditForm from './EditForm';

const Transaction = ({transaction}) => {
  const {deleteTransaction, editTransaction} = useContext(GlobalContext);

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    ...transaction
});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
};
const handleSubmit = () => {
  editTransaction(transaction.id, values);
  setOpen(false);
};




    let sign = transaction.type === 1 ? '+': '-';
    return (
      <>
      
        <ListItem
                secondaryAction={
                  <>
                  <IconButton edge="start" aria-label="edit">
                    <ModeEditRounded onClick={handleClickOpen}/>
                  </IconButton>
                  <IconButton onClick={() => deleteTransaction(transaction.id)} edge="end" aria-label="delete">
                    <Delete/>
                  </IconButton>
                  </>
                }
                sx={{ boxShadow: 1, padding: 2, borderRadius: 1.5, zIndex: 2, mb: 1}}>
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



      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Transaction</DialogTitle>
        <DialogContent>
          <EditForm  values={values} change={handleChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Edit</Button>
        </DialogActions>
      </Dialog>
    </>
      );
}
 
export default Transaction;