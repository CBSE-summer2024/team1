import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import { EVENTS } from 'Shared'; 

export default function Layout() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleRoutingEvent = (event) => {
            console.log('Navigating to:', event.detail.url);
            navigate(event.detail.url); 
        };
        window.addEventListener(EVENTS.ROUTING_EVENT, handleRoutingEvent);


        return () => {
            window.removeEventListener(EVENTS.ROUTING_EVENT, handleRoutingEvent);
        };
    }, [navigate]);

    return (
        <>
            <NavBar />
            <div className='w-5/6 mx-auto py-8'>
                <Outlet />
            </div>
        </>
    );
}
