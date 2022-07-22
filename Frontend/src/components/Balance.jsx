import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';
import { numberWithCommas } from "../utils/format";

const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const plus = transactions.filter(transaction => transaction.type === 1);
  const minus = transactions.filter(transaction => transaction.type === 2);
  
  const incomes = plus.map(item => Number(item.money)).reduce((acc, item) => (acc += item), 0);
  const expenses = minus.map(item => Number(item.money)).reduce((acc, item) => (acc += item), 0);

    return (
    <Box   flex={1} paddingTop={2} margin='auto' sx={{
        width: 300,
        height: 50
      }}>
         <Typography variant="h5" textAlign="center">
               Balance
            </Typography>
            <Typography variant="h4" textAlign="center">
                ${numberWithCommas(incomes - expenses)}
            </Typography>

    </Box> );
}

export default Balance;