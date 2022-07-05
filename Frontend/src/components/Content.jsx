import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ExpensesForm from "./ExpensesForm";
import IncomesForm from "./IncomesForm";
import Main from "./Main";





const Content = () => {
    return (
    <Box flex={4} padding={5}>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/IncomesForm" element={<IncomesForm />} />
        <Route path="/ExpensesForm" element={<ExpensesForm />} />
      </Routes>
    </Box> 
    
    
    );
}

export default Content;

