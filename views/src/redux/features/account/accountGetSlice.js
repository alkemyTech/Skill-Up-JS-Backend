import { updateAccount, addAccount, accountId } from './accountSlice';
import axios from 'axios';
import { getUserById, getUsers } from '../users/usersGetSlice';


export const getUpdateAccount = (id) => {
    return async (dispatch) => {      
        try {
          const res = await axios.put(`http://localhost:3000/account/${id}`);
          if(res){
              dispatch(updateAccount(res.data));  
              dispatch(getUserById())
          }
        } catch (err) {
            console.log(err)
        };
    };
};

export const createAccount = (value) => {
    return async (dispatch) => {      
        try {
          const res = await axios.post('http://localhost:3000/account', value);
          dispatch(addAccount(res.data));
          dispatch(getUsers());
        } catch (err) {
            console.log(err)
        };
    };
};


export const getAccountById = (id) => {
    return async (dispatch) => {      
        try {
          const res = await axios.put(`http://localhost:3000/account/${id}`);
              dispatch(accountId(res.data));  
        } catch (err) {
            console.log(err)
        };
    };
};
