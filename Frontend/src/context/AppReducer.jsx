export default (state, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'ADD_TRANSACTION': 
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
            case 'EDIT_TRANSACTION': 
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
            
        case 'TRANSACTIONS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'GET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        default: 
        return state; 
    }
}
