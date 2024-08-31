import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from 'Shared/dist/dbConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading,setLoading]= useState(true)
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false)
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setLoading(false)

        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ session, user: session?.user,loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
