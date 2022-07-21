import { ErrorSharp } from "@mui/icons-material";
import { Button, FilledInput, FormControl, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import TransactionList from "./TransactionList";




const IncomesForm = () => {
    const {addTransaction, categories, getCategories } = useContext(GlobalContext);

    const [values, setValues] = useState({
        title: '',
        money: 0,
        date: new Date(),
        category: ''

    });
    const [type, setType] = useState(0)
    const [errors, setErrors] = useState({})

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
 
    };

    const validate = () =>{
        let temp = {}
        temp.title = values.title ? "": "This field is required";
        temp.money = values.money > 0 ? "": "Amount field must be up to 0";
        temp.category = values.category? "": "This field is required";
        temp.type = type === 1 || type === 2? "": "Transaction type is required";
        setErrors({
            ...temp
        })

        return  Object.values(temp).every(x => x == "")
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(validate()){
            addTransaction(
                {
                    title: values.title,
                    money: values.money,
                    date: values.date,
                    type: type,
                    category: values.category
                }); 
            setValues(
                {
                    title: '',
                    money: 0,
                    date: new Date(),
                    category: ''
            
                }
            )
        }
    }

    const handleType = (event) => {
            setType(event.target.value)
            getCategories(event.target.value)

        }
        
    


    return (
        <>
       
        <Box flex={1} padding={5} margin='auto'>
            <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                <FormControl sx={{ m: 1, width: '25ch' }} error={errors.title? true: false} variant="filled">
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <FilledInput
                        id="Title"
                        type="text"
                        value={values.title}
                        onChange={handleChange('title')}
                    />
                    <formHelperText>{errors.title}</formHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} error={errors.money? true: false} variant="filled">
                    <InputLabel htmlFor="money">Amount</InputLabel>
                    <FilledInput
                        id="money"
                        type="number"
                        value={values.money}
                        onChange={handleChange('money')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                    <formHelperText>{errors.money}</formHelperText>
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
                <FormControl sx={{ m: 1, width: '25ch' }} error={errors.type? true: false} variant="filled">
                    <InputLabel htmlFor="type">Type</InputLabel>
                    <Select
                        id="type"
                        value={type}
                        onChange={handleType}
                    >
                        <MenuItem value={0}>Transaction</MenuItem>
                        <MenuItem value={1}>Incomes</MenuItem>
                        <MenuItem value={2}>Expenses</MenuItem>
                    </Select>
                    <formHelperText>{errors.type}</formHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} error={errors.category? true: false} variant="filled">
                    <InputLabel htmlFor="category"> Category</InputLabel>
                    <Select
                        id="category"
                        value={values.category}
                        onChange={handleChange('category')}
                    >
                    {categories.map(category =>
                        (
                        <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                        ))}
                    </Select>
                    <formHelperText>{errors.category}</formHelperText>
                </FormControl>
                <Button sx={{mt: 3}} variant="contained" type="submit" >
                    Submit
                </Button>

            </form>
        </Box>
        
        <TransactionList/>
        </>
        
        );
}

export default IncomesForm;