import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Browse from '../components/Browse'
import MovieDetails from '../components/MovieDetails'
export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/browse' element={<Browse />} />
            <Route path='/moviedetails' element={<MovieDetails />} />
        </Routes>
    )
}
