import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {createUser} from './actions/users'
import {useDispatch} from 'react-redux'

const Create = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [values, setValues] = useState({
        name: '',
        age: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createUser(values))
        .then(() => navigate('/'))
        .catch((err) => console.log(err))
    }

    


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Create User</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' onChange={(e) => setValues({...values, name: e.target.value})}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="Number" placeholder='Enter Age' className='form-control' onChange={(e) => setValues({...values, age: e.target.value})}/>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create