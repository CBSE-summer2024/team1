import NavBar from './Components/NavBar/NavBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <NavBar/>
            <div className='w-5/6 mx-auto py-8'>
                <Outlet/>
            </div>
        </>
    )
}
