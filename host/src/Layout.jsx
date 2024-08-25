import React from 'react'
import NavBar from './Components/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <NavBar/>
            <div className='w-5/6 mx-auto px-12 py-8'>
                <Outlet/>
            </div>
        </>
    )
}
