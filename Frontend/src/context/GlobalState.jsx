import React,  {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

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
        }
    ]
};

//create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return <GlobalContext.Provider value= {{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>
}

