import React,  {createContext, useReducer} from "react";
import AppReducer from './AppReducer';
import axios from 'axios'

const initialState = {
    transactions : [
        {
            id: 1 ,
            title: "Pago alquiler",
            money: "60000.00",
            date: "2022-06-24",
            type: 2,
            account_id: 1,
            category_id: 1
        },
        {
            id: 2,
            title: "pago",
            money: "20000.00",
            date: "2022-06-27",
            type: 2,
            account_id: 1,
            category_id: 1
        },
        {
            id: 3,
            title: "Salario",
            money: "200000.00",
            date: "2022-06-27",
            type: 1,
            account_id: 1,
            category_id: 1
        }
        
    ],
    error: null,
    loading: true
};

//create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    async function getTransactions(){
        try {
            const res = await axios.get('http://localhost:3001/api/transaction')
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: err.response.data.error
            });
        }
    }



    return <GlobalContext.Provider value= {{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
    }}>
        {children}
    </GlobalContext.Provider>
}

