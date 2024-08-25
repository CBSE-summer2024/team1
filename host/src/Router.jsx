import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import UserProfilePage from "./Pages/UserProfilePage"
import React from 'react'
import Layout from "./Layout"
import DetailsPage from "./Pages/DetailsPage"
import AuthPage from "./Pages/AuthPage"
const router = createBrowserRouter(
    createRoutesFromElements(
    <Route element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/products/:id" element={<DetailsPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
    </Route>
    
))

export default function Router() {
  return (
    <RouterProvider router={router}/>
  )
}
