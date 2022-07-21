import { FilledInput, FormControl, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, {useContext} from "react";
import { useEffect } from "react";
import {GlobalContext} from '../context/GlobalState';


const EditForm = (props) => {
    const {categories, getCategories } = useContext(GlobalContext);

    useEffect(() => {
        getCategories(props.values.type);
    },[]);
    


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
                        value={props.values.category_id}
                        onChange={props.change('category')}
                    >
                        {categories.map(category =>
                        (
                        <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
        </Box>);
}

export default EditForm;