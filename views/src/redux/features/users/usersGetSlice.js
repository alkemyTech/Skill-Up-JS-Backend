import { getUsersFailed, getUsersSuccess, getUsersStart, getById, addUsers, deleteUsers, } from "./usersSlice";
import { instance } from "../../instance";
import axios from 'axios';



export const getUsers = () => {
    return async (dispatch) => {
        dispatch(getUsersStart);
        try {
            const res = await instance.get('/user')
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
            let newValue = { ...value };
            if (typeof (value.image) !== "string") {
                console.log("entre")
                let uploadedImage = await axios.post("https://api.cloudinary.com/v1_1/leo-echenique/image/upload", value.image);
                newValue = {
                    ...value,
                    image: uploadedImage.data.url
                }
                await instance.put('http://localhost:3001/user', { newValue })
            }
            else await instance.put('http://localhost:3001/user', { newValue })
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






