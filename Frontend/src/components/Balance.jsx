import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';

const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const plus = transactions.filter(transaction => transaction.type === 1);
  const minus = transactions.filter(transaction => transaction.type === 2);
  
  const incomes = plus.map(item => Number(item.money)).reduce((acc, item) => (acc += item), 0);
  const expenses = minus.map(item => Number(item.money)).reduce((acc, item) => (acc += item), 0);

    return (
    <Box   flex={1} padding={3} margin='auto' sx={{
        width: 300,
        height: 50,
        '&:hover': {
          backgroundColor: 'gray',
          opacity: [1, 0.6, 0.8],
        },
      }}>
         <Typography variant="h5" textAlign="center">
               Balance
            </Typography>
            <Typography variant="h4" textAlign="center">
                ${incomes - expenses}
            </Typography>

    </Box> );
}

export default Balance;