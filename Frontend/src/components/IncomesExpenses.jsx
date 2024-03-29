import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import { ListItemIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';
import { numberWithCommas } from "../utils/format";


const IncomesExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const plus = transactions.filter(transaction => transaction.type === 1);
    const minus = transactions.filter(transaction => transaction.type === 2);
  

    const incomes = plus.map(item => Number(item.money)).reduce((acc, item) => (acc += item),0);
    const expenses = minus.map(item => Number(item.money)).reduce((acc, item) => (acc += item),0);

    
  

    return (
    <Box   flex={1} padding={3} mx='auto' mb={8} mt={3} sx={{
        display: "flex",
        justifyContent: {xs:'space-around', sm: 'space-between'} ,
        width: 300,
        height: 50,

      }}>
        <Box>
            <ListItemIcon >
                <ArrowCircleUp/>
              </ListItemIcon>
            <Typography variant="h6" textAlign="center">
               Incomes
            </Typography>
            <Typography variant="h5" textAlign="center" color='limegreen'>
                ${numberWithCommas(incomes)}
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
                ${numberWithCommas(expenses)}
            </Typography>
        </Box>

    </Box> );
}

export default IncomesExpenses;