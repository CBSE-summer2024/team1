import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentAdapter from '../Adapters/ComponentAdapter';
import { useAuth } from '../context/AuthContext';
import ProfileComponent from "UserManagementTeam/App"
export default function UserProfilePage() {
    const session = useAuth();
    const navigate = useNavigate();
    if (!session) {
        navigate('/auth');
    }

    return (
        session && (
            <ComponentAdapter framework={'vue'} Component={ProfileComponent} props={session.user} />
        )
    );
}
