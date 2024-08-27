import React, { useEffect } from 'react';
import {Navigate} from 'react-router-dom';
import ComponentAdapter from '../Adapters/ComponentAdapter';
import { useAuth } from '../context/AuthContext';
import ProfileComponent from "UserManagementTeam/App"
export default function UserProfilePage() {
    const session = useAuth();

    return (
        session ? (
            <ComponentAdapter framework={'vue'} Component={ProfileComponent} props={session.user} />
        ):
        <Navigate to={'/auth'}/>
    );
}
