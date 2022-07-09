import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import { ListItemIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';


const IncomesExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const plus = transactions.filter(transaction => transaction.type === 1);
    const minus = transactions.filter(transaction => transaction.type === 2);
  

    const incomes = plus.map(item => Number(item.money)).reduce((acc, item) => (acc += item),0);
    const expenses = minus.map(item => Number(item.money)).reduce((acc, item) => (acc += item),0);

    
  

    return (
    <Box   flex={1} padding={3} margin='auto' sx={{
        display: "flex",
        justifyContent: 'space-between',
        width: 300,
        height: 50,
        '&:hover': {
          backgroundColor: 'gray',
          opacity: [1, 0.6, 0.8],
        },
      }}>
        <Box>
            <ListItemIcon >
                <ArrowCircleUp/>
              </ListItemIcon>
            <Typography variant="h6" textAlign="center">
               Incomes
            </Typography>
            <Typography variant="h5" textAlign="center" color='lightgreen'>
                ${incomes}
            </Typography>
        </Box>
        <Box>
        <ListItemIcon>
                <ArrowCircleDown/>
        </ListItemIcon>
            <Typography variant="h6" textAlign="center">
               Expenses
            </Typography>
            <Typography variant="h5" textAlign="center" color='red'>
                ${expenses}
            </Typography>
        </Box>

    </Box> );
}

export default IncomesExpenses;