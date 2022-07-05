import { Box } from "@mui/system";
import React from "react";
import Balance from "./Balance";
import IncomesExpenses from "./IncomesExpenses";
import TransactionList from "./TransactionList";



const Main = () => {
    return (
    <Box flex={1}>
        <Balance/>
        <IncomesExpenses/>
        <TransactionList/>
    </Box> );
}

export default Main;