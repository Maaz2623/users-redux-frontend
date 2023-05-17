import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from './actions/users'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Create from './Create'
import Home from './Home'


const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<Create/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App