import React from 'react'
import { Link } from 'react-router-dom'

export default function TabList({ routes }) {
    return (
        <ul className='tabs' role="tablist">
            {routes.map((route, index) => (
                <li key={index} className='tab text-lg'>
                    <Link to={route.path} state={{category:1}}>{route.label}</Link>
                </li>
            ))}
        </ul>
    );
}