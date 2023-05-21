import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from '../Pages/Login'
import Home from '../Pages/Home'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
        </Routes >
    )
}

export default AllRoutes