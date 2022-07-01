import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Balance = () => {
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
                $100.00
            </Typography>

    </Box> );
}

export default Balance;