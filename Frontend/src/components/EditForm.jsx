import { FilledInput, FormControl, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";



const EditForm = (props) => {
console.log(props)
    return (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <FilledInput
                        id="Title"
                        type="text"
                        value={props.values.title}
                        onChange={props.change('title')}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="money">Amount</InputLabel>
                    <FilledInput
                        id="money"
                        type="number"
                        value={props.values.money}
                        onChange={props.change('money')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="date">Date</InputLabel>
                    <FilledInput
                        id="date"
                        type="date"
                        value={props.values.date}
                        onChange={props.change('date')}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" disabled>
                    <InputLabel htmlFor="type">Type</InputLabel>
                    <Select
                        id="type"
                        value={props.values.type}
                    >
                        <MenuItem value={1}>Incomes</MenuItem>
                        <MenuItem value={2}>Expenses</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="category"> Category</InputLabel>
                    <Select
                        id="category"
                        value={props.values.category}
                        onChange={props.change('category')}
                    >
                        <MenuItem value={1}>other</MenuItem>
                        <MenuItem value={2}>Salary</MenuItem>
                        <MenuItem value={3}>Food</MenuItem>
                    </Select>
                </FormControl>
        </Box>);
}

export default EditForm;