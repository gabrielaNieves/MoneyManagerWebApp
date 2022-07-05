import { Button, FilledInput, FormControl, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect } from 'react';




const IncomesForm = () => {
    const [values, setValues] = useState({
        title: '',
        money: 0,
        date: new Date(),
        type: 1,
        category: 1

    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/transaction/add',
            {
                title: values.title,
                money: values.money,
                date: values.date,
                type: values.type,
                category: values.category
            })
            .then((res) => console.log(res))
    }


    return (
        <Box flex={1} padding={5} margin='auto'>
            <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <FilledInput
                        id="Title"
                        type="text"
                        value={values.title}
                        onChange={handleChange('title')}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="money">Amount</InputLabel>
                    <FilledInput
                        id="money"
                        type="number"
                        value={values.money}
                        onChange={handleChange('money')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="date">Date</InputLabel>
                    <FilledInput
                        id="date"
                        type="date"
                        value={values.date}
                        onChange={handleChange('date')}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="type">Type</InputLabel>
                    <Select
                        id="type"
                        value={values.type}
                        onChange={handleChange('type')}
                    >
                        <MenuItem value={1}>Incomes</MenuItem>
                        <MenuItem value={2}>Expenses</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="category"> Category</InputLabel>
                    <Select
                        id="category"
                        value={values.category}
                        onChange={handleChange('category')}
                    >
                        <MenuItem value={1}>other</MenuItem>
                        <MenuItem value={2}>Salary</MenuItem>
                        <MenuItem value={3}>Food</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" type="submit" >
                    Submit
                </Button>

            </form>
        </Box>);
}

export default IncomesForm;