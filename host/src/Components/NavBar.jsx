import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from "../Components/LogoutButton"
import { useAuth } from '../context/AuthContext';

export default function NavBar() {
    const session = useAuth();
    
    return (
        <div className="navbar bg-base-100 shadow justify-between">
            <Link className="btn btn-ghost text-xl" to="/">mart.ps</Link>
            {!session?<Link to="auth" className="btn btn-primary">login</Link>:<LogoutButton/>}
            
        </div>
    )
}
