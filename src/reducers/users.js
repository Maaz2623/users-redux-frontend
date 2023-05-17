import {FETCH_ALL, DELETE, CREATE, LIKE_USER} from '../constants/actionTypes'

export default (users = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...users, action.payload]
        case DELETE:
            return users.filter((user) => user._id !== action.payload)
        case LIKE_USER:
            return users.map((user) => user._id === action.payload._id ? action.payload : user)
        default:
            return users;
    }
}