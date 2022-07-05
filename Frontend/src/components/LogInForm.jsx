import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";

const LogInForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/user/login',
        {
            email: e.target[0].value,
            password: e.target[1].value 
        })
        .then((res) => {
            if(res.data === "Authed"){
                axios.get('http://localhost:3001/api/user/auth')
                .then((res)=> console.log(res))
            }

        })
        
    }

    return (
        <form onSubmit={handleOnSubmit} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                <InputLabel htmlFor="email">Email</InputLabel>
                <FilledInput
                    id="email"
                    type="text"
                    value={values.email}
                    onChange={handleChange('email')}
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                <InputLabel htmlFor="password">Password</InputLabel>
                <FilledInput
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

            <Button variant="contained" type="submit" >
                Log In
            </Button>
        </form>
    )


}

export default LogInForm;