
import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from './Components/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <Box>
            <NavBar/>
            <Container>
                <Outlet/>
            </Container>
        </Box>
    )
}
