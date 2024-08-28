import React from 'react';
import { Navigate } from 'react-router-dom';
import ComponentAdapter from '../Adapters/ComponentAdapter';
import { useAuth } from '../context/AuthContext';
import ProfileComponent from "UserManagementTeam/App";

export default function UserProfilePage() {
    const { user} = useAuth();
    return (
        user ? (
            <ComponentAdapter framework={'vue'} Component={ProfileComponent} props={{profile:user}} />
        ) : (
            <Navigate to={'/auth'} />
        )
    );
}
