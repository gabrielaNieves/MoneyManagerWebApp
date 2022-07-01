import { Box } from "@mui/system";
import React from "react";
import Balance from "./Balance";
import IncomesExpenses from "./IncomesExpenses";
import TransactionList from "./TransactionList";



const Main = () => {
    return (
    <Box flex={4} padding={5}>
        <Balance/>
        <IncomesExpenses/>
        <TransactionList/>
    </Box> );
}

export default Main;