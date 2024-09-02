import React, { useEffect } from 'react';
import { Nav, Navigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from 'Shared/src/dbConfig';
import { useAuth } from '../context/AuthContext';
import {ROUTES} from "Shared"
export default function AuthPage() {
    const {session} = useAuth();
    return (
        !session ?<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />:<Navigate to={ROUTES.HOME}/>
    );
}
