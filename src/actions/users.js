import { FETCH_ALL, DELETE, CREATE, LIKE_USER } from "../constants/actionTypes";

import * as api from '../api/index'

export const getUsers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchUsers()
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)   
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id)
        dispatch({type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const likeUser = (id) => async (dispatch) => {
    try {
        const {data} = await api.likeUser(id)
        dispatch({type: LIKE_USER, payload: data})
    } catch (error) {
        console.log(error)
    }
}


export const createUser = (user) => async (dispatch) => {
    try {
        const {data} = await api.createUser(user)
        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}