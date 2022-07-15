import React,  {createContext, useReducer} from "react";
import AppReducer from './AppReducer';
import axios from 'axios'

const initialState = {
    transactions : [],
    error: null,
    loading: true,
    category: []
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

    async function addTransaction(transaction) {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    
        try {
          const res = await axios.post('http://localhost:3001/api/transaction/add', transaction, config);
    
          dispatch({
            type: 'ADD_TRANSACTION',
            payload: res.data.data
          });
        } catch (err) {
          dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
          });
        }
      }

      async function editTransaction(id, transaction) {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        console.log(id, transaction)
    
        try {
          await axios.put(`http://localhost:3001/api/transaction/${id}/edit`, transaction, config);
    
          dispatch({
            type: 'EDIT_TRANSACTION',
            payload: getTransactions()
          });
        } catch (err) {
          dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
          });
        }
      }

    async function deleteTransaction(id){
        try {
            await axios.delete(`http://localhost:3001/api/transaction/delete/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: err.response.data.error
            });
        }
    }

    //category actions
    async function getCategories(id){
      try {
          const res = await axios.get(`http://localhost:3001/api/category/${id}`)
          dispatch({
              type: 'GET_CATEGORY',
              payload: res.data.data,
          });
      } catch (err) {
          dispatch({
              type: 'CATEGORY_ERROR',
              payload: err.response.data.error
          });
      }
  }



    return <GlobalContext.Provider value= {{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        categories: state.category,
        getTransactions,
        addTransaction,
        editTransaction,
        deleteTransaction,
        getCategories


    }}>
        {children}
    </GlobalContext.Provider>
}

