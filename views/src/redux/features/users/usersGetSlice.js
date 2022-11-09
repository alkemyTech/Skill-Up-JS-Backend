import { getUsersFailed, getUsersSuccess, getUsersStart, getById, addUsers, deleteUsers, } from "./usersSlice";
import { instance } from "../../instance";
import axios from 'axios';



export const getUsers = () => {
    return async (dispatch) => {
        dispatch(getUsersStart);
        try {
            const options = {
                Headers: {
                    accept: "/", //acá le digo que acepte todas las solicitudes
                    "Content-Type": "application/json", //que acepte json
                },
            };
            const res = await instance.get('/user', options)
            dispatch(getUsersSuccess(res.data));
            localStorage.setItem("access_token")
        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};

export const getUserById = (id) => {
    return async (dispatch) => {
        dispatch(getUsersStart);
        try {
            const res = await instance.get(`/user/${id}`)
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

export const updateUser = (value) => {

    return async (dispatch) => {
        dispatch(getUsersStart);
        try {
            const res = await instance.put('http://localhost:3001/user', { value })
            //  dispatch(addUsers(res.data)); assuming that getUsers() makes a query on the db, should return the modified user
            dispatch(getUsers());
        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};

export const deleteByUsers = (id) => {
    return async (dispatch) => {
        dispatch(getUsersStart)
        try {
            const res = await instance.delete(`/user/${id}`)
            dispatch(deleteUsers(res.data));
            dispatch(getUsers());
        } catch (err) {
            dispatch(getUsersFailed(err));
        };
    };

};






