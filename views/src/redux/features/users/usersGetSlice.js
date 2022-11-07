import { getUsersFailed, getUsersSuccess, getUsersStart, getById, addUsers, deleteUsers, } from "./usersSlice";
import axios from 'axios';

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(getUsersStart);
        try {
            const res = await axios.get('http://localhost:3001/user')
            dispatch(getUsersSuccess(res.data));
        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};

export const getUserById = (id) => {
    return async (dispatch) => {
        dispatch(getUsersStart);
        try {
            const res = await axios.get(`http://localhost:3001/user/${id}`)
            dispatch(getById(res.data));
        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};

export const createUser = (value) => {
    return async (dispatch) => {
        dispatch(getUsersStart);
        try {
            const res = await axios.post('http://localhost:3001/user', value)
            dispatch(addUsers(res.data));
            dispatch(getUsers());
        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};

export const deleteByUsers = () => {
    return async (dispatch) => {
        dispatch(getUsersStart)
        try {
            const res = await axios.delete('http://localhost:3001/user')
            dispatch(deleteUsers(res.data));
            dispatch(getUsers());
        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};






