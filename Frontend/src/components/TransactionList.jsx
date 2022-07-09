import { Box } from "@mui/system";
import { List } from "@mui/material";
import React, {useContext, useEffect} from "react";
import {GlobalContext} from '../context/GlobalState';
import Transaction from "./Transaction";

const TransactionList = () => {
  const {transactions, getTransactions} = useContext(GlobalContext);

  useEffect(()=>{
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


    return (
    <Box  flex={1} margin={6} padding={0} maxWidth={700}>
        <List>
              {transactions.map (transaction => (
                <Transaction key={transaction.id} transaction = {transaction}/>
              ))}
            </List>
    </Box> );
}

export default TransactionList;