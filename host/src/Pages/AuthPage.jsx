import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../dbConfig';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
    const session = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (session) {
            navigate('/');
        }
    }, [session, navigate]);

    return (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    );
}
