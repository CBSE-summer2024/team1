import React from 'react';
import { Navigate } from 'react-router-dom';
import ComponentAdapter from '../Adapters/ComponentAdapter';
import { useAuth } from '../context/AuthContext';
import ProfileComponent from "UserManagementTeam/App";

export default function UserProfilePage() {
    const { user,loading} = useAuth();
    if(loading){
        return <h1>loading</h1>
    }
    return (
        user ? (
            <ComponentAdapter framework={'vue'} Component={ProfileComponent} props={{profile:user}} />
        ) : (
            <Navigate to={'/auth'} />
        )
    );
}
