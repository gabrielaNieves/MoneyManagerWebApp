import { Box } from "@mui/system";
import { List, Typography } from "@mui/material";
import React, {useContext, useEffect} from "react";
import {GlobalContext} from '../context/GlobalState';
import Transaction from "./Transaction";

const TransactionList = () => {
  const {transactions, getTransactions} = useContext(GlobalContext);

  useEffect(()=>{
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


    return (
    <Box  flex={1} mx='auto' maxWidth={650}>
      <Typography my={1} variant='overline'> Latest Transactions</Typography>
        <List>
              {transactions.map (transaction => (
                <Transaction key={transaction.id} transaction = {transaction}/>
              ))}
            </List>
    </Box> );
}

export default TransactionList;