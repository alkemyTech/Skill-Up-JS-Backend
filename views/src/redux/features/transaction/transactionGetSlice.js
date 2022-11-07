import { getTransactionsFailed, getTransactionsStart, getTransactionsSuccess, transactionId, addTransaction, updateTransaction  } from './transactionSlice';
import axios from 'axios';


export const getTransactions = () => {
    return async(dispatch) => {
        dispatch(getTransactionsStart());
        try {
            const res = await axios.get('http://localhost:3001/transaction');
            dispatch(getTransactionsSuccess(res.data));
        } catch (err) {
            dispatch(getTransactionsFailed(err))
        };

    };
};


export const getTransactionsById = (id) => {
    return async(dispatch) => {
        dispatch(getTransactionsStart());
    try {
        const res = await axios.get(`http://localhost:3001/transaction/${id}`);
        dispatch(transactionId(res.data));
    } catch (err) {
        dispatch(getTransactionsFailed(err))
    };
    };
};

export const createTransactions = (value) => {
    return async(dispatch) => {
        dispatch(getTransactionsStart());
        try {
            const res = await axios.post('http://localhost:3001/transaction', value);
            dispatch(getTransactions());
        } catch (err) {
            dispatch(getTransactionsFailed(err))
        };
    };
};

export const getUpdateTransactions = (id) => {
    return async(dispatch) => {
        dispatch(getTransactionsStart());
        try {
            const res = await axios.put(`http://localhost:3000/transaction/${id}`)
            dispatch(addTransaction(res.data));
            dispatch(getTransactions());
        } catch (err) {
            dispatch(getTransactionsFailed(err));
        };
    };
};