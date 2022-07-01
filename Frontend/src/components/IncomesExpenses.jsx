import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import { ListItemIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const IncomesExpenses = () => {
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
                $300.00
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
                $200.00
            </Typography>
        </Box>

    </Box> );
}

export default IncomesExpenses;