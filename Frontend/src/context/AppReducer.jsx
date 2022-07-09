export default (state, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }   
        case 'TRANSACTIONS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default: 
        return state; 
    }
}
