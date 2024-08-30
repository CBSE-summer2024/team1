import React from 'react'
import { supabase } from "../dbConfig"
import { useNavigate } from 'react-router-dom'
export default function LogoutButton() {
    const navigate = useNavigate();

    const signOut = async()=>{
        const { error } = await supabase.auth.signOut()
        navigate('/')
    }
    return (
        <button onClick={signOut}>Logout</button>
    )
}
