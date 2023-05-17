import axios from 'axios'

const url = 'https://mauve-monkey-yoke.cyclic.app/users'

export const createUser = (newUser) => axios.post(url, newUser)
export const fetchUsers = () => axios.get(url)
export const deleteUser = (id) => axios.delete(`${url}/${id}`)
export const likeUser = (id) => axios.patch(`${url}/like/${id}`)